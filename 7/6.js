var Calc = function() {
	this.result = 0;
	this.add = function(val) {
		this.result += val;
	};
};

var SciCalc = function() {
	// Calc.call(this);

	this.sin = function() {
		this.result = Math.sin(this.result);
	}
};

SciCalc.prototype = new Calc();

var s = new SciCalc();