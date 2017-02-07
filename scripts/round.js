import Guess from "./guess";

class Round {
  constructor({ cardDeck }) {
    this.deck = cardDeck;
    this.guesses = [];
    this.count = 0;
    this.numberCorrect = 0;
  }
  currentCard() {
    return this.deck.questionDeck.shift();
  }
  recordGuess(inputGuess) {
    let guess = new Guess({ response: inputGuess, questionCard: this.currentCard() });
    this.guesses.push(guess);
    this.count++;
    this.correctCounter();
  }
  correctCounter() {
    this.numberCorrect = 0;
    this.guesses.forEach( guess => {
      return guess.feedback() === "Correct!" ? this.numberCorrect++ : false;
    });
  }
  percentCount() {
    let percentage = this.numberCorrect / this.count * 100;
    return `${Math.floor(percentage)}%`;
  }
}

export default Round;
