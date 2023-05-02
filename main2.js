// let myNumber = 0;
while(myNumber <= 50){
//     console.log(myNumber)
//     myNumber++
}

for (let myNumber=0;myNumber<=50;myNumber+=2){
    // console.log(myNumber)
}

let name = 'Devender'
for (let i=0;i<name.length;i++){
    // console.log(name.charAt(i))
}

function sum(num1 ,num2){
    if(num2 == undefined){
        return num1+num1
    }
    return num1+num2
}
// console.log(sum(2))

const getUserEmail = (email)=>{
    return email.slice(0,email.indexOf('@'))
}
// console.log(getUserEmail('playerTwo@gmail.com'))

const toProperCase = (name)=>{
   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
// console.log(toProperCase('deveNDER'))
