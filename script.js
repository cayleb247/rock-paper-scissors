
// function that returns a random choice between rock, paper, and scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Would you like to select rock, paper, or scissors?", "type here");
    if (choice.toLowerCase() == "scissors") {
        return "scissors";
    } else if (choice.toLowerCase() == "rock") {
        return "rock";
    } else if (choice.toLowerCase() == "paper") {
        return "paper";
    } else {
        alert("That is not a valid input, maybe you mispelled something?");
    }
}

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        alert("It's a tie!")
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        alert("You've won! Your scissors has brutally stripped the poor sheet of paper into nothing but shreds!");
        humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        alert("You've won! Your paper has completely wrapped itself around the poor rock, slowly suffacating it!");
        humanScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        alert("You've won! Your rock has completely disassembled the poor pair of scissors with its sheer blunt force!");
        humanScore += 1;
    } else {
        alert(`Oh no! You've lost! Your ${humanChoice} were no match for the computer's ${computerChoice}!`)
        computerScore += 1;
    }
    
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        alert(`Round ${round}! Please make your selection`);

        let human_choice = getHumanChoice();

        let computer_choice = getComputerChoice();

        playRound(human_choice, computer_choice);

        alert(`Good fight! The score is currently ${humanScore} to ${computerScore}`);
    }
}

playGame();