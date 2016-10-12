"use strict";

var Exposer = (function() {


  var shape = {

      type:"shape",
      getType: function(){
          console.log('This is a shape: '+this.type);
          return this.type;
      }

  };


  var triangle = function(a,b,c){
      this.a=a;
      this.b=b;
      this.c=c;
  }

//   var inheritsFrom = function (child, parent) {
//     child.prototype = Object.create(parent.prototype);
// };


triangle.prototype.getPerimeter=function(){
    return this.a+this.b+this.c;
}

  return {
      triangle: triangle,
      shape:shape
    //   inheritsFrom:inheritsFrom(triangle,shape)
  };
})();


Exposer.triangle.prototype=Exposer.shape.prototype;


var t = new Exposer.triangle(1,2,3)

var p =t.getPerimeter();

console.log(p);


// Exposer.inheritsFrom().getType();        // Output: This is a method I want to expose!
// Exposer.second();       // Output: Inside a private method!
// Exposer.methodToExpose; // undefined