var SideBar = new function() {
	var categoryTemplate = new Template("templates/categories.html");
	var priceTemplate = new Template("templates/price-range.html");
	var sidebarTemplate = new Template("templates/sidebar.html");
	var brandTemplate = new Template("templates/brands.html");
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
		var params = {
			category: null,
			brand: null
		};
		
		sidebarTemplate.render("#sidebar-placeholder", null, function() {
			// TODO: change null to callback that will refresh products
			categoryTemplate.render(".category-products", data.categories, function() {
				$(".category-products h4.panel-title a").on("click", function(e) {
					e.preventDefault();
					var categoryId = +$(this).closest("[data-id]").attr("data-id");
					// TODO: create params object
					params.category = categoryId;
					Products.refresh(data, params);
				});
			});
			brandTemplate.render(".brands-name", data.categories, function() {
				$("ul.nav-pills.nav-stacked a").on("click", function(e) {
					e.preventDefault();
					var brandId = +$(this).closest("[data-id]").attr("data-id");
					// TODO: create params object
					params.brand = brandId;
					Products.refresh(data, params);
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