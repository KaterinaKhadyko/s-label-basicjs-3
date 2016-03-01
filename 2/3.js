var result = "test" * 10;
var result_2 = "test" + 10;
var result_3 = 10 + "test";
var result_4 = 10 + "5";

var parse = parseInt("100.5");
var parse_2 = parseFloat("100.5");
var parse_3 = parseInt("100,5");
var parse_4 = parseInt("100 pens");

function test(a) {
	var parse = parseInt(a);

	if (!isNaN(parse) && parse == a) {

	}
}