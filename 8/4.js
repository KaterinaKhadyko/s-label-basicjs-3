function add(a, b) {
	if (typeof a != "number" || typeof b != "number") {
		throw new TypeError();
	}

	if (isNaN(a) || isNaN(b)) {
		throw new EvalError();
	}

	return a + b;
}

// 1...

try {
	f();
	var val = add(10, 5);
	val = add(val, "test");
	// ...
}
catch(e) {
	console.log(e instanceof ReferenceError);
	if (e instanceof TypeError) {
		console.error("Unsupported type");
	} else if (e instanceof ReferenceError) {
		e.message = "Undefined reference value";
		console.error(e);
	} else {
		//console.error("Unsupported error");
		throw e;
	}

	/*
	switch (e){
		case e instanceof TypeError:
			console.error("Unsupported type");
			break;
		case (e instanceof ReferenceError):
			console.error("Undefined referenced value");
			break;
		default:
			console.error("Unsupported error");
	}*/
}

// 2...