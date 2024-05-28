"use strict";
let stringArr = ['one', 'hey', 'Niyi'];
let guitars = ['Strat', 'les Paul', 5150];
let mixedData = ['EVH', 1994, true];
stringArr[0] = 'john';
stringArr.push('hey');
console.log(stringArr);
guitars[0] = 1984;
guitars.unshift('david');
console.log(guitars);
guitars = stringArr;
console.log(guitars);
let test = [];
let bands = [];
bands.push('miui', 'jhgjj');
console.log(bands);
// Tuple
let myTuple = ['Niyi', 123, true];
let mixed = ['john', 1, false];
myTuple[2] = false;
// Objects
let myObj;
myObj = [];
myObj = bands;
console.log(typeof myObj);
const exampleObj = {
    prop1: 'Niyi',
    prop2: 'true'
};
exampleObj.prop1 = 'David';
let evh = {
    name: 'Niyi',
    active: true,
    albums: [1988, 'niyi'],
};
let jp = {
    name: 'David',
    active: true,
    albums: ['I', 'II', 'niyi', 234]
};
const greetGutarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return `Hello!`;
};
console.log(greetGutarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
