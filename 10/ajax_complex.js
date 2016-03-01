var AJAX = function() {
	this.makeRequest = function(url, method, callback) {
		var self = this;
		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				callback.call(null, xhttp.responseText);
				self.resetRequestCount();
			}
		};

		xhttp.open(method, url, true);
		xhttp.send();
	};
};

var AJAX_COMPLEX = function(requests, parallelCount) {
	var numberOfCurrentRequests = 0;

	this.makeRequests = function() {
		if (numberOfCurrentRequests == 0) {
			while (numberOfCurrentRequests < parallelCount && requests.length) {
				this.makeRequest.call(this, requests[0].url, requests[0].method, requests[0].callback);

				numberOfCurrentRequests++;
				requests.shift();
			}
		}
	};

	this.resetRequestCount = function() {
		numberOfCurrentRequests--;
		this.makeRequests();
	}
};

AJAX_COMPLEX.prototype = new AJAX();

var ajax_cmplx = new AJAX_COMPLEX([
	{
		url: "GSN.zip",
		method: "GET",
		callback: function () {
			alert("1");
		}
	},
	{
		url: "tree-menu.json",
		method: "GET",
		callback: function () {
			alert("2");
		}
	},
	{
		url: "GSN.zip",
		method: "GET",
		callback: function () {
			alert("1");
		}
	},
	{
		url: "tree-menu.json",
		method: "GET",
		callback: function () {
			alert("2");
		}
	}
], 2);

ajax_cmplx.makeRequests();