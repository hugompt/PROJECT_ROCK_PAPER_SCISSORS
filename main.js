//Global variables
let playerScore = 0;
let computerScore = 0;
let roundWinner = " ";

//Function for randomly choosing a computer play between 3 possible options, Rock, Paper, Scissors;
    function computerPlay (){
        const strMoves = ["Rock","Paper","Scissors"];
        return (strMoves[Math.floor(Math.random() * 3)]);
    }

//Function to play a single round of Rock Paper Scissors VS the CPU;
    function playRound (playerSelection, computerSelection){
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        if(playerSelection === computerSelection){
            alert("DRAW! Close but not enough! Both you and the CPU picked " + 
                playerSelection);
            return "DRAW"
        }else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"
                    || playerSelection === "PAPER" && computerSelection === "ROCK" 
                    || playerSelection === "SCISSORS" && computerSelection === "PAPER"){
                        alert("YOU WIN!!! Your " + playerSelection + " beats CPU's " + 
                                computerSelection +"!");
                        return "HUMAN"
        }else if (playerSelection === "ROCK" && computerSelection === "PAPER" 
                    || playerSelection === "PAPER" && computerSelection === "SCISSORS" 
                    || playerSelection === "SCISSORS" && computerSelection === "ROCK"){
                        alert("YOU LOSE! The CPU's " + computerSelection + " beats your " + 
                                playerSelection + ", try again!");
                        return "CPU"
        }else{
            alert("WARNING! Please enter a valid response: 'Rock' or 'Paper'" +
            " or 'Scissors' || not case-sensitive, write as you want :)")
            return "INVALID_ROUND!"
        }
    }

//Function to play a full game with 5 rounds VS the CPU
    function game (){
        for (let i = 0; i < 5; i++){
            roundWinner = playRound(prompt("CHOOSE: Rock / Paper / Scissors"),
                    computerPlay());
            if ( roundWinner === "HUMAN"){
                playerScore++;
            }else if (roundWinner === "CPU"){
                computerScore++;
            }
            console.log("The winner of this round is: " + roundWinner);
        }
        if (playerScore === computerScore){
            alert("DRAW! Both YOU and the CPU scored: " + playerScore);
        }else if(playerScore > computerScore){
            alert("You WON the game with a total of " + playerScore + 
                    " winning rounds VS the CPU " + computerScore + " winning rounds!");
        }else if(playerScore < computerScore){
            alert("CPU WON the game with a total of " + computerScore + 
                    " winning rounds VS yours " + playerScore + " winning rounds.")
        }
    }