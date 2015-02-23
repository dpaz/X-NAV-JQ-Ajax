
$(document).ready(function(){

	$.ajax({
		type: "GET",	
		url: "text",
		cache: false
	}).done(function(pagina){
		$("#Contenedor").text(pagina)
	});
	
	$("#boton").click(function(){
		$.ajax({
			type: "GET",	
			url: "text2",
			cache: false
		}).done(function(pagina){
			$("#Contenedor").text(pagina)
		});
	});
	
	
	$("#boton2").click(function(){
		$.ajax({
			type: "GET",	
			url: "text3",
			cache: false
		}).done(function(pagina){
			$("#Contenedor").html(pagina)
		});
	});



});
