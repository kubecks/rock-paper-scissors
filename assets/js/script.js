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


function createComputerChoice() {

}

function displayResult() {

}

function updateScore(result) {

}



