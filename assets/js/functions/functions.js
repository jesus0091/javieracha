$(function(){
	var navbar = $('.scrolling-navbar');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
});

$(document).on('click', '.dark-light', function () {
    $('body').toggleClass('light-mode');

    if(  $('body').hasClass('light-mode')  ){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

if(localStorage.getItem('dark-mode') === 'true'){
	$('body').addClass('light-mode');

} else {
	$('body').removeClass('light-mode');
}
