// Shorthand for $( document ).ready()
$(function() {
	console.log( "ready!" );

	
	$( "#calculate_btn" ).click(function() {
		var moon=parseInt(document.getElementById("moon").value);
		var red=parseInt(document.getElementById("red").value);
		var ahn=parseInt(document.getElementById("ahn").value);
		var you=parseInt(document.getElementById("you").value);
		var sim=parseInt(document.getElementById("sim").value);
		

		var moon_GDJ=47;
		var red_GDJ=23;
		var ahn_GDJ=16;
		var you_GDJ=7;
		var sim_GDJ=7;
		var GDJ_abs_total= Math.abs(moon_GDJ-moon)+Math.abs(red_GDJ-red)+Math.abs(ahn_GDJ-ahn)+Math.abs(you_GDJ-you)+Math.abs(sim_GDJ-sim);

		var moon_harry=45;
		var red_harry=25;
		var ahn_harry=20;
		var you_harry=5;
		var sim_harry=5;
		var harry_abs_total= Math.abs(moon_harry-moon)+Math.abs(red_harry-red)+Math.abs(ahn_harry-ahn)+Math.abs(you_harry-you)+Math.abs(sim_harry-sim);



		console.log( harry_abs_total );
		
		if(harry_abs_total<GDJ_abs_total){
			alert("The winner is Harry");
		}else{
			alert("The winner is GDJ");

		}
	});
});

