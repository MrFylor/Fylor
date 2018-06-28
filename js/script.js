$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
    // console.log(scroll);
	if (scroll >= 210) {
		$("#menumaisons").addClass("fixemenu");
	}
	else {
		$("#menumaisons").removeClass("fixemenu");
	}
});