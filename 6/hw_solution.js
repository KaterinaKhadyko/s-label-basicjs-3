function list(arr, index) {
	if (index == arr.length) {
		return null;
	}

	return {
		data: arr[i],
		next: list(arr, index + 1)
	};
}

function listComplex(arr) {
	if (arr.length === 0) {
		return null;
	}

	return {
		data: arr[0],
		next: listComplex(arr.slice(1))
	};
}

var obj = listComplex([0, 1, 4, 7, 9 ,10]);

function listLength(list) {
	if (list.next == null) {
		return 1;
	} else {
		return 1 + listLength(list.next);
	}

	// return list.next == null ? 1 : 1 + listLength(list.next);
}