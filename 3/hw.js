var a = "100";
var b = "5";

function add(val_1, val_2) {
	val_1 = +val_1; // число, либо NaN
	val_2 = +val_2;

	if (!isNaN(val_1) && !isNaN(val_2)) {
		return val_1 + val_2;
	}
}

function division(val_1, val_2) {
	if (val_2 !== 0) {
		var c = 5;
		return val_1 / val_2;
	}

	return; // => return undefined;
}

function convert(val) {
	/*
	if (typeof val != "number" && typeof val != "string") {
		return;
	}*/

	var num = +val;

	if (!isNaN(num)) {
		if (typeof val == "number") {
			return num;
		} else if (typeof val != "number" && num.toString() === val) {
			return num;
		}
	} else {
		alert('error');
	}

	/*
	if (!isNaN(num) &&
		(typeof val == "number" ||
			typeof val != "number" && num.toString() === val)) {
		return num;
	}*/
}