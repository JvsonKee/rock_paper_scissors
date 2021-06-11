let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie game!"
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection + 
        "\nPlayer score: " + ++playerScore + "\nComputer score: " + computerScore;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection + 
        "\nPlayer score: " + playerScore + "\nComputer score: " + ++computerScore;
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