const computerPlay = () => {
    const options = ["Rock", "Paper", "Scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

const playRound = (computerSelection, playerSelection) => {
    if(computerSelection == playerSelection){
       return "It's a tie"
       
    }
    else if((computerSelection == "Rock" && playerSelection == "Paper") || (computerSelection == "Scissors" && playerSelection == "Rock") || (computerSelection == "Paper" && playerSelection == "Scissors")){
        return "Player won"
    }
    else if((computerSelection == "Paper" && playerSelection == "Rock") || (computerSelection == "Rock" && playerSelection == "Scissors") || (computerSelection == "Scissors" && playerSelection == "Paper")){
        return "Computer Wins"
    }
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for(let i = 0; i < 5; i++){
        result = playRound(computerSelection, playerSelection)
        if(result == "Player won"){
            playerScore++
        }
        else if(result == "Computer Wins"){
            computerScore++
        }
    }
}
const computerSelection = computerPlay()
const playerSelection = "Rock"
game()

