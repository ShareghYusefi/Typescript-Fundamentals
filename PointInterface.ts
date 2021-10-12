// Interface - Used to define custom data type & contract for class's
// export keyword turns this file into a module with exports
export interface PointInterface {
    _x: number,
    _y: number,

    // function can directly access variables x,y
    draw: () => void,
    getDistance: () => void,
}