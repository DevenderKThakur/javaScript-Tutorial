function learn_while(){
    let index = 0

    while (index < 10) {
        console.log(index)
        index = index + 2 
    }
}

function while_on_array () {
    let my_array = ["flash" , "batman" , "superman"]

    let arr = 0 
    while (arr < my_array.length) {
        console.log(my_array[arr])
        arr = arr + 1 
    }
}

// do while 

let score = 1 

do {
    console.log(score)
    score ++ 
} while (score < 10 ) 