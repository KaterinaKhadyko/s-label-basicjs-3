var AJAX = function(url, method, callback) {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			callback.call(null, xhttp.responseText);
		}
	};

	xhttp.open(method, url, true);
	xhttp.send();
};