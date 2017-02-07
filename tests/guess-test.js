import { expect, assert } from 'chai';
import Guess from "../scripts/guess";
import Card from "../scripts/card";

describe("testing guess constructor", () => {

  it("guess should be a function", () => {
    assert.isFunction(Guess);
  });

  it("card should also be a function", () => {
    assert.isFunction(Card);
  });

  it("guess should be able to accept a response", () => {
    let guess = new Guess({ response: "Saturn" });

    assert.equal(guess.response, "Saturn");
  });

  it("guess should be able to accept a question card object", () => {
    let card = new Card({});
    let guess = new Guess({ questionCard: card });

    assert.isObject(guess.questionCard);
  });

  it("guess should be able to accept a question card and access the question through guess", () => {
    let card = new Card({ question: "Which planet is closest to the sun?" });
    let guess = new Guess({ questionCard: card });

    assert.equal(guess.questionCard.question, "Which planet is closest to the sun?");
  });

  it("guess should be able to accept a question card and access the answer through guess", () => {
    let card = new Card({ answer: "Mercury" });
    let guess = new Guess({ questionCard: card });

    assert.equal(guess.questionCard.answer, "Mercury");
  });

  it("guess should be able to accept a question card and display the card object", () => {
    let card = new Card({ question: "Which planet is closest to the sun?", answer: "Mercury" });
    let guess = new Guess({ questionCard: card });

    assert.equal(guess.questionCard.question, "Which planet is closest to the sun?");
    assert.equal(guess.questionCard.answer, "Mercury");
  });

  it("guess should accept a question card, an incorrect answer and return false from correct prototype", () => {
    let card = new Card({ question: "Which planet is closest to the sun?", answer: "Mercury" });
    let guess = new Guess({ response: "Saturn", questionCard: card });

    assert.equal(guess.correct(), false);
  });

  it("guess should accept a question card, a correct answer and return true from correct prototype", () => {
    let card = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let guess = new Guess({ response: "Juneau", questionCard: card });

    assert.equal(guess.correct(), true);
  });

  it("guess should accept a question card, a incorrect answer and return incorrect from feedback prototype", () => {
    let card = new Card({ question: "Which planet is closest to the sun?", answer: "Mercury" });
    let guess = new Guess({ response: "Saturn", questionCard: card });

    assert.equal(guess.feedback(), "Incorrect");
  });

  it("guess should accept a question card, a correct answer and return Correct! from feedback prototype", () => {
    let card = new Card({ question: "What is the capital of Alaska?", answer: "Juneau" });
    let guess = new Guess({ response: "Juneau", questionCard: card });
    
    assert.equal(guess.feedback(), "Correct!");
  });

});
