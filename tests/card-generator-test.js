import { expect, assert } from 'chai';
import CardGenerator from "../scripts/card-generator";
import fs from 'fs';

const words = fs.readFileSync('./cards.txt', "utf8").split("\n");

describe("testing card generator constructor", () => {

  it("card generator should be a function", () => {
    assert.isFunction(CardGenerator);
  });

});
