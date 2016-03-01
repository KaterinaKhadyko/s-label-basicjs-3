function calc() {
	var result = 0;

	return {
		add: function(val) {
			result += val;
		},
		subs: function(val) {
			result -= val;
		},
		show: function() {
			return result;
		}
	}
}

var c = calc();
c.pow = function(val) {
	result = result * val;
};

c.add(5);
c.pow(10);
c.show();