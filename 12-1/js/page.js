var Page = function () {
	function init(callback) {
		$.ajax("data/init.json").done(function(response) {
			data = response;

			if (typeof callback == "function") {
				callback.call();
			}
		});
	}
	
	this.render = function(callback) {
		if (!data) {
			init(callback);
		} else {
			callback();
		}
	};
};