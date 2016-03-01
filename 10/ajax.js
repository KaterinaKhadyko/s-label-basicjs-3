var numberOfCurrentRequests = 0;

var AJAX = function(url, method, callback) {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			callback.call(null, xhttp.responseText);
			numberOfCurrentRequests--;
		}
	};

	xhttp.open(method, url, true);
	xhttp.send();
};

var AJAX_multiple = function(requests, parallelRequestsCount) {
	while (numberOfCurrentRequests < parallelRequestsCount && requests.length) {
		//AJAX(requests[0].url, requests[0].method, requests[0].callback);
		(function (req) {
			var xhttp = new XMLHttpRequest();

			xhttp.onreadystatechange = function () {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					req.callback.call(null, xhttp.responseText);
					numberOfCurrentRequests--;

					if (numberOfCurrentRequests == 0) {
						AJAX_multiple(requests, parallelRequestsCount);
					}
				}
			};

			xhttp.open(req.method, req.url, true);
			xhttp.send();
		})(requests[0]);

		numberOfCurrentRequests++;
		requests.shift();
	}
};