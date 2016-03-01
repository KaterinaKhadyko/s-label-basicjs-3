var obj = {
	f: function() {
		alert("obj");
	}
};

var copy = {};
copy.f = obj.f;

obj.f = function () {
	alert("new obj");
};

copy.f();