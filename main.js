//import Swal from 'sweetalert2';

//Global variables
let playerScore = 0;
let computerScore = 0;
let roundWinner = " ";
const roundsHistoric = document.querySelector("#roundsHist");
const playerScoreText = document.querySelector(".playerScore");
const cpuScoreText = document.querySelector(".cpuScore");

roundsHistoric.setAttribute('style', 'white-space: pre;')

//Function for randomly choosing a computer play between 3 possible options, Rock, Paper, Scissors;
    function computerPlay (){
        const strMoves = ["Rock","Paper","Scissors"];

        return (strMoves[Math.floor(Math.random() * 3)]);
    }

//Function to play a single round of Rock Paper Scissors VS the CPU;
    function playRound (playerSelection, computerSelection){
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        roundsHistoric.textContent +="\n-----------------------------------------------\n"
        if(playerSelection === computerSelection){
            roundsHistoric.textContent += "DRAW - Both you and the CPU picked " + 
            playerSelection +"!";
            // alert("DRAW! Close but not enough! Both you and the CPU picked " + 
            //     playerSelection);
            return "DRAW"
        }else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"
                    || playerSelection === "PAPER" && computerSelection === "ROCK" 
                    || playerSelection === "SCISSORS" && computerSelection === "PAPER"){
                        roundsHistoric.textContent += "WON - Your " + playerSelection + " beats CPU's " + 
                        computerSelection +"!";
                        playerScore++;
                        playerScoreText.textContent = playerScoreText.textContent.replace(/.$/,playerScore);
                        console.log(playerScore);
                        // alert("YOU WIN!!! Your " + playerSelection + " beats CPU's " + 
                        //         computerSelection +"!");
                        return "HUMAN"
        }else if (playerSelection === "ROCK" && computerSelection === "PAPER" 
                    || playerSelection === "PAPER" && computerSelection === "SCISSORS" 
                    || playerSelection === "SCISSORS" && computerSelection === "ROCK"){
                        roundsHistoric.textContent += "LOST - The CPU's " + computerSelection + " beats your " + 
                        playerSelection + "!";
                        computerScore++;
                        cpuScoreText.textContent = cpuScoreText.textContent.replace(/.$/,computerScore);
                        // alert("YOU LOSE! The CPU's " + computerSelection + " beats your " + 
                        //         playerSelection + ", try again!");
                        return "CPU"
        }else{
            alert("WARNING! Please enter a valid response: 'Rock' or 'Paper'" +
            " or 'Scissors' || not case-sensitive, write as you want :)")
            return "INVALID_ROUND!"
        }
    }

//Function to play a full game with 5 rounds VS the CPU
    // function game (){
    //     for (let i = 0; i < 5; i++){
    //         roundWinner = playRound(prompt("CHOOSE: Rock / Paper / Scissors"),
    //                 computerPlay());
    //         if ( roundWinner === "HUMAN"){
    //             playerScore++;
    //         }else if (roundWinner === "CPU"){
    //             computerScore++;
    //         }
    //         console.log("The winner of this round is: " + roundWinner);
    //     }
    //     if (playerScore === computerScore){
    //         alert("DRAW! Both YOU and the CPU scored: " + playerScore);
    //     }else if(playerScore > computerScore){
    //         alert("You WON the game with a total of " + playerScore + 
    //                 " winning rounds VS the CPU " + computerScore + " winning rounds!");
    //     }else if(playerScore < computerScore){
    //         alert("CPU WON the game with a total of " + computerScore + 
    //                 " winning rounds VS yours " + playerScore + " winning rounds.")
    //     }
    // }

    window.onload = function(){ 
        document.getElementById("rock").onclick = function(){playRound(document.getElementById("rock").getAttribute('id'),computerPlay());};
        document.getElementById("paper").onclick = function(){playRound(document.getElementById("paper").getAttribute('id'),computerPlay());};
        document.getElementById("scissors").onclick = function(){playRound(document.getElementById("scissors").getAttribute('id'),computerPlay());};       
     
        // Swal.fire({
        //     title: 'Error!',
        //     text: 'Do you want to continue',
        //     icon: 'error',
        //     confirmButtonText: 'Cool'
        //  })
    };
   
  
    