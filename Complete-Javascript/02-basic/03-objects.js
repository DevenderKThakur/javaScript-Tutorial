
const my_symbol = Symbol("key1")

const user_name = {
    name : "Devender" , 
    "full name" : "Devender Kumar Thakur" ,  
    [my_symbol] : "This is a key",
    age : 21 , 
    location : "New Delhi" , 
    email : "tdevender422@gmail.com" ,
    is_Logged_In : true ,
    is_Logged_In_Days : ["Monday" , "Wednesday" , "Friday"]
}

// console.log(user_name.email)
// console.log(user_name["email"])

// console.log(user_name[my_symbol])

user_name.email = "devender@chatgpt.com" 

// Object.freeze(user_name)

// user_name.email = "devender@microsoft.com" 

// console.log(user_name)

user_name.greeting = function() {
    return "Hell JS user"
}

user_name.greeting2 = function() {
    return `Hello JS user , ${this.name}`
}

// console.log(user_name.greeting2())