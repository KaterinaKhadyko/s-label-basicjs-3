var f = function() {
	var c = 100;

	return function() {
		return c + 100;
	}
};

var f2 = function() {
	var c = 100;

	return {
		method: function() {
			return c + 100;
		}
	}
};

var F = function() {
	var c = 100;

	this.getC = function() {
		return c + 100;
	}
};

var fObj = new F();