var Log = (function() {
	var log = {
		errors: [],
		warnings: [],
		messages: []
	};

	return {
		error: function(e) {
			log.errors.push(e);
		},
		warning: function() {

		},
		message: function() {

		},
		showErrorsInConsole: function() {
			for (var i = 0; i < log.errors.length; i++) {
				console.error(log.errors[i]);
			}
		},
		showErrorsInHTMLContainer: function(container) {
			var ul = document.createElement("ul");
			for (var i = 0; i < log.errors.length; i++) {
				var li = document.createElement("li");
				li.innerHTML = log.errors[i].message;

				ul.appendChild(li);
			}

			container.appendChild(ul);
		}
	}

})();