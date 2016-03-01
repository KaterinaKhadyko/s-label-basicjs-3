var input = "100+5-3+150-230";

function calc(str) {
	var index = 0;
	var first, second, operator, result;

	var temp = "";

	while(index < str.length) {
		if (str[index] === "+" || str[index] === "-") {
			if (first === undefined) {
				first = +temp;
				operator = str[index];
				index++;
				temp = "";

				continue;
			}

			if (second === undefined) {
				second = +temp;

				first = oper(first, second, operator);
				second = undefined;

				operator = str[index];
				index++;
				temp = "";
			}
		} else {
			temp += str[index];
			index++;

			if (index === str.length) {
				second = +temp;
				first = oper(first, second, operator);
			}
		}
	}

	return first;
}

function oper(a, b, o) {
	if (o === "+") return a + b;
	if (o === "-") return a - b;
}