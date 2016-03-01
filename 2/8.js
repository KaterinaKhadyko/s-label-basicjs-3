var s = "100 pens in my hand";

// check if we have {n} pens and get {n}

// "\w+" => any positive int number
// "\w+" => "0000000015"

s.match(new RegExp("\d+"));
s.match(new RegExp("100 pens"));
s.match(new RegExp("\d")); // => ["1", "0", "0"]

s = "100 pens in my hand 100 pens in my hand";
s.match(new RegExp("([0-9]+) pens", "g"));

var r = new RegExp("(.[0-9]+) pens", "g");
var r2 = /(.[0-9]+) pens/gm;
r.exec(s);

var arr = [0, 1, 2, 3];

arr.forEach(function(elem) {
	// ... do smth with elem
});

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function () {

	};
}

document.getElementById("id").addEventListener("click", function() {

});