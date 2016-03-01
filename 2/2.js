function add(a, b) {
	if (typeof a == "number" && typeof b == "number") {
		return a + b;
	}
}

function add_2(a, b) {
	if (typeof a == "number" || typeof b == "number") {
		return a + b;
	}
}