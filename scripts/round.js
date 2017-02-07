import Guess from "./guess";

class Round {
  constructor({ cardDeck }) {
    this.deck = cardDeck;
    this.guesses = [];
    this.count = 0;
  }
  currentCard() {
    // console.log(this.deck.questionDeck)
    return this.deck.questionDeck.shift();
    // console.log(this.deck.questionDeck.shift());
    // console.log(this.deck.questionDeck)
  }
  recordGuess(inputGuess) {
    let guess = new Guess({ response: inputGuess, questionCard: this.currentCard() });
    this.guesses.push(guess);
    this.count++;
    return this.guesses[0];
  }
}

export default Round;
