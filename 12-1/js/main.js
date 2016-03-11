/*scroll to top*/

var productsTemplate = {
	source: "templates/products.html",
	$element: $(".features_items"),
	data: {},
	hanlebarsTpl: ""
};

$(document).ready(function(){
	$(function () {
		var productsTemplate = null;

		function renderProducts(data) {
			if (productsTemplate) {
				$(".features_items").html(productsTemplate(data));
				return;
			}

			$.ajax("templates/products.html").done(function (templateSource) {
						productsTemplate = Handlebars.compile(templateSource);
						$(".features_items").html(productsTemplate(data));
					});
		}

		$.ajax("data/init.json").done(function(data) {
			$.ajax("templates/categories.html").done(function (templateSource) {
				var template = Handlebars.compile(templateSource);
				$(".category-products").html(template(data));
				$(".category-products h4.panel-title a").on("click", function(e) {
					e.preventDefault();
					var categoryId = +$(this).closest("[data-id]").attr("data-id");
					var productsData = {
						products: []
					};

					$.each(data.products, function(id, product) {
						if (product.categories.indexOf(categoryId) != -1) {
							productsData.products.push(product);
						}
					});

					renderProducts(productsData);
				});
			});

			$.ajax("templates/price-range.html").done(function (templateSource) {
				var template = Handlebars.compile(templateSource);

				var priceData = {
					min: 0,
					max: 1000,
					from: 600,
					to: 800
				};

				$(".price-range").html(template(priceData));
				$('#sl2').slider();
			});

			renderProducts(data);
		});

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
