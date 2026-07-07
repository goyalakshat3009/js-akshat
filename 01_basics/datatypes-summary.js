// Primitive
// JavaScript is a dynamically typed language

//  7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id=Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId)

const bigNumber = 34565487738989828972868n


// Reference(Non primitive)

// Array,Objects,Functions

const heros = ["shaktiman","naagraj","doga"];
let Obj = {
    name: "Akshat",
    age:18,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive),Heap(Non-Primitive)

let name="Akshat"
let anothername=name
anothername="Akshat Goyal"

console.log(name);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email="AKshat@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);