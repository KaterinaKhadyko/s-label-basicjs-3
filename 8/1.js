var TArray = function (type) {
	var internalType = type;
	this.push = function () {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof (arguments[i]) == type) {
				TArray.prototype.push.call(this, arguments[i]);
				// this.__proto__.push.call(this, arguments[i]);
			} else {
				console.log("Bad number");
				//   throw "Bad num";
			}
		}
	};

	this.unshift = function () {
		for (var i = arguments.length; i >= 0; i--) {
			if (typeof (arguments[i]) == type) {

				this.__proto__.unshift.call(this, arguments[i]);
			} else {
				console.log("Bad number");
				//   throw "Bad num";
			}
		}
	};

	this.splice = function () {
		var temp = [];
		for (var i = 0; i < arguments.length; i++) {
			if (i < 2 || typeof (arguments[i]) == type) {
				temp[i] = arguments[i];

			} else {
				console.log("Bad number");
				//   throw "Bad num";
			}
		}

		this.__proto__.splice.apply(this, temp);
	};

	this.concat = function () {
		var arr = [];
		for (var i = 0; i < arguments.length; i++) {
			for (var j = 0; j < arguments[i].length; j++)

				if (typeof (arguments[i][j]) == type) {
					arr.push(arguments[i][j]);
				} else {
					console.log("Bad number");
					//   throw "Bad num";
				}
		}

		return this.__proto__.concat.call(this, arr);
	};
};
TArray.prototype = [];

var nArray = new TArray("number");

nArray.push(3, 4, 5, 'k');
nArray.unshift(6, 14, 5);
console.log(nArray);
nArray.splice(3, 2, 9, 888, 77);
console.log(nArray);
var newArray = nArray.concat(['a', 'b', 'c'], [2, 3]);
console.log(newArray);

nArray.push("test");