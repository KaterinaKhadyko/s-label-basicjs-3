var Products = function(section) {

	var data = null;
	this.selector = null;
	
	var _this = this;
	
	var productFilters = [
		function(data) {
			if (searchParams.category === null) {
				return true;
			}
			return data.categories.indexOf(searchParams.category) != -1;
		},
		function(data) {
			if (searchParams.brand === null) {
				return true;
			}
			return data.brand == searchParams.brand;
		},
		function(data) {
			if (searchParams.price.min === null &&  searchParams.price.max === null) {
				return true;
			}
			return (data.price >= searchParams.price.min && data.price <= searchParams.price.max);
		}
	];

	this.filterProducts = function() {
		var result = [];
		for (var index = 0; index < data.length; index++) {
			var check = true;

			for (var filterIndex = 0; filterIndex < productFilters.length; filterIndex++) {
				check = check && productFilters[filterIndex](data[index]);

				if (!check) {
					break;
				}
			}

			if (check) {
				result.push(data[index]);
			}
		}

		return result;
	};

	var init = function(callback) {
		$.ajax("data/init.json").done(function(response) {
			data = response[section];

			if (typeof callback == "function") {
				callback(data);
			}
		});
	};

	var renderHtml = function(items) {
		var productsTemplate = new Template("templates/products.html");
		productsTemplate.render(_this.selector, items);
	};
	

	this.render = function() {
		if (!data) {
			init(renderHtml);
		} else {
			renderHtml(data);
		}
	};

	this.refresh = function() {
		renderHtml(this.filterProducts());
	};
};

var SideBar = function(Products) {
	var categoryTemplate = new Template("templates/categories.html");
	var brandsTemplate = new Template("templates/brands.html");
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
			categoryTemplate.render(".category-products", data.categories, function() {
				$(".category-products h4.panel-title a").on("click", function(e) {
					e.preventDefault();
					searchParams.category = +$(this).closest("[data-id]").attr("data-id");

					Products.refresh();
				});
			});
			priceTemplate.render(".price-range", priceData, function() {
				var priceHolder = $('#sl2');

				var slider = priceHolder.slider();

				priceHolder.on('slideStop', function(e) {
					e.preventDefault();
					searchParams.price.min = e.value[0];
					searchParams.price.max = e.value[1];

					Products.refresh();
				});
			});
			brandsTemplate.render(".brands-name", data.brands, function() {
				$("ul.nav-pills.nav-stacked a").on("click", function(e) {
					e.preventDefault();
					searchParams.brand = +$(this).closest("[data-id]").attr("data-id");
					Products.refresh();
				});
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

var Page = function(contentTemplate, Products, SideBar) {
	var data = null;
	function renderHtml() {
		contentTemplate.render("#content", null, function() {
			SideBar.render();
			Products.render();
		});
	}
	function init(callback) {
		$.ajax("data/init.json").done(function(response) {
			data = response;

			if (typeof callback == "function") {
				callback.call();
			}
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