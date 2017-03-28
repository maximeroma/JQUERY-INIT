$(document).ready(function(){
	$("#removeDiv").on('click',function(){
		$("#remove").remove();
	});
	
	var str = "";
	$("#setText").on("keypress",function(){		
		str = $("#setText").val();
		$("#needText").text(str);
	});

	$("#setColor").click(function(){
		$(".yellow").css("background-color", "red");
	});
});
