const name="Akshat"
const repoCount=50

// console.log(name+repoCount+ " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new  String('AKSHAT GOYAL')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-5,-2)
console.log(anotherString);

const newStringOne="     AKSHAT    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20','-'))

console.log(url.includes('akshat'))

console.log(gameName.split(' '))