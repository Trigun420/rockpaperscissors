let computerSelection;
let resultMessage;
let playerSelection;


function getComputerChoice() {
    
    let randomNumber = Math.floor(Math.random() * 3 ) + 1;
    if (randomNumber === 1 ) {
        return "rock";
    } else if (randomNumber === 2) {
        return "scissors";
    } else if (randomNumber === 3) {
        return "paper";
        
    }
}   
//plays a single round and evaluates the results
function playRound() {
    let origin = (prompt("please enter rock, paper, or scissors").toLowerCase());
    let playerSelection = origin;    
        computerSelection = getComputerChoice();
        console.log("Round Number " + gameCount)
        console.log(playerSelection)
        
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")  {
        return ("Please enter a valid selection.")  ;
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        playerScore++; gameCount++;
        return ("You Win!! " + playerSelection + " beats " + computerSelection + ".");
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerScore++; gameCount++;
        return ("You Win!! " + playerSelection + " beats " + computerSelection + ".");
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerScore++; gameCount++;
        return ("You Win!! " + playerSelection + " beats " + computerSelection + ".");
    } else if (playerSelection === computerSelection) {
         gameCount++
                return "This is a tie!"
    } else {
        computerScore++;gameCount++
        return ("You lose fucko, " + computerSelection + " beats " + playerSelection)
    
}
}
    





//game and score counters//
let gameCount = 1;
let computerScore = 0;
let playerScore = 0;



function game() {
    
    
   
    //plays 5 rounds
    for (let i =1 ; i < 6; i++) {
        
      //logs scores to console
      console.log(playRound(computerSelection,playerSelection));
      console.log("Your score is " + playerScore);
      console.log("The computers score is " + computerScore);
      console.log(result(gameCount, playerScore, computerScore))
     
        
    }
}  
function result(gameCount){
    
    if ((gameCount === 6) && (playerScore > computerScore)) {
    return  ("You win the game with a score of " + playerScore + " to " + computerScore);
    } else if ((gameCount === 6) && (playerScore < computerScore)){
    return ("You lost the war, fucko, with a score of " + playerScore + " to the computers score of " + computerScore)
    } 
        
}

game();















