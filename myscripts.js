
$(document).ready(function(){
	//$("body").hide().fadeIn(1000);
	$("#restOf").hide()
	$("#mHeader").hide().fadeIn(1000);
	//$("#restOf").hide().fadeIn(3000);
	$("#mHeader").promise().done(function(){
    // will be called when all the animations on the queue finish
    	$("#restOf").fadeIn(1000);
    	$("#mDiv").css("border-radius", "50%");
	});
});

// $(window).load(function(){
//     $("#mHeader").hide().fadeOut(1500);
// });

// $(window).load(function(){
//     $("#restOf").hide().fadeOut(2000);
// });
