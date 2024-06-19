type One = string ;
type Two = string | number;
type Three = 'Hello';

// Convert to more or les specific types 
let a: One = 'xxxx'
let b = a as Two // Assignment to a less specific type 

let c = a as Three // More specifc

console.log(c)