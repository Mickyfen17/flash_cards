import { expect, assert } from 'chai';
import CardGenerator from "../scripts/card-generator";
import Card from "../scripts/card";
import fs from 'fs';

const words = fs.readFileSync('./cards.txt', "utf8").split("\n");

describe("testing card generator constructor", () => {

  it("card generator should be a function", () => {
    assert.isFunction(CardGenerator);
  });

  it("cardGenerator cards should hold an array", () => {
    let cardGenerator = new CardGenerator({ cards: words });

    cardGenerator.txtSpliter(words);
    assert.isArray(cardGenerator.cards);
  });

  it("cardGenerator txtSpliter should return an array", () => {
    let cardGenerator = new CardGenerator({ cards: words });

    expect(cardGenerator.txtSpliter(words)).to.be.instanceof(Array);
  });

  it("cardGenerator should split the txt file, add question and answer into Card, pass Cards into cardGenerator.cards and check if they exist", () => {
    let cardGenerator = new CardGenerator({ cards: words });

    expect(cardGenerator).to.have.property("cards").that.is.an("array").with.deep.property("0").that.is.an("object");
  });

  it("cardGenerator should split the txt file, add question and answer into Card, pass Cards into cardGenerator.cards and check for keys question and answer", () => {
    let cardGenerator = new CardGenerator({ cards: words });

    expect(cardGenerator).to.have.property("cards").that.is.an("array").with.deep.property("1").that.is.an("object").with.deep.property("question");
    expect(cardGenerator).to.have.property("cards").that.is.an("array").with.deep.property("1").that.is.an("object").with.deep.property("answer");
  });

  it("cardGenerator.cards should hold an array of 4 question cards passed in from cards.txt", () => {
    let cardGenerator = new CardGenerator({ cards: words });

    expect(cardGenerator.cards).to.have.lengthOf(4);
  });


});
