var productsTemplate = {
	source: "templates/products.html",
	$element: $(".features_items"),
	data: {},
	hanlebarsTpl: ""
};
var categoriesTemplate = {
	key: "categories",
	source: "templates/categories.html",
	$element: $(".category-products"),
	clickElement: ".category-products h4.panel-title a",
	data: {},
	hanlebarsTpl: ""
};
var brandsTemplate = {
	key: "brands",
	source: "templates/brands.html",
	$element: $(".brands-name"),
	data: {},
	hanlebarsTpl: "",
	clickElement: "ul.nav-pills.nav-stacked a",
};

$(document).ready(function(){
	$(function () {
		function renderElement(template, data) {
			if (template.hanlebarsTpl) {
				template.$element.html(template.hanlebarsTpl(data));
				return;
			}

			$.ajax(template.source).done(function (templateSource) {
				template.hanlebarsTpl = Handlebars.compile(templateSource);
				template.$element.html(template.hanlebarsTpl(data));
				
				
				if(template.clickElement !== undefined) {
					clickElement = $(template.clickElement);
					clickElement.on("click", function(e) {
						e.preventDefault();
						var keyId = +$(this).closest("[data-id]").attr("data-id");
						productsTemplate.data = {
							products: []
						};
						$.each(data.products, function(id, product) {
							if (product[template.key].indexOf(keyId) != -1) {
								productsTemplate.data.products.push(product);
							}
						});

						renderElement(productsTemplate, productsTemplate.data);
					}); 
				}
			});
		}
		
		$.ajax("data/init.json").done(function(data) {
			renderElement(categoriesTemplate, data);
			renderElement(productsTemplate, data);
			renderElement(brandsTemplate, data);
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