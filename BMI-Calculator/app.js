const form = document.querySelector("form")

form.addEventListener("click" , (e)=>{

    e.preventDefault() 

    const height = parseInt(document.querySelector("#height").value)

    const weight = parseInt(document.querySelector("#weight").value)

    const result = document.querySelector("#results")
    

    if (height < 0 || isNaN(height) || height ==""){
        result.innerHTML = "Please Enter a valid height Input "
    }
    else if (weight < 0 || isNaN(weight) || weight ==""){
        result.innerHTML = "Please Enter a valid weight Input "
    }
    else {
       const calculate_bmi = ((weight/(height * height))*10000).toFixed(2)

       if (calculate_bmi < 18.6){
        result.innerHTML = `${calculate_bmi} , You are underweight`
       }
       else if (calculate_bmi >= 18.8 && calculate_bmi <= 24.9) {
        result.innerHTML = `${calculate_bmi} , You are in the Normal Range` 
       }
       else {
        result.innerHTML =  `${calculate_bmi} , You are Overweight` 
       }
    }

})
