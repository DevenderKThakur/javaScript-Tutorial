const is_user_logged_in = true 

if (2 === "2") {
    console.log("Executed")
}

// const temperature = 41 

// if (temperature < 50) {
//     console.log("less than 50")
// }


// const score = 200 

// if (score > 100 ) {
//     var power = "fly" 
//     console.log(`Superpower is ${power}`)
// }

// console.log(`Superpower is ${power}`)

const balance = 1000 

// if (balance > 500 ) console.log(balance) 

if (balance < 500 ) {
    console.log(`Balance of the account is ${balance}`)
} else if (balance < 750 ) {
    console.log(`Balance less than 750 , Your balance ${balance} `)
} 

const user_logged_in = true 
const debit_card = true 
const logged_in_from_goggle = false 
const logged_in_from_email = true 

if (user_logged_in && debit_card) {
    console.log("Allow to buy course")
}

if (logged_in_from_email || logged_in_from_goggle) {
    console.log("User is logged in ")
}

// truthy value and falsey value 

/* 
    falsey value 
    false , 0 , -0 , BigInt , "" , null , undefined , NaN

    truthy value 
    anything that besides falsey value is truthy 

*/
const check_array_is_empty = [1]

if (check_array_is_empty.length === 0) {
    console.log("Array is empty")
}

const check_object_is_empty = {
    username : "username"
} 

if (Object.keys(check_array_is_empty).length === 0) {
    console.log ("Object is empty ")
}

//  Nullish coalescing Operator (??) : null undefined 

let val1 = 5 ?? 10 

val1 = null ?? 10 

val1 = undefined ?? 5 

val1 = null ?? 10 ?? 50

// console.log(val1)

// ternary operator condition ? true : false 

const ice_Tea_Price = 100 

ice_Tea_Price <= 80 ? console.log("less than 80 ") : console.log("greater than 80")





