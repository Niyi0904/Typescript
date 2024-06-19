"use strict";
class Coder {
    constructor(name, music, age, lang = 'typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `hello, i am ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
// console.log(Dave.age)
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `i write ${this.lang}`;
    }
}
const niyi = new webDev('HP', 'Niyi', 'Gospel', 32);
class guitarist {
    constructor(name, instrument) {
        this.name = name,
            this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const gav = new guitarist('niyi', 'violin');
console.log(gav.play('hits'));
/////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Divine = new Peeps('Divine');
const Mary = new Peeps('Mary');
const Chris = new Peeps('Chris');
console.log(Peeps.count);
console.log(Divine.id);
console.log(Mary.id);
console.log(Chris.id);
/////////////////////////////
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(e => typeof e === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Parfam is not an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['niyi', 'hhh', 'hhdf'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'rrrr', 'yyy'];
console.log(myBands.data);
