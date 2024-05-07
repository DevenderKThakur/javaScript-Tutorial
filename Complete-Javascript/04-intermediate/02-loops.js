function print_from_one_to_ten(){
    for (let i = 0; i<10; i++ ) {
        if (i === 5) {
            console.log("5 is the best number ")
        }
        console.log(i)
    }
}

function print_table () {for (let i=1;i<=10;i++) {
    console.log(`outer loop${i}`)
    for (let j=1;j<=10;j++) {
        console.log(`inner loop${j}`)
        console.log(`${i} * ${j} = ${i*j}`)
    }
}}

function print_array () {
    let my_array = ["Flash" , "Batman" ,"Superman"]

    for (let index = 0; index < my_array.length; index++) {
        console.log(my_array[index])
    }
}

function break_continue () {
    for (let index = 1 ;index <= 20 ;index++) {
        if (index === 5) {
            console.log(`Detected ${index}`)
            break 
        }
        console.log(index)
    }
    for (let index = 1 ;index <= 20 ;index++) {
        if (index === 5) {
            console.log("5 is detected")
            continue
        }
        console.log(index)
    }
}