
const choices = ['rock', 'paper', 'scissors'];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoresDisplay = document.getElementById("playerScoresDisplay");
const computerScoresDisplay = document.getElementById("computerScoresDisplay");
let playerScores = 0;
let computerScores = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else {
        switch(playerChoice){
            case "rock":
            result = (computerChoice === "scissors") ? "YOU WON!" : "YOU LOSE";
            break;
            case "paper":
            result = (computerChoice === "rock") ? "YOU WON!" : "YOU LOSE";
            break;
            case "scissors":
            result = (computerChoice === "paper") ? "YOU WON!" : "YOU LOSE";
            break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

     resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        case "YOU WON!":
          resultDisplay.classList.add("greenText")
          playerScores++
          playerScoresDisplay.textContent = playerScores;
          break;

        case "YOU LOSE!":
           resultDisplay.classList.add("redText")
           computerScores++
           computerScoresDisplay.textContent = computerScores;
           break;
    }
}
