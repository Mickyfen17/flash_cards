class Deck {
  constructor({ deckArray }) {
    this.questionDeck = deckArray || [];
  }
  addCardToDeck(card) {
    this.questionDeck.push(card);
  }
  count() {
    return this.questionDeck.length;
  }
}

export default Deck;
