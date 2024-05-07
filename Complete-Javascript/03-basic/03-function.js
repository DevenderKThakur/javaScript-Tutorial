function chai () {
    console.log("DB connected")
}

// Immediately Invoked Function Expressions 

// to prevent getting polluted by golbal scope 

(function iife(){
    // named iife
    console.log("This is immediately invoked function ecxpression ")
})();

((name)=>{
    console.log(`arraow function db connected ${name}`)
})("Devender")