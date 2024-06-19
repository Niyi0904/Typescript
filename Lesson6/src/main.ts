class Coder {
    constructor(
          public name: string, 
          public music: string, 
          private age: number, 
          protected lang: string =  'typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang 
    }

    public getAge() {
      return `hello, i am ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)
// console.log(Dave.age)

class webDev extends Coder {
  constructor(
      public computer: string,
      name: string, 
      music: string, 
      age: number, 
    ) {
      super(name, music, age)
      this.computer = computer 
  }

  public getLang() {
    return `i write ${this.lang}`
  }
}

const niyi = new webDev('HP', 'Niyi', 'Gospel', 32)
// console.log(niyi.getLang())
// console.log(niyi.lang)
/////////////////////////////////////

interface musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class guitarist implements musician {
  name: string
  instrument: string

  constructor (name: string, instrument: string) {
    this.name = name,
    this.instrument = instrument
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const gav = new guitarist('niyi', 'violin')

console.log(gav.play('hits'))
/////////////////////////////////

class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string){
    this.name = name
    this.id = ++Peeps.count
  }
} 

const Divine = new Peeps('Divine')
const Mary = new Peeps('Mary')
const Chris = new Peeps('Chris')
console.log(Peeps.count)
console.log(Divine.id)
console.log(Mary.id)
console.log(Chris.id)
/////////////////////////////

// Getters and Setters
class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(e => typeof e === 'string')) {
      this.dataState = value
      return
    } else throw new Error('Parfam is not an array of strings')
  }
}

const myBands = new Bands()
myBands.data = ['niyi', 'hhh', 'hhdf']
console.log(myBands.data)

myBands.data = [...myBands.data, 'rrrr', 'yyy']
console.log(myBands.data)

