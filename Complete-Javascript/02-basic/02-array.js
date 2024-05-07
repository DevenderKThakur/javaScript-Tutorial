const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]

const dc_heros = ["Superman" , "Flash" , "Batman"]

// console.log(marvel_heros.concat(dc_heros))

const all_heros = marvel_heros.concat(dc_heros) 

// this returns a new array with the value of both the array 

// console.log(all_heros)

// spread operator 
const all_new_heros = [...marvel_heros , ...dc_heros]

// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_another_array = another_array.flat(Infinity)

// console.log(usable_another_array)


// console.log(Array.isArray("Devender"))

// console.log(Array.from("Devender"))

console.log(Array.from({name : "Devender"}))

let score = 100 

let score2 = 200 

let score3 = 300

console.log(Array.of(score , score2 , score3))
