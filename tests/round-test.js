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
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });

    expect(round).to.have.property("deck").that.is.an("object");
  });

  it("round.deck.questionDeck should be an array", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });

    expect(round).to.have.property("deck").that.is.an("object").with.deep.property("questionDeck").that.is.an("array");
  });

  it("round should accept a deck of cards and prove that they exist within round", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let card2 = new Card({ question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000" });
    let deck = new Deck({});
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
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    let round = new Round({ cardDeck: deck });

    assert.equal(round.currentCard(), card1);
  });

  it("round recordGuess should accept a userGuess that is passed into guesses array as a response on Guess constructor", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });
    let userGuess = "Juneau";

    round.recordGuess(userGuess);
    assert.equal(round.guesses[0].response, userGuess);
  });

  it("round guesses array should increase in length from 0 to 1 as userGuess is passed into recordGuess", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });

    expect(round.guesses).to.have.lengthOf(0);

    round.recordGuess("Juneau");
    expect(round.guesses).to.have.lengthOf(1);
  });

  it("round count should increase from 0 to 1 as userGuess is passed into recordGuess", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });

    assert.equal(round.count, 0);

    round.recordGuess("Juneau");
    assert.equal(round.count, 1);
  });

  it("should be able to get feedback of Correct! following correct userGuess", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });
    let userGuess = "Juneau";

    round.recordGuess(userGuess);
    assert.equal(round.guesses[0].feedback(), "Correct!");
  });

  it("should be able to get feedback of Incorrect following wrong userGuess", () => {
    let card1 = new Card({ question: "Which planet is closest to the sun?", answer: "Mercury" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    let round = new Round({ cardDeck: deck });
    let userGuess = "Saturn";

    round.recordGuess(userGuess);
    assert.equal(round.guesses[0].feedback(), "Incorrect");
  });

  it("numberCorrect should increase to 2 following to correct userGuesses", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let card2 = new Card({ question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    let round = new Round({ cardDeck: deck });
    let userGuess1 = "Juneau";
    let userGuess2 = "93,000,000";

    assert.equal(round.numberCorrect, 0);

    round.recordGuess(userGuess1);
    assert.equal(round.numberCorrect, 1);

    round.recordGuess(userGuess2);
    assert.equal(round.numberCorrect, 2);
  });

  it("should be able to add 2 cards to deck, run currentCard twice and prove the second card that was added is next in line", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let card2 = new Card({ question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    let round = new Round({ cardDeck: deck });

    round.currentCard();
    assert.equal(round.currentCard(), card2);
  });

  it("should be able to add 2 cards to deck, answer one correctly, one incorrectly and check that count = 2 and numberCorrect = 1", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let card2 = new Card({ question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    let round = new Round({ cardDeck: deck });
    let userGuess1 = "Juneau";
    let userGuess2 = "2";

    assert.equal(round.count, 0);
    assert.equal(round.numberCorrect, 0);

    round.recordGuess(userGuess1);
    assert.equal(round.count, 1);
    assert.equal(round.numberCorrect, 1);

    round.recordGuess(userGuess2);
    assert.equal(round.count, 2);
    assert.equal(round.numberCorrect, 1);
  });

  it("should be able to add 2 cards to deck, answer one correctly, one incorrectly and check that the feedback changes", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let card2 = new Card({ question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    let round = new Round({ cardDeck: deck });
    let userGuess1 = "Juneau";
    let userGuess2 = "2";

    round.recordGuess(userGuess1);
    assert.equal(round.guesses[0].feedback(), "Correct!");

    round.recordGuess(userGuess2);
    assert.equal(round.guesses[1].feedback(), "Incorrect");
  });

  it("should be able to add 2 cards to deck, answer one correctly, one incorrectly and return 50% correct ratio", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let card2 = new Card({ question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    let round = new Round({ cardDeck: deck });
    let userGuess1 = "Juneau";
    let userGuess2 = "2";

    round.recordGuess(userGuess1);
    assert.equal(round.percentCount(), "100%");
    round.recordGuess(userGuess2);
    assert.equal(round.percentCount(), "50%");
  });

  it("should be able to add 5 cards to deck, answer 2 correctly, 3 incorrectly and return the correct % ratio, guess count, correct count & check each guesses feedback", () => {
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let card2 = new Card({ question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000" });
    let card3 = new Card({ question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars" });
    let card4 = new Card({ question: "Describe in words the exact direction that is 697.5° clockwise from due north?", answer: "North north west"} );
    let card5 = new Card({ question: "Which planet is closest to the sun?", answer: "Mercury" });
    let deck = new Deck({});
    deck.addCardToDeck(card1);
    deck.addCardToDeck(card2);
    deck.addCardToDeck(card3);
    deck.addCardToDeck(card4);
    deck.addCardToDeck(card5);
    let round = new Round({ cardDeck: deck });
    let userGuess1 = "Juneau";
    let userGuess2 = "2";
    let userGuess3 = "Mars";
    let userGuess4 = "Wrong";
    let userGuess5 = "Wrong";

    assert.equal(round.count, 0);
    assert.equal(round.numberCorrect, 0);

    round.recordGuess(userGuess1);
    assert.equal(round.count, 1);
    assert.equal(round.numberCorrect, 1);
    assert.equal(round.percentCount(), "100%");
    assert.equal(round.guesses[0].feedback(), "Correct!");

    round.recordGuess(userGuess2);
    assert.equal(round.count, 2);
    assert.equal(round.numberCorrect, 1);
    assert.equal(round.percentCount(), "50%");
    assert.equal(round.guesses[1].feedback(), "Incorrect");

    round.recordGuess(userGuess3);
    assert.equal(round.count, 3);
    assert.equal(round.numberCorrect, 2);
    assert.equal(round.percentCount(), "66%");
    assert.equal(round.guesses[2].feedback(), "Correct!");

    round.recordGuess(userGuess4);
    assert.equal(round.count, 4);
    assert.equal(round.numberCorrect, 2);
    assert.equal(round.percentCount(), "50%");
    assert.equal(round.guesses[3].feedback(), "Incorrect");

    round.recordGuess(userGuess5);
    assert.equal(round.count, 5);
    assert.equal(round.numberCorrect, 2);
    assert.equal(round.percentCount(), "40%");
    assert.equal(round.guesses[4].feedback(), "Incorrect");
  });

});
