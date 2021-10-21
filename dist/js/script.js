$(document).ready(function() {
  $('.navbar-toggler').on('click', function() {
    $('#sidebar').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    document.getElementById("bodyContent").style.width="100%";
  });
});
