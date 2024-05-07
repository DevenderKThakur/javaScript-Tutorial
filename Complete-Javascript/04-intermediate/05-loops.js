const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach((val)=>{
//     console.log(val)
// })

function print_me (item) {
    console.log(item)
}

// coding.forEach(print_me)

coding.forEach((item , index , arr) =>{
    // console.log(item , index , arr)
})

const my_coding = [
    {
        language_name : "Javascript" , 
        language_file_name : "js" 
    },
    {
        language_name : "Python" , 
        language_file_name : "py" 
    },
    {
        language_name : "Java" , 
        language_file_name : "java" 
    }
]

// my_coding.forEach((item) =>{
//     console.log(item.language_name)
// })

// const values = coding.forEach((item)=>{
//     console.log(item)
// })

// console.log(values)

// filter returns the value and it has condition 

const my_nums = [1,2,3,4,5,6,7,8,9,10]

const new_nums = my_nums.filter((val) => {
    return val > 4 
})

// console.log (new_nums)
const new_nums_foreach = []

my_nums.forEach((item) =>{
    if (item > 4) {
        new_nums_foreach.push(item)
    } 
})
// console.log(new_nums_foreach)

const books = [
    {
        title : "Book One" , 
        genre : "Fiction" , 
        publish : 1981 ,
        edition : 2004 
    },
    {
        title : "Book Two" , 
        genre : "Non-Fiction" , 
        publish : 1992 ,
        edition : 2008
    },
    {
        title : "Book Three" , 
        genre : "History" , 
        publish : 1999 ,
        edition : 2007 
    },
    {
        title : "Book Four" , 
        genre : "Non-Fiction" , 
        publish : 1989 ,
        edition : 2010
    },
    {
        title : "Book Five" , 
        genre : "Science" , 
        publish : 2009 ,
        edition : 2014
    }
]

const user_books = books.filter((item) =>{
    return item.genre === "History"
})

// console.log(user_books)

const user_books2 = books.filter((item) =>{
    return item.publish >= 1990 && item.genre === "History"
})

// console.log(user_books2)

const my_numbers = [1,2,3,4,5,6,7,8,9,10]

let new_numbers = my_numbers.map((item) => item + 10)

// console.log(new_numbers)

new_numbers = my_numbers.map((num) => num * 10).map((num)=> num + 1).filter((num)=> num >= 40)

// console.log(new_numbers)

// reduce method 

