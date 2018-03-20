$( document ).ready(function() {
  // Shift nav in mobile when clicking the menu.
  $(document).on('click', "[data-toggle='wy-nav-top']", function() {
    $("[data-toggle='wy-nav-shift']").toggleClass("shift");
    $(".rst-versions").toggleClass("shift");
  });

  // Close menu when you click a link.
  $(document).on('click', ".wy-menu-vertical .current ul li a", function() {
    $("[data-toggle='wy-nav-shift']").removeClass("shift");
    $(".rst-versions").toggleClass("shift");
  });

  // Keyboard navigation
  document.addEventListener("keydown", function(e) {
    if ($(e.target).is(':input')) return true;
    var key = e.which || e.keyCode || window.event && window.event.keyCode;
    var page;
    switch (key) {
      case 39:  // right arrow
        page = $('[role="navigation"] a:contains(Next):first').prop('href');
        break;
      case 37:  // left arrow
        page = $('[role="navigation"] a:contains(Previous):first').prop('href');
        break;
      default: break;
    }
    if (page) window.location.href = page;
  });

  // Make tables responsive
  $("table.docutils:not(.field-list)").wrap("<div class='wy-table-responsive'></div>");

  hljs.initHighlightingOnLoad();

  $('table').addClass('docutils');
});

window.SphinxRtdTheme = (function (jquery) {
  var stickyNav = (function () {
    var navBar,
        win,
        stickyNavCssClass = 'stickynav',
        applyStickNav = function () {
          if (navBar.height() <= win.height()) {
            navBar.addClass(stickyNavCssClass);
          } else {
            navBar.removeClass(stickyNavCssClass);
          }
        },
        enable = function () {
          applyStickNav();
          win.on('resize', applyStickNav);
        },
        init = function () {
          navBar = jquery('nav.wy-nav-side:first');
          win    = jquery(window);
        };
    jquery(init);
    return {
      enable : enable
    };
  }());
  return {
    StickyNav : stickyNav
  };
}($));

// The code below is a copy of @seanmadsen code posted Jan 10, 2017 on issue 803.
// https://github.com/mkdocs/mkdocs/issues/803
// This just incorporates the auto scroll into the theme itself without
// the need for additional custom.js file.
//
$(function() {
  $.fn.isFullyWithinViewport = function(){
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = this.offset().top;
    bounds.bottom = bounds.top + this.outerHeight();
    return ( ! (
      (bounds.top <= viewport.top) ||
      (bounds.bottom >= viewport.bottom)
    ) );
  };
  if( $('li.toctree-l1 .current').length && !$('li.toctree-l1 .current').isFullyWithinViewport() ) {
    $('.wy-nav-side')
      .scrollTop(
        $('li.toctree-l1 .current').offset().top -
        $('.wy-nav-side').offset().top -
        60
      );
  }
});


/*
 * Highlights the active section in the sidenav as user scrolls through document.
 */
$(function startHeaderScrollspy() {

  function unsetActive(navEl) {
    $(navEl).attr('style', '');
  }
  function setActive(navEl) {
    $(navEl).attr('style',
      'color: #404040;' +
      'font-weight: bold;' +
      'background-color: #d6d6d6;'
    );
  }

  try {
    var headers = [];
    var ACCEPTABLE_OFFSET = 50; // pixels

    // find all headers in the document with an assigned navlink
    $('h1[id], h2[id], h3[id], h4[id]').each(function(i, value) {
      var navEl = $('li.current a[href="#' + $(value).attr('id') + '"]');
      if (navEl.length) {
        headers.push({
          el: value,
          navEl: navEl[0]
        });
      }
    });

    var prevActiveHeader;
    $(document).scroll(function() {
      var scrollTop = $(document).scrollTop();

      headers.forEach(function(header, index) {
        // get the top position of header, allow an ACCEPTABLE_OFFSET of space to
        // scroll above header before it transitions to a higher up section
        header.top = $(header.el).offset().top - ACCEPTABLE_OFFSET;

        // get the bottom of the header section, we then have the position range of each header section
        if (index !== headers.length - 1) {
          // if this is not the last array element, use next header as a stopping point for this section
          header.bottom = $(headers[index + 1].el).offset().top;
        } else {
          // last element, assign stopping point to bottom to bottom of page
          header.bottom = $(document).outerHeight(true);
        }

        if (scrollTop > header.top && scrollTop < header.bottom) {
          // scrollTop within range of this header, set its navEl to active
          if (prevActiveHeader) {
            unsetActive(prevActiveHeader.navEl);
          }
          setActive(header.navEl);
          prevActiveHeader = header;
        } else if (scrollTop < headers[0].top) {
          // scrolled to the very top, remove active class from children
          if (prevActiveHeader) {
            unsetActive(prevActiveHeader.navEl);
          }
        }
      });
    });
  } catch(e) {
    console.log('Error: ', e);
  }
});


/**
 * Initializes version select expandable menu.
 */
$(function initializeVersionSelect() {

  // `base_url` comes from the base.html template for this theme.
  var CURRENT_VERSION_STR = (window.location.pathname.match(/^(\/v\/)([A-Za-z0-9\.\-_]+)(\/)/i) || [])[2] || 'latest';

  function checkIfPageExistsInSelectedVersion(href2, version) {
    var xhttp= new XMLHttpRequest();
    xhttp.open("GET", href2, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 404) {
        window.location.href = window.location.origin + '/v/' + version + '/'; //home page
      }
      else if (this.readyState == 4 && this.status == 200) {
        window.location.href = href2;
      }
    };
  }

  function getCurrentVersion(versions) {
    return versions.find(function(i) {
      return i.version === CURRENT_VERSION_STR ||
             i.aliases.includes(CURRENT_VERSION_STR);
    });
  }

  function getVersionLink(version) {
    var match = window.location.href.match(/\/v\/[0-9]*\.[0-9]*\.[0-9]*\//);
    if (match) {
      // path has version number in it
      return window.location.href.replace(/\/v\/[0-9]*\.[0-9]*\.[0-9]*\//,  '/v/' + version + '/');
    } else {
      // path does not have version in it
      return window.location.href.replace(window.location.origin, window.location.origin + '/v/' + version);
    }
  }

  function getLatestVersionLink() {
    return window.location.href.replace(/\/v\/[0-9]*\.[0-9]*\.[0-9]*\//, '/');
  }

  $.get('/versions.json')
    .done(function(versions) {
      var currentVersion = getCurrentVersion(versions);
      var latestVersion = versions.find(function(version) { return version.latest; });

      var $versionSelect = $('.version-select');
      var $versionSelectBar = $('.version-select__bar');
      var $versionSelectBarVersion = $('.version-select__bar-version');
      var $versionSelectMenu = $('.version-select__menu');
      var $versionSelectMenuVersions = $('.version-select__menu-versions');
      var $versionSelectMenuVersionsLatest = $('.version-select__menu-versions-latest');

      // append select bar version; use CURRENT_VERSION_STR since it's a string that's either "latest" or "*.*.*"
      $versionSelectBarVersion.append(CURRENT_VERSION_STR + (CURRENT_VERSION_STR === 'latest' ? ' (' + latestVersion.title + ')' : ''));

      // expand/collapse click handler
      $versionSelectBar.click(function(event) {
        $versionSelectMenu.toggle();
      });

      // set link for latest version
      $versionSelectMenuVersionsLatest.attr('href', getLatestVersionLink());

      // append versions
      versions.forEach(function(version) {
        $versionSelectMenuVersions.append('<dd><span class="version">' + version.title + '</span></dd>');
      });

      $('.version-select__menu-versions > dd > .version').each(function(i, el) {
        // bold active version
        var $el = $(el);
        var versionStr = $el.text();
        if (versionStr === CURRENT_VERSION_STR) {
          $el.addClass('version--active');
        }

        $el.click(function() {
          if (versionStr === 'latest') {
            checkIfPageExistsInSelectedVersion(getLatestVersionLink(), latestVersion.version);
          } else {
            checkIfPageExistsInSelectedVersion(getVersionLink(versionStr), versionStr);
          }
        });
      });
    })
    .fail(function() {
      var $sideNav = $('nav.wy-nav-side');
      var $versionSelect = $('.version-select');
      $sideNav.css('height', '100%');
      $versionSelect.hide();
    });
});