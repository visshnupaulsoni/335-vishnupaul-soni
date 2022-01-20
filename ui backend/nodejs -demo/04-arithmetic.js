const add = (x,y) => x + y;
const sub = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y; 
const PI = 3.14;

//whatever is the value of module.export is available to other module
module.exports = {
    add,
    multiply,
    PI
};

