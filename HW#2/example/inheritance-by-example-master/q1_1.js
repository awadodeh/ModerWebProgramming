"use strict";


var shape = {

    type: "shape",
    getType: function () {
        console.log('This is a shape: ' + this.type);
        return this.type;
    }

};


var triangle = function (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}





triangle.prototype = shape.prototype;

triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}
var t = new triangle(1, 2, 3);

var p = t.getPerimeter();

console.log(p);
