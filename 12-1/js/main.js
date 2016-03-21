$(document).ready(function(){
	$(function () {
		
		var mainMenuElement = document.getElementById("main-menu");
		var mainMenuLinks = mainMenuElement.getElementsByTagName("li");
		var pages = {
			"#index": indexContent,
			"#shop": shopContent
		};
		for (var linkIndex = 0; linkIndex<mainMenuLinks.length; linkIndex++) {
			mainMenuLinks[linkIndex].onclick = (function(index) {
				return function(event) {
					event.preventDefault();
					for (var key in pages) {
						if (key == event.target.hash) {
							pages[key].render();
						}
					}
				}
			})(linkIndex);
		}
		indexContent.render();
		var RGBChange = function() {
			$('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
		};

		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});