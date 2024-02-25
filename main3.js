function reverseString(str){
    let newString = ""
    for (let stringIndex = str.length ; stringIndex >= 0 ; stringIndex = stringIndex - 1 ){
        newString = newString + str[stringIndex]
    }
    return newString
}

// const reverseStringVariable = reverseString("hellow")
// console.log(reverseStringVariable)

// let str = "world"

// // console.log(str.split(""))
// console.log(str.split("").reverse().join(""))

function countVowels(str) {
    let count = 0 
    for (let val = 0 ; val < str.length ; val = val + 1 ){
        if ((str[val] == "a" ) || (str[val] == "e" ) || (str[val] == "i" ) || (str[val] == "o" ) || (str[val] == "u" )){
            count = count + 1 
        }
    }
    return count 
}

// console.log(countVowels("magic"))

// check a number if it is divisible by x and y 

function checkDivisble (num , x , y ) {
    if ((num % x === 0 ) && (num % y === 0)) {
        return true 
    }
    else{
        return false 
    }
}

// let result = checkDivisble(10,2,5)
// console.log(result)


function returnNegative (num) {
    if ( num > 0 ) {
        let negative 
        return negative = (-num)
    }
    else{
        return num  
    }
}

// console.log(returnNegative(5))

function meanOfTheArray(myArray){
    let sum = 0 
    for (let index = 0 ; index < myArray.length ; index = index + 1 ){
        sum = sum + myArray[index]
    }
    return sum / myArray.length
}

// console.log(meanOfTheArray([1,2,3,4,5,6,7,8,9,10]))

// return the sum of the positive numbers in the array 

function sumOfThePositive(myArray){
    let positiveSum = 0 
    for (let index = 0 ; index < myArray.length ; index = index + 1){
        if (myArray[index] > 0) {
            positiveSum += myArray[index]
        }
    }
    return positiveSum 
}


// console.log(sumOfThePositive([-1,0,12,3,-5]))

// repeat the string the number of times the input number 


function stringRepeat (number , str) {
    let repeatString = ""
    for (let letter = 0 ; letter < number ; letter = letter + 1 ) {
        repeatString +=  str   
    }
    return repeatString
}

// console.log(stringRepeat(3,"Me"))

// double the elements in the array 

function double(arr){
    let result = arr.map((arr)=>{
        return arr*2
    })
    return result 
}

console.log(double([1,2,3,4]))
