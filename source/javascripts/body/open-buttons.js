(function() {
  $('#button1').on('click',function(){
    $('#button2').addClass('animateToRight');
    $('#button3').addClass('animateToLeft');
    $('#button1').addClass('hide');
  });
})();
