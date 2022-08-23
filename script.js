let computerSelection;
let resultMessage;
let origin = (prompt("please enter rock, paper, or scissors").toLowerCase());
let playerSelection = origin;



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
       
        
        computerSelection = getComputerChoice();
        console.log("Round Number " + gameCount)
        console.log(playerSelection)
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")  {
        return ("please enter a valid selection")  ;
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
    

function result(){
    
    if ((gameCount === 5) && (playerScore > computerScore)) {
    resultMessage = ("You win the game with a score of " + playerScore + " to " + computerScore);
    } else if ((gameCount === 5) && (playerScore < computerScore)){
    resultMessage =("You lost the war, fucko, with a score of " + playerScore + " to the computers score of " + computerScore)
    } 
        
}



//game and score counters//
let gameCount = 1;
let computerScore = 0;
let playerScore = 0;



function game() {
    
    
    //plays 5 rounds
    for (let i = 0; i < 5; i++) {
        
      //logs scores to console
      console.log(playRound(computerSelection,playerSelection));
      console.log("Your score is " + playerScore);
      console.log("The computers score is " + computerScore);
      
      
    }
 }  


game();















