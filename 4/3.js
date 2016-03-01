var sum = 0;
var arr = [10, 7, 5, 3, 0 , 9, 20];

// arr.length

for (var i = 0; i < arr.length; i++) {
	sum = sum + arr[i];
}

var min = arr[0];
for (var j = 0; j < arr.length; j++) {
	if (arr[j] < min) {
		min = arr[j];
	}
}

// [20, 9, 0, 3, 5, 7, 10]
for (var k = 0; k < Math.ceil(arr.length / 2); k++) {
	var temp = arr[k];
	arr[k] = arr[arr.length - k - 1];
	arr[arr.length - k - 1] = temp;
}