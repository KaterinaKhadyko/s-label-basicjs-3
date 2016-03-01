var arr = []; // new Array()
arr.push("test");
arr.push(10);

// typed array

var tArray = (function() {
	var arr = [];

	return {
		push: function(val) {
			if (typeof val == "number") {
				arr.push(val);
			}
		},
		show: function() {
			return JSON.parse(JSON.stringify(arr));
		}
	}
})();

tArray.push(10);
tArray.push(7);
tArray.push("test");

console.log(tArray.show());