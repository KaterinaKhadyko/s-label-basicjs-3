var input = "100+5-3+150-230";
// 105-3+150-230
// 102+150-230
// 252-230
// 22

function calc(str) {
	if (str.indexOf("+") < 1 && str.indexOf("-") < 1) {
		return +str;
	}

	var first = parseFloat(str);
	var operatorIndex = first.toString().length;
	var operator = str[operatorIndex];
	str = str.slice(operatorIndex + 1);

	var second = parseFloat(str);
	str = str.slice(second.toString().length);

	var result = oper(first, second, operator);

	str = result + str;

	return calc(str);
}

function oper(a, b, o) {
	if (o === "+") return a + b;
	if (o === "-") return a - b;
}