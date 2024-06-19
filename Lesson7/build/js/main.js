"use strict";
// Index Signatures
// interface TransctionOnj {
//  readonly [index: string] : number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: +50,
    Dave: 76
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transcations) => {
    let total = 0;
    for (const transcation in transcations) {
        total += transcations[transcation];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 45
console.log(todaysTransactions['Dave']);
const student = {
    name: 'Niyi',
    GPA: 4.1,
    classes: [100, 100]
};
for (const index in student) {
    console.log(`${index}: ${student[index]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
console.log(typeof student);
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'classes');
