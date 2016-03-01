for (var i = 0; i < 10; i++) {

}

console.log(i);

var calc = (function() {

	function convert(val) {

	}

	function check(val_1, val_2) {
		val_1 = convert(val);
		if (!isNaN(val_1) /* ... */) {
			return true;
		}
	}

	return {
		add: function(a, b) {
			return a + b;
		},
		divide: function(a, b) {
			if (check(a, b)) {
				// ...
			}
		}
	}
})();

calc.add();
// calc.convert();