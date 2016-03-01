// closure

function closure() {
	var test = 0;

	return function() {
		return test;
	}
}

var c = closure();
// c = function() { return test; }
c(); // => test

for (var i = 0; i < 3; i++) {
	document.getElementById("button_" + i).onclick =
		(function() {
			var index = i;

			return function() {
				alert(index);
			};
		})();
}