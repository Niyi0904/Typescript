// Type aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type guitarist = {
  name?: string,
  active: boolean,
  // Using a type alias inside of another type alias 
  albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types 
let myName: 'Niyi';

let userName: 'Niyi' | 'David' | 'owoyemi'
userName = 'David'

// Functions 
const add = (a: number, b: number): number  => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message);
}

logMsg('Hello');
logMsg(add(2,3));
logMsg(556)

let subtract = function (c: number, d: number): number {
  return c - d
}

type mathFunc = (a: number, b: number) => number
// interface mathFunc {
//   (a: number, b: number) : number
// }
  

let multiply : mathFunc = function(c,d) {
  return c * d
}

logMsg(multiply(2, 2))


// optional parameters 
const addAll = (a: number, b: number, c?: number): number => {
  // Type guard 
  if (typeof c !== 'undefined') {
    return a + b + c
  }
  return a + b
}

// Default parameter 
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c
}

logMsg(sumAll(3, 2))
logMsg(addAll(3, 2))
logMsg(addAll(3, 2, 8))
logMsg(sumAll(undefined, 8))

// Rest parameters 
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1, 2, 4, 6))
//  the rest operator should come at the end of all your required operator 


// Never type 
const createError = (errMsg: string): never => {
  throw new Error(errMsg)
}
const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) break
  }
}
// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false 
}

const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string'
  if (isNumber(value))return 'number'
  return createError('this should never happen!')
}