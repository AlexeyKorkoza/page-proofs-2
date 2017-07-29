$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    if ($('#nav').css('display') === 'none') {
      $('#nav').css('display', 'block');
    } else {
      $('#nav').css('display', '');
    }
  });
});