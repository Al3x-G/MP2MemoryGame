let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    turnNumber: 0,
    lastButton: "",
    turnInProgress: false,
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    lightsOn(move);
                    game.playerMoves.push(move);
                    playerTurn();
                }
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn ();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns ();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

/*setTimeout removes the function after a set time(400ms), effectively turning the light off */
function lightsOn(sphere) {
    document.getElementById(sphere).classList.add("light")
    setTimeout(() => {
        document.getElementById(sphere).classList.remove("light");
    }, 400);
}

/*this function calls the lights on function inside a set interval, 
making sure there is a pause between the lights being shown and the next sequence */

function showTurns() {
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
}

function playerTurn() {
    let i = game.playerMoves.length - 1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length == game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        alert("Nope, not that one, Try again!");
        newGame();
    }
}

/*below contains all function to be exported into the memory.test.js file */
module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn };