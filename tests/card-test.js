import { expect, assert } from 'chai';
import Card from "../scripts/card";

describe("testing card constructor", () => {

  it("card should be a function", () => {
    assert.isFunction(Card);
  });

  it("card should be a constructor", () => {
    let card = new Card({});

    expect(card).to.be.instanceof(Card);
  });

  it("card should be able to accept a question", () => {
    let card = new Card({ question: "What is the capital of Alaska?" });

    assert.equal(card.question, "What is the capital of Alaska?");
  });

  it("card should be able to accept an answer", () => {
    let card = new Card({ answer: "Juneau" });

    assert.equal(card.answer, "Juneau");
  });

});
