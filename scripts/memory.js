let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
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
    //showTurns ();
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

/*below contains all function to be exported into the memory.test.js file */
module.exports = { game, newGame, showScore, addTurn, lightsOn };