var obj = {
	a: "test",
	b: null,
	d: 100500,
	x: function(val) {
		alert(val);
	},
	xx: {
		a: "test 2",
		d: 100,
		xxx: {
			f: function() {},
			g: true
		}
	},
	xxxx: {
		n: "test 3",
		g: false
	},
	y: [
		100,
		200,
		"test 77",
		{
			a: "m",
			c: function() {},
			dd: null,
			arr: [
				100,
				{
					s: "str",
					ss: true
				}
			]
		}
	]
};

// for (var key in obj)
// a: ...
// b: ...

function show(obj) {
	for (var key in obj) {
		// "a", "b", "d", "x"
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] == "object" && obj[key] !== null) {
				show(obj[key]);
			} else {
				console.log(key + ": " + obj[key]);
			}
		}
	}
}

function deepCopy(obj) {
	var copy = {};

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {

			if (typeof obj[key] == "object" && obj[key] != null) {
				copy[key] = deepCopy(obj[key]);
			} else {
				copy[key] = obj[key];
			}
		}
	}

	return copy;
}

var copy = deepCopy(obj);
obj.xx.xxx.g = false;
console.log(copy.xx.xxx.g); // true

copy.y.push(350);
console.log(obj.y.length); // 3

var copySimple = JSON.parse(JSON.stringify(obj));