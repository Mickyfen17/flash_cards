class Deck {
  constructor() {
    this.questionDeck = [];
  }
  addCardToDeck(card) {
    this.questionDeck.push(card);
  }
  count() {
    return this.questionDeck.length;
  }
}

export default Deck;
