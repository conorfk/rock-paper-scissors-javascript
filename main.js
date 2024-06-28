console.log("Welcome to Rock, Paper, Scissors!");



function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    if(value === 0) {
        return "rock";
    } else if(value === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("What would you like to play? (choices: rock, paper, or scissors)");
    let choice = input.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return getHumanChoice(prompt("Not a valid play, try again"));
    }
}

function playRound(humanChoice, computerChoice) {
    console.log("You played: " + humanChoice);
    console.log("Computer played: " + computerChoice);
    if(humanChoice === "rock") {
        if(computerChoice === "rock") {
            console.log("Its a tie!")
            return 0;
        } else if(computerChoice === "paper") {
            console.log("Computer wins! Paper beats rock.")
            return -1;
        } else if(computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.")
            return 1;
        }
    } else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("You win! Paper beats rock.")
            return 1;
        } else if(computerChoice === "paper") {
            console.log("Its a tie!")
            return 0;
        } else if(computerChoice === "scissors") {
            console.log("Computer wins! Scissors beats paper.")
            return -1;
        }
    } else if(humanChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("Computer wins! Rock beats scissors.")
            return -1;
        } else if(computerChoice === "paper") {
            console.log("You win! Scissors beats paper.")
            return 1;
        } else if(computerChoice === "scissors") {
            console.log("Its a tie!")
            return 0;
        }
    }
    
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 1; i < 6; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        let outcome = playRound(humanSelection, computerSelection);
        console.log("---------------------------");
        if (outcome > 0) {
            humanScore++;
        } else if (outcome < 0) {
            computerScore++;
        }
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You win " + humanScore + "-" + computerScore);
    } else if (computerScore > humanScore) {
        console.log("Computer wins " + computerScore + "-" +humanScore);
    } else if (computerScore === humanScore) {
        console.log("Its a tie!");
    }
}

playGame();




