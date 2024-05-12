const input_value = document.getElementById("password")

const output_value = document.getElementById("output-text")

input_value.addEventListener("input" , ()=>{
    let password = input_value.value

    if (password.length < 8) {
        output_value.innerText = "Password is too short"
        output_value.style.color = "red"
    }
    else {
        if (password.search(/[a-z]/) == -1){
            output_value.innerText = "Password does not have a lowercase"
            output_value.style.color = "red"
        }
        else if (password.search(/[A-Z]/) == -1){
            output_value.innerText = "Password does not have a uppercase "
            output_value.style.color = "red"
        }
        else if (password.search(/[0-9]/) == -1){
            output_value.innerText = "Password does not have a number "
            output_value.style.color = "red"
        }
        else if (password.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) == -1) {
            output_value.innerText = "Password does not have a special character";
            output_value.style.color = "red";
        }
        else {
            output_value.innerText = "Password is strong "
            output_value.style.color = "green"
        }
    }
})