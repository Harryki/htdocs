// Shorthand for $( document ).ready()
$(function() {
	console.log( "ready!" );

	var currentYear = (new Date).getFullYear();
	$('#year').text(currentYear);


	$('#tokenfield').tokenfield({
		showAutocompleteOnFocus: true
	})
});

function myFunction(){
	$("#intro_div").slideToggle();

	$("#intro_ellipsis").toggle(300);
	$('#intro_icon').toggleClass("fa-chevron-down");
	$('#intro_icon').toggleClass("fa-chevron-right");

}
function myFunction2(){
	$("#skills_div").slideToggle();
	$("#skills_ellipsis").toggle(300);
	$('#skills_icon').toggleClass("fa-chevron-down");
	$('#skills_icon').toggleClass("fa-chevron-right");

}
function myFunction3(){
	$("#contact_div").slideToggle();
	$("#contact_ellipsis").toggle(300);
	$('#contact_icon').toggleClass("fa-chevron-down");
	$('#contact_icon').toggleClass("fa-chevron-right");

}
function myFunction4(){
	$("#insta_div").slideToggle();
	$("#insta_ellipsis").toggle(300);
	$('#insta_icon').toggleClass("fa-chevron-down");
	$('#insta_icon').toggleClass("fa-chevron-right");

}

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$('#myAlert').on('closed.bs.alert', function () {
	// do something…
	console.log("ddd");
})
