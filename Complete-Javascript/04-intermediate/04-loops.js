const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val)
}

function greet() {
    const greetings = "Hello World!"

    for (const greet of greetings) {
        if (greet === " ") {
        continue
        }
        console.log(greet)
    }
}

// map has unique key value pairs 
const map = new Map()

map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("FR" , "France")

// console.log(map);

for (const [key , value] of map) {
    // console.log(key , value)
}

const my_object = {
    js : "Javascript" , 
    cpp : "C++" , 
    py  : "Python" ,
    java : "Java"
}

for (const key in my_object) {
    console.log(`${key} shortcut is for ${my_object[key]}`)
}

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    console.log(programming[key])
}
