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

const body = document.querySelector("body")
const scissorBtn = document.createElement("button");
scissorBtn.textContent = "Scissors";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
body.appendChild(scissorBtn);
body.appendChild(paperBtn);
body.appendChild(rockBtn);

const scoreBoard = document.createElement("div");
scoreBoard.textContent = `User: ${humanScore} CPU: ${computerScore}`
body.appendChild(scoreBoard)

scissorBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    if (humanScore == 5) {
        scoreBoard.textContent = "You won!";
        paperBtn.remove();
        scissorBtn.remove();
        rockBtn.remove();
    } else if (computerScore == 5) {
        scoreBoard.textContent = "You've lost!";
        paperBtn.remove();
        scissorBtn.remove();
        rockBtn.remove();
    } else {
        scoreBoard.textContent = `User: ${humanScore} CPU: ${computerScore}`;
    }
});
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
    if (humanScore == 5) {
        scoreBoard.textContent = "You won!";
        paperBtn.remove();
        scissorBtn.remove();
        rockBtn.remove();
    } else if (computerScore == 5) {
        scoreBoard.textContent = "You've lost!";
        paperBtn.remove();
        scissorBtn.remove();
        rockBtn.remove();
    } else {
        scoreBoard.textContent = `User: ${humanScore} CPU: ${computerScore}`;
    }
});
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    if (humanScore == 5) {
        scoreBoard.textContent = "You won!";
        paperBtn.remove();
        scissorBtn.remove();
        rockBtn.remove();
    } else if (computerScore == 5) {
        scoreBoard.textContent = "You've lost!";
        paperBtn.remove();
        scissorBtn.remove();
        rockBtn.remove();
    } else {
        scoreBoard.textContent = `User: ${humanScore} CPU: ${computerScore}`;
    }
});
// paperBtn.addEventListener("click", playRound("paper", getComputerChoice()));
// rockBtn.addEventListener("click", playRound("rock", getComputerChoice()));


// playGame();