var Products = new function() {
	var productsTemplate = new Template("templates/products.html");

	var data = null;

	function init(callback) {
		$.ajax("data/init.json").done(function(response) {
			data = response.products;

			if (typeof callback == "function") {
				callback.call();
			}
		});
	}

	function renderHtml() {
		productsTemplate.render(".features_items", data);
	}

	this.render = function() {
		if (!data) {
			init(renderHtml);
		} else {
			renderHtml();
		}
	};

	this.refresh = function(parms) {

	};
};