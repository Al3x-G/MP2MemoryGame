/**
 * @jest-environment jsdom
 */


/*below contains all function imported from memory.js file */
const { game, newGame, showScore } = require("../memory");

/*beforeAll function is applied to put HTML file into the DOM before any tests run */

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

/*describe section where test can be written for each functionality */

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

/*the beforeAll contains fake data to test if the newGame works correctly by clearing the data */
describe("newGame works correctly", () => {
    beforeAll (() => {
        game.score = 23;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "23";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear the computer sequence array", () => {
        expect(game.currentGame.length).toEqual(0);
    });
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toEqual(0);
    });
    test("should display 0 for the element id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});