// arraow functions 

// this is current context 

const user = {
    username : "Devender" , 
    price : 999 ,
    welcome_message : function () {
        console.log(this)
        return `${this.username} , Welcome to the website`
    }
}

// console.log(user.welcome_message())
// user.username = "Sam" 
// console.log(user.welcome_message());

// console.log(this)

// this cannot be used in function and only using objects 

// function chai () {
//     console.log(this)
// }

// chai()


// const chai = function () {
//     let username = "Devender" 
//     console.log(this.username)
// }

const chai = ()=>{
    let username = "Chai" 
    console.log(this.username)
}

const add_two = (val1 , val2)=>{
    return val1 + val2 
}

// console.log(add_two(23,5));

// implicit return 

const add_three = (val1 , val2 , val3) => (val1 + val2 + val3) 

// console.log(add_three(1,2,3));

const return_object = (val1 , val2)=> ({username : "Devender"})


