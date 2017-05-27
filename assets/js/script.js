$('document').ready(function() {
	$('.cs-label').delay(600).fadeIn('slow');
	$('.cs-label span').on('click', function(e) {
		$('.cs-label span').toggleClass('cs-drop-active');
		$('.cs-switcher').slideToggle(125);
	});
	$("a[href='#contact-section']").click(function() {
	  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
	  return false;
	});
})