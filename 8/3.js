var A = function() {

};

var B = function() {

};

var AA = function() {

};
AA.prototype = new A();
AA.prototype.constructor = AA;

var b = new B();
var aa = new AA();