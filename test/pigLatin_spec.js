"use strict";

const c = require("../pigLatin")

// brings in the assert module for unit testing
const assert = require("assert");

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
describe("#pigLatin()", () => {
  it("should translate a simple word", () => {
    assert.equal(c.pigLatin("car"), "arcay");
    assert.equal(c.pigLatin("dog"), "ogday");
  });
  it("should translate a complex word", () => {
    assert.equal(c.pigLatin("create"), "eatecray");
    assert.equal(c.pigLatin("valley"), "alleyvay");
  });
  it('should attach "yay" if word begins with vowel', () => {
    assert.equal(c.pigLatin("egg"), "eggyay");
    assert.equal(c.pigLatin("emission"), "emissionyay");
  });
  it("should lowercase and trim word before translation", () => {
    assert.equal(c.pigLatin("HeLlO "), "ellohay");
    assert.equal(c.pigLatin(" RoCkEt"), "ocketray");
  });
});
