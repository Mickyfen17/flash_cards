import { expect, assert } from 'chai';
import Guess from "../scripts/guess";

describe("testing guess constructor", () => {

  it("guess shoukd be a function", () => {
    assert.isFunction(Guess);
  });

});
