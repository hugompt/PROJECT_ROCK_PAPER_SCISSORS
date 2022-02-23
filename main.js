//Function for randomly choosing a computer play between 3 possible options, Rock, Paper, Scissors;
//Decided to write it on console and return it;
    function computerPlay (){
        const strMoves = ["Rock","Paper","Scissors"];
        return (strMoves[Math.floor(Math.random() * 3)]);
    }

//Function to play a single round of Rock Paper Scissors;
//2 Parameters, playerSelection and computerSelection;
    function playRound (playerSelection, computerSelection){
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        if(playerSelection === computerSelection){
            alert("DRAW! Close but not enough! Both you and the CPU picked " + playerSelection);
        }else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "SCISSORS" && computerSelection === "PAPER"){
            alert("You WIN!!! Your " + playerSelection + " beats CPU's " + computerSelection +"!");
        }else if (playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "SCISSORS" || playerSelection === "SCISSORS" && computerSelection === "ROCK"){
            alert("You LOSE! The CPU's " + computerSelection + " beats your " + playerSelection + ", try again!");
        }
    }