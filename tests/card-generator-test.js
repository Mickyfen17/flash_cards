import { expect, assert } from 'chai';
import CardGenerator from "../scripts/card-generator";
import Card from "../scripts/card";
import fs from 'fs';

const words = fs.readFileSync('./cards.txt', "utf8").split("\n");

const txtSpliter = txtArray => {
  return words.map( card => {
    let cardSplit = card.split(",");
    let txtQuestion = cardSplit[0];
    let txtAnswer = cardSplit[1];
    return new Card({ question: txtQuestion, answer: txtAnswer });
  });
};

describe("testing card generator constructor", () => {

  it("card generator should be a function", () => {
    assert.isFunction(CardGenerator);
  });

  it("cardGenerator cards should hold an array", () => {
    let cardGeneratorArr = txtSpliter(words);
    let cardGenerator = new CardGenerator({ cards: cardGeneratorArr });

    assert.isArray(cardGenerator.cards);
  });

  it("cardGenerator should split the txt file, add question and answer into Card, pass Cards into cardGenerator.cards and check if they exist", () => {
    let cardGeneratorArr = txtSpliter(words);
    let cardGenerator = new CardGenerator({ cards: cardGeneratorArr });

    expect(cardGenerator).to.have.property("cards").that.is.an("array").with.deep.property("0").that.is.an("object");
  });

});
