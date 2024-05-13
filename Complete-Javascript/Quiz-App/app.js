const quiz = [
    {
        question : "What is the chemical symbol for the element gold?" , 
        answer_one_text : "Au" , 
        answer_two_text : "Ag" , 
        answer_three_text : "Gd" , 
        answer_four_text : "Gr" , 
        correct_answer : "Au"
    },
    {
        question : "Which of the following is an example of a renewable energy source?" , 
        answer_one_text : "Coal" , 
        answer_two_text : "Natural Gas" , 
        answer_three_text : "Solar Power" , 
        answer_four_text : "Nuclear Power" , 
        correct_answer : "Solar Power"
    },
    {
        question : "What is the process by which plants convert light energy into chemical energy?" , 
        answer_one_text : "Respiration" , 
        answer_two_text : "Photosynthesis" , 
        answer_three_text : "Transpiration" , 
        answer_four_text : "Fermenatation" , 
        correct_answer : "Photosynthesis"
    },
    {
        question : "Which planet is known as the “Red Planet”?" , 
        answer_one_text : "Venus" , 
        answer_two_text : "Jupiter" , 
        answer_three_text : "Mars" , 
        answer_four_text : "Uranus" , 
        correct_answer : "Mars"
    },
    {
        question : " What is the pH value of pure water?" , 
        answer_one_text : "3" , 
        answer_two_text : "5" , 
        answer_three_text : "6" , 
        answer_four_text : "7" , 
        correct_answer : "7"
    },
    {
        question : "Which force keeps planets in orbit around the sun?" , 
        answer_one_text : "Gravitaional Force" , 
        answer_two_text : "Magnetic Force " , 
        answer_three_text : "Electrostatic Force " , 
        answer_four_text : "Nuclear Force " , 
        correct_answer : "Gravitational Force"
    },
    {
        question : "What is the smallest unit of matter that retains the properties of an element?" , 
        answer_one_text : "Molecule" , 
        answer_two_text : "Atom" , 
        answer_three_text : "Electron" , 
        answer_four_text : "Proton" , 
        correct_answer : "Atom"
    },
    {
        question : " What is the function of the human respiratory system?" , 
        answer_one_text : "Transportation of oxygen in the blood" , 
        answer_two_text : "Digestion of food" , 
        answer_three_text : "Pumping blood to the body" , 
        answer_four_text : "Excretion of waste products" , 
        correct_answer : "Transportation of oxygen in the blood"
    },
    {
        question : " What is the main function of the nervous system?" , 
        answer_one_text : "Regulation of body temperature" , 
        answer_two_text : "Movement of muscles" , 
        answer_three_text : "Control and coordination of body activities" , 
        answer_four_text : "Digestion of food" , 
        correct_answer : "Control and coordination of body activities"
    },
    {
        question : " What is the SI unit of electric current?" , 
        answer_one_text : "Watt" , 
        answer_two_text : "Ampere" , 
        answer_three_text : "Ohm" , 
        answer_four_text : "Volt" , 
        correct_answer : "Ampere"
    }
]

const quiz_question = document.querySelector("h2")

const option_a = document.querySelector(".text-option-a")

const option_b = document.querySelector(".text-option-b")

const option_c = document.querySelector(".text-option-c")

const option_d = document.querySelector(".text-option-d")

const submit_button = document.querySelector("button")

let current_question = 0 

let correct_answer_score = 0

let wrong_answer_score = 0


quiz_question.textContent = quiz[current_question].question
option_a.textContent = quiz[current_question].answer_one_text
option_b.textContent = quiz[current_question].answer_two_text
option_c.textContent = quiz[current_question].answer_three_text
option_d.textContent = quiz[current_question].answer_four_text


submit_button.addEventListener("click" , (e)=>{
    const checked_answer = document.querySelector('input[type="radio"]:checked')
    if (checked_answer === null ) {
        alert("Please Select a option")
    }
    else {
        if (checked_answer.nextElementSibling.textContent === quiz[current_question].correct_answer) {
            correct_answer_score = correct_answer_score + 1  
        }
        else {
            wrong_answer_score = wrong_answer_score + 1 
        }
        checked_answer.checked = false 
        current_question = current_question + 1 

        if (current_question < quiz.length) {
            quiz_question.textContent = quiz[current_question].question
            option_a.textContent = quiz[current_question].answer_one_text
            option_b.textContent = quiz[current_question].answer_two_text
            option_c.textContent = quiz[current_question].answer_three_text
            option_d.textContent = quiz[current_question].answer_four_text
            checked_answer.checked = false 
        }
        else {
            alert(`You have answered ${correct_answer_score} correct and number of wrong answer ${wrong_answer_score} Game Over !`)
        }
    }
})
















