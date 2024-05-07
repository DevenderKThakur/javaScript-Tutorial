function say_my_name () {
    return "Devender Kumar Thakur" 
}

// console.log(say_my_name) // This is function reference 

// console.log(say_my_name()) // This is function execution

function add_two_number (val1 , val2) {
    return val1 + val2
}

// console.log(add_two_number(12 , 3))

const result = add_two_number(3,5)

function log_in_user_message(username = "Devender") {
    if (!username) {
        return "Please enter a username "
    }
    // Both the if statement are the same but written in a different way 
    if (username === undefined) {
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in `
}

// console.log(log_in_user_message())

// rest operator 

function calculate_cart_price (val1 , val2 , ...val) {
    return val
}

// console.log(calculate_cart_price(2,3,4,5))

const user = {
    username : "Devender" , 
    price : 199 
}

function handle_objects (anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handle_objects({
    username : "Devender" , 
    price : 199 
})

const my_new_array = [200,400,100,600]

function accept_array_return_second_value (arr) {
    return arr[1]
}

// console.log(accept_array_return_second_value(my_new_array));

if (true) {
    const username = "devender" 
    if (username === "devender" ) {
        const website = "youtube" 
        console.log(username + website)
    }
}



