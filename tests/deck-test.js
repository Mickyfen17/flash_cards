import { expect, assert } from 'chai';
import Deck from "../scripts/deck";

describe("testing deck constructor", () => {

  it("deck should be a function", () => {
    assert.isFunction(Deck);
  });
});
