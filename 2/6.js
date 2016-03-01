var test = "test value for ...";
test.indexOf("e"); // => 1
test.lastIndexOf("e"); // => 9
test.indexOf("z"); // => -1

if (test.indexOf("b") != -1) {
	// ...
}

var math = "10+10";
if (math.indexOf("+") != -1 ||math.indexOf("-") != -1
	|| math.indexOf("*") != -1 || math.indexOf("/") != -1) {
	// ...
}

math[0]; // => "1"
math = math.replace("10", "20"); // "20+20"
var s = math.split("+"); // ["20", "20"]