"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "202020202020", "", "Hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const daekun = new Human("Daekun", 25, "male");
/*
interface Human {
    name:string;
    age:number;
    gender:string;
}
*/
const person = {
    name: "Daekun",
    gender: "Male",
    age: 25
};
//? 붙으면 선택적
const sayHi = (person) => {
    return `Hello, ${person.name} You are ${person.age} you are a ${person.gender}!`;
};
console.log(sayHi(daekun));
//# sourceMappingURL=index.js.map