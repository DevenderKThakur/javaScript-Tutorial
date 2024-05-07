const tinder_User = new Object () 

// this is a singleton objects 

tinder_User.id = "123abc" 

tinder_User.name = "Sammy" 

tinder_User.isLoggedIn = false 

const regular_user = {
    email : "devnder@google.com" , 
    fullname : {
        user_fullnmae : {
            fisrt_name : "Devender" , 
            last_name : "Thakur" 
        }
    }
}

// console.log(regular_user.fullname.user_fullnmae);


// console.log(Object.keys(regular_user))

// console.log(Object.values(regular_user))

const course = {
    course_name : "JS in hindi" , 
    price : "999" , 
    course_instructor : "Hitesh"
}

// object destructuring 

const {course_instructor : instructor} = course

// console.log(instructor)

[
    {
    "name" : "Devender" , 
    "course_name" : "JS in hindi" , 
    "price" : "free" 
    },
    {
        
    }
]