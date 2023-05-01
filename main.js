let gameOver = confirm('Do You want to play the game then Enter!')
if(gameOver == true ){
    let playerChoice = prompt('Enter your choice from rock,paper or scissors').toLowerCase()
    if(playerChoice =='rock' || playerChoice =='paper' || playerChoice =='scissors'){
        let computerChoice = Math.floor(Math.random()*3 + 1)
        let computer = computerChoice == 1 ? 'rock' : computerChoice == 2 ? 'paper' : 'scissors';
        console.log(computer)
        if((playerChoice == 'rock' && computer == 'scissors')||(playerChoice == 'paper' && computer == 'rock')||(playerChoice == 'scissors' && computer == 'paper')){
            alert('You Win')
        }else{
            alert('You Lose')
        }
    }else{
        alert('Please Enter the correct input ')
    }
}else {
    alert('Game Over please try next time !')
}
