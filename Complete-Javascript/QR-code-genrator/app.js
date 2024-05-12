const qr_input = document.getElementById("qr-input")

const qr_button = document.getElementById("qr-button")

const qr_image = document.getElementById("qr-img")

qr_button.addEventListener("click" , (e)=>{

    const input_value = qr_input.value 
    
    if (!input_value) {
        alert("Please enter a valid URL")
        return
    }
    else {
        qr_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input_value}`
    }

})