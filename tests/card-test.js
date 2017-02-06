import { expect, assert } from 'chai';
import card from "../scripts/card";

describe("testing card constructor", () => {

  it("card should be a function", () => {
    assert.isFunction(card);
  });

});
