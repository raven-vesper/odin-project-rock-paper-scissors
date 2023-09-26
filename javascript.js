function getComputerChoice() {
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    return arr[(Math.floor(Math.random() * arr.length))];
}
let playerScore = 0;
let computerScore = 0;

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }

    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        playerScore++
        return "Player wins the round."
}
    
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        computerScore++
        return "Computer wins the round."
      }

}

function gameScore() {
    if (playerScore >= 3) {
        return "Player wins the game."
    } else if (computerScore >= 3) {
        return "Computer wins the game."
    } else {
        return "It's a draw. No one wins."
    }
} 

function game() {
    console.log(singleRound(prompt("ROCK, PAPER, SCISSORS?"), getComputerChoice()));
    console.log(singleRound(prompt("ROCK, PAPER, SCISSORS?"), getComputerChoice()));
    console.log(singleRound(prompt("ROCK, PAPER, SCISSORS?"), getComputerChoice()));
    console.log(singleRound(prompt("ROCK, PAPER, SCISSORS?"), getComputerChoice()));
    console.log(singleRound(prompt("ROCK, PAPER, SCISSORS?"), getComputerChoice()));
    console.log(gameScore());
}

game();