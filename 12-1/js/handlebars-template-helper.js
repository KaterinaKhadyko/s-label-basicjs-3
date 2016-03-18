var Template = function(source) {
	this.source = source;

	var handlebarsObj = null;
	var htmlInsert = function($element, data, callback) {
		$element.html(handlebarsObj(data));

		if (typeof callback == "function") {
			callback.call(null);
		}
	};

	this.render = function(selector, data, callback) {
		var $element = $(selector);
		if (!$element.length) return;

		if (handlebarsObj) {
			htmlInsert($element, data, callback);
		} else {
			$.ajax(this.source).done(function (templateSource) {
				handlebarsObj = Handlebars.compile(templateSource);
				htmlInsert($element, data, callback);
			});
		}
	};
};