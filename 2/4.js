var a = 10;
a++; // => a = a + 1

if (a === ++a) {
	console.log('first');
}

if (a === a++) {
	console.log('second');
}

var b = "10";
b = +b;