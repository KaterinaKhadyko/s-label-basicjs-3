var arr = [10, 3, 2, 5, 15, -10, 80];

// arr.sort() => [-10, 2, 3, 5, 10, 15, 80]
// [object Object]

if (arr.indexOf("test") == -1) {
	arr.push("test");
}

var result = arr.map(function(elem) {
	elem = elem + 2;
});