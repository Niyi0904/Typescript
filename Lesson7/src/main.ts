// Index Signatures

interface TransctionOnj {
  readonly [index: string] : number
  Pizza: number,
  Books:  number,
  Job: number
}
// interface TransctionOnj {
//  readonly [index: string] : number
// }



const todaysTransactions: TransctionOnj = {
  Pizza: -10,
  Books: -5, 
  Job: +50,
  Dave: 76
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transcations: TransctionOnj): number => {
  let total = 0 
  for (const transcation in transcations) {
    total += transcations[transcation]
  }
  return total
}
console.log(todaysNet(todaysTransactions))
// todaysTransactions.Pizza = 45

console.log(todaysTransactions['Dave'])

/////////////////////////////////////////////

interface Student {
  //[index: string] : number | string | number[] | undefined,
  name: string,
  GPA: number,
  classes?: number[]
}

const student: Student = {
  name: 'Niyi',
  GPA: 4.1,
  classes: [100, 100]
}

for (const index in student) {
  console.log(`${index}: ${student[index as keyof Student]}`)
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student])
})

console.log(typeof student)

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
} 

logStudentKey(student, 'classes')

//////////////////////////////////////////////////

// inmterface Income {
//   [key: string]: number 
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Income = Record<Streams