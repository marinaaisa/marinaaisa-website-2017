(function() {
  var scrollTop = $(".footer__top-page");

  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  });
})();