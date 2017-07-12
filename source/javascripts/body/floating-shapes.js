(function() {
  $(".floating").each( function() {
    var randLeft = Math.floor(Math.random() * 9) + 1;
    var randfontSize = Math.floor(Math.random() * 3) + 8;
    var randRotation = Math.floor(Math.random() * 360) + 1;
    var randDelay = Math.floor(Math.random() * 5) + 1;
    var randDuration = Math.floor(Math.random() * 10) + 5;
    $(this).attr("style",("left:" + randLeft + "vw; font-size:" + randfontSize + "vw; transform: rotate(" + randRotation +"deg); animation-delay: " + randDelay + "s; animation-duration: " + randDuration + "s;)"));
  });
})();
