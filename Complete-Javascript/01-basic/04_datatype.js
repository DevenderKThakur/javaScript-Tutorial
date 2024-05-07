/*
        Primitive 
        7 types : string , Number , boolean , null , undefined , Symbol (to make any value unique) , BigInt

        Javascript is Dynamically typed language as we don't need to specify which type of datatype is goning to be stored in the variable 

        Refernce / Non-primitive 
        Arrays , Objects , Functions 
*/

const score = 100 

const scoreValue = 100.3 

const is_Logged_In = true 

const outsideTemp = null // if there is no value inside 

const userEmail = undefined  

const id = Symbol("123") 
    // they both are different they are unique 
const another_Id = Symbol("123")

console.log(id === another_Id)

const heros = ["Shaktiman" , "Naagraj" , "Doga"] 

const myObject = {
    name : "Devender" , 
    age : 21 
}

const sum = (a , b)=>{
    return a + b 
}

console.log(sum(12 , 3));

/* 

two type of memory stack and heap 

stack(Primitive) copy of the value is given  , Heap (Non-Primitive) original value is stored 

*/

let my_Youtube_name = "Devender Kumar Thakur" 

let user_one = {
    email : "tdevender422@gmail.com" , 
    upi_id : "user@ybl"
}

let user_two = user_one 

user_two.email = "tdevender@google.com" 

console.table([user_one , user_two])