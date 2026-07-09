const heros=["thor","Ironman","spiderman"]
const dc=["superman","flash","batman"]

heros.push(dc)

// console.log(heros)
// console.log(heros[3][1])

// const allHeros  = heros.concat(dc)
// console.log(allHeros)

const all_new_heros = [...heros,...dc]

// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)

console.log(real_another_array)



console.log(Array.isArray("Akshat"))
console.log(Array.from("Akshat"))
console.log(Array.from({name:"Akshat"})) 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))