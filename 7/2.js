function test() {
	var val = 10;

	return function() {
		val++;
	}
}