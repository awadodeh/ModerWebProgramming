var point ={
    x: 5,
    y:2, 
    dist: function(){
        return Math.sqrt((this.x*this.x)+(this.y*this.y));
    },
    toString: function(){
        return "("+this.x+", " + this.y + ")";
    }
};

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype = {
        dist: function () {
            return Math.sqrt((this.x*this.x)+(this.y*this.y));
        },
        toString: function () {
            return "("+this.x+", "+this.y+")";
        }
    }

    function extend(target, source) {
        Object.getOwnPropertyNames(source)
        .forEach(function(propName) {
            Object.defineProperty(target, propName,
                Object.getOwnPropertyDescriptor(source, propName));
        });
        return target;
    }