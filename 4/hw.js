function convert(val) {
	return +val;
}

// <script src="../hw.js"></script>
// window.convert

var calc = (function() {
	var convert = function(val) {
		return +val;
	};

	var check = function(a, b) {
		return !isNaN(convert(a)) && !isNaN(convert(b));
	};

	return {
		add: function(a1, b1) {
			if (check(a1, b1)) {
				return convert(a1) + convert(b1);
			}
		}
	};
})();