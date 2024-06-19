"use strict";
// Literal types 
let myName;
let userName;
userName = 'David';
// Functions 
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
logMsg(556);
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunc {
//   (a: number, b: number) : number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters 
const addAll = (a, b, c) => {
    // Type guard 
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default parameter 
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(3, 2));
logMsg(addAll(3, 2));
logMsg(addAll(3, 2, 8));
logMsg(sumAll(undefined, 8));
// Rest parameters 
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 4, 6));
//  the rest operator should come at the end of all your required operator 
// Never type 
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('this should never happen!');
};
