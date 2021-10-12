// Typescript is a superset of Javascript library
    // Also provide additional OOP tools
        // Strictly typed language - solve runtime errors issue
        // Allows faster development than when using vanilla JS
            // tsc main.ts compiles code into main.js equivalent
            // node main.js runs compiled code
    // Typescript compiler converts to js code compatible with all browsers 

// import keyword keyword imports the TYPE of data & from specifies path to module
import { PointInterface } from './PointInterface';

// Class - Used to create objects & cohesively bundling related variables/functions
class Point implements PointInterface {
    // Access Modifiers :: used to specify access rectrictions to variables/functions
        // Allows abstraction of data/functions
        // Defaults to public when not defined
            // private: only availalbe internally to class
            // public: available externally on class
            // protected: available externally within project directory
    // underscoreName convention used to avoid clash with getter & setter method definitions
    private _x: number;
    private _y: number;
    // Typescript does not allow defining multiple constructors
        // instead use ? symbol to make parameters optional
    constructor(XValue?:number, YValue?:number){
        this._x = XValue;
        this._y = YValue;
    }

    // lines 25 - 32 can be reduced using below syntax
    // constructor(private x?:number, private y?:number){};

    draw() {
        console.log(`X: ${this._x} , Y: ${this._y}`);
    }
    getDistance(){
        // ...
    }
    
    // get property :: used to give read access to internal variable 
    get x() {
        return this.x;
    }
    // set property :: used to validate & edit access to internal variables 
    set x(value){
        // validate data
        if(value < 0)
            throw new Error("Value cannot be less than 0"); // throw error

        this.x = value; // else set value
    }
}
// Object - A concrete instance if a class blueprint 
    // new keyword creates object {}
    //Point() specifies default constructor function of Point class
let point = new Point(1, 2);
point.draw();


