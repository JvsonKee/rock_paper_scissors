let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "player";

    } else {
        return "computer";
    }
}
function game() {
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, scissors.. shoot!");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        return "Congradulations you win!!";
    } else if (computerScore > playerScore) {
        return "Sorry, you lose!";
    } else if (playerScore == computerScore) {
        return "It's a tie!";
    }
}
function updateScore(winner) {
    const scoreHeading = document.getElementById("scoreHeading");
    const playerScoreLine = document.getElementById("playerScore");
    const computerScoreLine = document.getElementById("computerScore");
    if (winner == "tie") {
        scoreHeading.textContent = "It's a tie!"
    } else if (winner == "player") {
        scoreHeading.textContent = "Player wins!";
        playerScore++;
    } else if (winner == "computer") {
        scoreHeading.textContent = "Computer wins!";
        computerScore++;
    }
    playerScoreLine.textContent = "Player: " + playerScore;
    computerScoreLine.textContent = "Computer: " + computerScore;
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.id;
        let computerChoice = computerPlay();
        updateScore(playRound(playerChoice, computerChoice));
        console.log(playRound(playerChoice, computerChoice));
    });
});