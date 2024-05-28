let stringArr = ['one', 'hey', 'Niyi']

let guitars = ['Strat', 'les Paul', 5150]

let mixedData = ['EVH', 1994, true]

stringArr[0] = 'john'
stringArr.push('hey')
console.log(stringArr)

guitars[0] = 1984
guitars.unshift('david')
console.log(guitars)

guitars = stringArr
console.log(guitars)


let test = []
let bands: string[] = [];
bands.push('miui', 'jhgjj')
console.log(bands)


// Tuple
let myTuple: [string, number, boolean] = ['Niyi', 123, true]

let mixed = ['john', 1, false]

myTuple[2] = false

// Objects
let myObj: object
myObj =[]
myObj = bands
console.log(typeof myObj)

const exampleObj  = {
  prop1: 'Niyi',
  prop2: 'true'
}

exampleObj.prop1 = 'David'

interface guitarist {
  name?: string,
  active: boolean,
  albums: (string | number)[]
}

let evh: guitarist = {
  name: 'Niyi',
  active: true,
  albums: [1988, 'niyi'],
}
let jp: guitarist = {
  name: 'David',
  active: true,
  albums: ['I', 'II', 'niyi', 234 ]
}

const greetGutarist = (guitarist: guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`
  }
  return `Hello!`
}
console.log(greetGutarist(jp))


// Enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.B)
