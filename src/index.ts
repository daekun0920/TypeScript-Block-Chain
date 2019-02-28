class Block {
    public index:number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;
    constructor(index:number,
                hash:string,
                previousHash:string,
                data:string,
                timestamp:number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "202020202020", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);









class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
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
}

//? 붙으면 선택적
const sayHi = (person: Human): string => {
    return `Hello, ${person.name} You are ${person.age} you are a ${person.gender}!`;
};

console.log(sayHi(daekun));

export {};