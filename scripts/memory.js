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
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

/*below contains all function to be exported into the memory.test.js file */
module.exports = { game, newGame, showScore };