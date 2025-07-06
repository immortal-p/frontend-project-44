import playBrainGame from "./index.js";

class BrainGame {
    constructor({ description, generateQuestion, getCorrectAnswer, rangeMin, rangeMax }) {
        this.description = description;
        this.logicGame = { generateQuestion, getCorrectAnswer };
        this.rangeMin = rangeMin;
        this.rangeMax = rangeMax;
    }

    run() {
        playBrainGame(this.description, this.logicGame, this.rangeMin, this.rangeMax);
    }
}

export default BrainGame;