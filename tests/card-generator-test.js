import { expect, assert } from 'chai';
import CardGenerator from "../scripts/card-generator";

describe("testing card generator constructor", () => {

  it("card generator should be a function", () => {
    assert.isFunction(CardGenerator);
  });

});
