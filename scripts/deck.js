class Deck {
  constructor(questionDeck) {
    this.questionDeck = questionDeck;
  }
  count() {
    return this.questionDeck.length;
  }
}

export default Deck;
