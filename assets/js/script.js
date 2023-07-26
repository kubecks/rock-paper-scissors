/* jshint esversion: 8 */

// Cache DOM elements
const menuElement = document.getElementById("menu");
const gameContainerElement = document.getElementById("game-container");
const startButton = document.getElementById("start-button");
const quitButton = document.getElementById("quit-button");
const choices = document.getElementById("choices");
const resultElement = document.getElementById("result");
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const drawCountElement = document.getElementById("draw-count");
const instructionsButton = document.getElementById("instructions-button");
const modalElement = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal-button");
const winnerModalElement = document.getElementById("winner-modal");
const closeWinnerModalButton = document.getElementById("close-winner-modal");

// Initialize scores
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

const WINNING_SCORE = 5;



document.addEventListener("DOMContentLoaded", function() {
    // Event listener for "Start" button and "Game Title" click
    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        quitButton.classList.remove("hidden");
        menuElement.style.display = "block";
        gameContainerElement.style.display = "block";
      });
    // document.getElementById("game-title").addEventListener("click", toggleGameContainer);
    quitButton.addEventListener("click", function() {
        quitButton.classList.add("hidden");
        startButton.style.display = "block";
        menuElement.style.display = "block";
        gameContainerElement.style.display = "none";
      });
    // Event listener for game title (logo)
    document.getElementById("game-title").addEventListener("click", function() {
        // Hide the game container and show the menu
        gameContainerElement.style.display = "none";
        menuElement.style.display = "block";
    });
    // Event listener for "Instructions" button
    instructionsButton.addEventListener("click", function() {
        showModal("modal");
    });
    // Event delegation for choice buttons
    choices.addEventListener("click", function(event) {
        const playerSelection = event.target.id;
        const computerSelection = createComputerChoice();
        const result = playGame(playerSelection, computerSelection);
        displayResult(result, playerSelection, computerSelection);
        updateScore(result);
        checkWinner(); // Check if a player has won after each round
    });
    closeModalButton.addEventListener("click", function() {
      modalElement.style.display = "none";
    });
    // Event listener for "Close" button in the winner modal
    closeWinnerModalButton.addEventListener("click", function() {
      winnerModalElement.style.display = "none";
    });
  });

function toggleGameContainer() {
    quitButton.classList.remove("hidden");
    startButton.classList.add("hidden");
    // menuElement.style.display = menuElement.style.display === "block" ? "none" : "block";
    gameContainerElement.style.display = gameContainerElement.style.display === "none" ? "block" : "none";
}
// Function to create a random choice for the computer
function createComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to run a single round of the game and gives the result
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

// Function to display the result of the game round
function displayResult(result, player, computer) {
    resultElement.style.display = "block";
    resultElement.textContent = `${result} You chose ${player}. Computer chose ${computer}.`;
}

// Function to update the score and draw tally
function updateScore(result) {
    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    drawCountElement.textContent = `Draws: ${drawCount}`;
}

// Function to show the modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Event listener for "Close" button in the modal
closeModalButton.addEventListener("click", function() {
    modalElement.style.display = "none";
});

// Event listener for "Close" button in the winner modal
closeWinnerModalButton.addEventListener("click", function() {
    winnerModalElement.style.display = "none";
});

// Function to reset scores
function resetScores() {
    playerScore = 0;
    computerScore = 0;
    drawCount = 0;
    updateScore(); // Update the displayed scores after resetting
}

// Function to check if a player has won the game
function checkWinner() {
    if (playerScore === WINNING_SCORE) {
        displayWinnerMessage("Congratulations! You won the game!");
        resetScores();
    } else if (computerScore === WINNING_SCORE) {
        displayWinnerMessage("Game Over! The computer won the game!");
        resetScores();
    }
}

// Function to display the winner message in the modal
function displayWinnerMessage(message) {
    const winnerMessageElement = document.getElementById("winner-message");
    winnerMessageElement.textContent = message;
    showModal("winner-modal");
}
