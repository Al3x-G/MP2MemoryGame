let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
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
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

/*below contains all function to be exported into the memory.test.js file */
module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };