
//* Footer (current year)

const footerSpan = document.querySelector(".footer-span");

footerSpan.innerHTML = `${(new Date().getFullYear())}`;


/* Button ScroolTop */

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});


/* ToolTip Init */
 
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  