const colors = ["orange" , "green" , "yellow", "purple" , "blue"]

const randomIndex = Math.floor(Math.random() * colors.length)

// console.log(randomIndex)

const randomColors = colors[randomIndex]

// console.log(randomColors)

switch (randomColors) {
    case "orange" :
        console.log("This is Orange color")
        break
    case "green" :
        console.log("This is green color ")
        break
    case "yellow" :
        console.log("This is yellow color")
        break
    default :
        console.log("No Color is Found")
}