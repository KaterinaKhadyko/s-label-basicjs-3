var Calc = function() {
	var result = 0;

	this.add = function(val) {
		result += val;
	}
};

var c = new Calc();
var c2 = Calc();

var b = (c instanceof Calc);