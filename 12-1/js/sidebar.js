var SideBar = new function() {
	var categoryTemplate = new Template("templates/categories.html");
	var priceTemplate = new Template("templates/price-range.html");
	var sidebarTemplate = new Template("templates/sidebar.html");

	var data = null;
	var priceData = {
		min: 0,
		max: 1000,
		from: 600,
		to: 800
	};

	function init(callback) {
		$.ajax("data/init.json").done(function(response) {
			data = response;

			if (typeof callback == "function") {
				callback.call();
			}
		});
	}

	function renderHtml() {
		sidebarTemplate.render("#sidebar-placeholder", null, function() {
			// TODO: change null to callback that will refresh products
			categoryTemplate.render(".category-products", data.categories, function() {
				$(".category-products h4.panel-title a").on("click", function(e) {
					e.preventDefault();
					var categoryId = +$(this).closest("[data-id]").attr("data-id");
					// TODO: create params object

					Products.refresh();
				});
			});
			priceTemplate.render(".price-range", priceData, function() {
				$('#sl2').slider();
			});
		});
	}

	this.render = function() {
		if (!data) {
			init(renderHtml);
		} else {
			renderHtml();
		}
	};
};