"use strict";

$(function () {
  if ($(window).width() > 760) {
    slider();
  }

  $(function slider() {
    $(document).ready(function () {
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000
      });
    });
  });
  var m_menu = $("#js-m-menu");
  var m_button = $("#js-m-button");
  var close = $("#close");
  $(function openMenu() {
    m_button.click(function () {
      m_menu.toggleClass("show");
    });
  });
});
/*       m_button.replaceWith("<button class='m-menu-button' id='js-m-button' > <span class='menu-line'></span><span class='menu-line'></span> <span class='menu-line'></span>"); */

/*       m_button.replaceWith("<button class='m-menu-button-close close' id='close'><img src='img/icon-m.svg'></button>"); */
//# sourceMappingURL=script.dev.js.map
