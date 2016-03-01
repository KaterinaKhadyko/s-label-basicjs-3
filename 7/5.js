var Calc = function() {
	var result = 0;

	this.add = function(val) {
		result += val;
	}
};

var obj = {};
Calc.call(obj);