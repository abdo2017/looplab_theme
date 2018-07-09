jQuery(document).ready(function($) {
	// placeholder for the form
var myPlaceholder = "";
	$("form").on("focus","input",function(){
		myPlaceholder = $(this).attr("placeholder");
		$(this).attr("placeholder","");
	});
	$("form").on("blur","input",function(){
		$(this).attr("placeholder",myPlaceholder);
	});
	


});
