import { expect, assert } from 'chai';
import Round from "../scripts/round";
import Deck from "../scripts/deck";
import Card from "../scripts/card";

describe("testing round constructor", () => {

  it("round should be a function", () => {
    assert.isFunction(Round);
  });

});
