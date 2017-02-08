import { expect, assert } from 'chai';
import Deck from "../scripts/deck";
import Card from "../scripts/card";

describe("testing deck constructor", () => {

  it("deck should be a function", () => {
    assert.isFunction(Deck);
  });

  it("deck should accept an array", () => {
    let deck = new Deck({});

    assert.isArray(deck.questionDeck);
  });

  it("should add new card in deck array and check if it exists", () => {
    let card = new Card({});
    let deck = new Deck({});

    deck.addCardToDeck(card);
    expect(deck.questionDeck).to.include(card);
  });

  it("should add 3 new card in deck array and check that all 3 cards exist in the deck", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({ question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let card3 = new Card({ question: "Describe in words the exact direction that is 697.5° clockwise from due north?", answer: "North north west"});
    let deck = new Deck({});

    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    deck.addCardToDeck(card3);
    expect(deck.questionDeck).to.include(card1, card2, card3);
  });

  it("should add 3 new card in deck array and check that the card count is 3", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau"});
    let card2 = new Card({ question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"});
    let card3 = new Card({ question: "Describe in words the exact direction that is 697.5° clockwise from due north?", answer: "North north west"});
    let deck = new Deck({});

    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    deck.addCardToDeck(card3);
    assert.equal(deck.count(), 3);
  });

});
