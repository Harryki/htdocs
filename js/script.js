// Shorthand for $( document ).ready()
$(function() {
	console.log( "ready!" );

	var currentYear = (new Date).getFullYear();
	$('#year').text(currentYear);
});

function myFunction(){
	$("#intro_div").slideToggle();
	$('#intro_icon').toggleClass("fa-minus");
	$('#intro_icon').toggleClass("fa-plus");

}
function myFunction2(){
	$("#skills_div").slideToggle();
	$('#skills_icon').toggleClass("fa-minus");
	$('#skills_icon').toggleClass("fa-plus");

}
function myFunction3(){
	$("#contact_div").slideToggle();
	$('#contact_icon').toggleClass("fa-minus");
	$('#contact_icon').toggleClass("fa-plus");

}

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$('#myAlert').on('closed.bs.alert', function () {
  // do something…
  console.log("ddd");
})
