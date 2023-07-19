// game.js

document.getElementById("start-button").addEventListener("click", function() {
    // Show the game container and hide the menu
    document.getElementById("menu").style.display = "none";
    document.getElementById("game-container").style.display = "block";
});

document.getElementById("game-title").addEventListener("click", function() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("menu").style.display = "block";
});

document.getElementById("instructions-button").addEventListener("click", function() {
    const instructions = "How to Play:\n\n"
        + "1. Pick between rock, paper, or scissors.\n"
        + "2. The computer will also choose from one of the options.\n"
        + "3. Determine the winner based on the rules:\n"
        + "   - Rock beats scissors.\n"
        + "   - Paper beats rock.\n"
        + "   - Scissors beat paper.\n"
        + "4. Keep track of your wins and losses.";
    
    alert(instructions);
});

let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game-container").style.display = "block";
});

const choices = document.querySelectorAll(".choice-btn");
choices.forEach(choice => {
    choice.addEventListener("click", function() {
        const playerSelection = this.id;
        const computerSelection = createComputerChoice();
        const result = playGame(playerSelection, computerSelection);
        displayResult(result, playerSelection, computerSelection);
        updateScore(result);
    });
});


// Creates a random choice for computer
function createComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Runs a single round of the game and gives the result
function playGame(player, computer) {
    if (player === computer) {
        drawCount++;
        return "It's a tie!";
    } else if ((player === "rock" && computer === "scissors") || 
               (player === "paper" && computer === "rock") ||
               (player === "scissors" && computer === "paper")) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}


// Displays the result of the game round
function displayResult(result, player, computer) {
    const resultElement = document.getElementById("result");
    resultElement.style.display = "block";
    resultElement.textContent = `${result} You chose ${player}. Computer chose ${computer}.`;
}


// Updates the score and draw tally
function updateScore(result) {
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");
    const drawCountElement = document.getElementById("draw-count");
    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    drawCountElement.textContent = `Draws: ${drawCount}`;
}



