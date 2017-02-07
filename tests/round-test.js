import { expect, assert } from 'chai';
import Round from "../scripts/round";
import Deck from "../scripts/deck";
import Card from "../scripts/card";

describe("testing round constructor", () => {

  it("round should be a function", () => {
    assert.isFunction(Round);
  });

  it("round.deck should hold an object", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck();
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });
    expect(round).to.have.property("deck").that.is.an("object");
  });

  it("round.deck.questionDeck should be an array", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck();
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });
    expect(round).to.have.property("deck").that.is.an("object").with.deep.property("questionDeck").that.is.an("array");
  });

  it("round should accept a deck of cards and prove that they exist within round", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let card2 = new Card({ question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000" });
    let deck = new Deck();
    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    let round = new Round({ cardDeck: deck });
    expect(round.deck.questionDeck).to.include(card1);
    expect(round.deck.questionDeck).to.include(card2);
  });

  it("round guesses should return an array", () => {
    let round = new Round({});
    assert.isArray(round.guesses);
  });

  it("round should accept a deck of cards and display the first of those cards using current card", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let card2 = new Card({ question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000" });
    let deck = new Deck();
    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    let round = new Round({ cardDeck: deck });
    assert.equal(round.currentCard(), card1);
  });

  it("round recordGuess should accept a userGuess that is passed into guesses array as a response on Guess constructor", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck();
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });
    let userGuess = "Juneau";
    round.recordGuess(userGuess);
    assert.equal(round.guesses[0].response, userGuess);
  });

  it("round guesses array should increase in length from 0 to 1 as userGuess is passed into recordGuess", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck();
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });
    expect(round.guesses).to.have.lengthOf(0);
    round.recordGuess("Juneau");
    expect(round.guesses).to.have.lengthOf(1);
  });

  it("round count should increase from 0 to 1 as userGuess is passed into recordGuess", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck();
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });
    assert.equal(round.count, 0);
    round.recordGuess("Juneau");
    assert.equal(round.count, 1);
  });

  it("should be able to get feedback of Correct! following correct userGuess", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck();
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });
    let userGuess = "Juneau";
    round.recordGuess(userGuess);
    assert.equal(round.guesses[0].feedback(), "Correct!");
  });

  it("should be able to get feedback of Incorrect following wrong userGuess", () => {
    let card1 = new Card({ question: "Which planet is closest to the sun?", answer: "Mercury" });
    let deck = new Deck();
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });
    let userGuess = "Saturn";
    round.recordGuess(userGuess);
    assert.equal(round.guesses[0].feedback(), "Incorrect");
  });

});
