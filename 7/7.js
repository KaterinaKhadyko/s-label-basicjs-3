var Vehicle = function(color) {
	this.color = color || "purple";

	this.run = function() {
		console.log("Running");
	};

	this.stop = function() {
		console.log("Stopping");
	};
};
Vehicle.prototype = {};

var Car = function() {
	this.mark = "lada sedan";
	this.wheels = 4;
	this.seats = 5;
};
Car.prototype = new Vehicle();

var Moto = function() {
	this.mark = "java";
	this.wheels = 2;
};
Moto.prototype = new Vehicle("red");

var Minivan = function() {
	this.seats = 7;
};
Minivan.prototype = new Car();

var m = new Minivan();