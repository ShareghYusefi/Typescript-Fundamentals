// Typescript wraps Javascript library
// Also provide additional OOP tools
// Strictly typed language - solve runtime errors
// Allows faster development than when using vanilla JS
// tsc main.ts compiles code into main.js equivalent
// node main.js runs compiled code
// Class - Used to create objects & cohesively bundling related variables/functions
var Point = /** @class */ (function () {
    // Access Modifiers :: used to specify access rectrictions to variables/functions
    // Allows abstraction of data/functions
    // Defaults to public when not defined
    // private: only availalbe internally to class
    // public: available externally on class
    // protected: available externally within project directory 
    // private x: number;
    // private y: number;
    // // Typescript does not allow defining multiple constructors, instead use ? symbol to make parameters optional
    // constructor(XValue?:number, YValue?:number){
    //     this.x = XValue;
    //     this.y = YValue;
    // }
    // lines 25 - 31 can be reduced using below syntax
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    Point.prototype.draw = function () {
        console.log("X: " + this.x + " , Y: " + this.y);
    };
    Point.prototype.getDistance = function () {
        // ...
    };
    return Point;
}());
// Object - A concrete instance if a class blueprint 
// new keyword creates object {} && Point() specifies default constructor function
var point = new Point(1, 2);
point.draw();
