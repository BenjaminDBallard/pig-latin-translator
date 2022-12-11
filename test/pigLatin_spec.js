"use strict";

const c = require("../pigLatin")

// brings in the assert module for unit testing
const assert = require("assert");
// brings in the readline module to access the command line
//const readline = require("readline");
// use the readline module to print out to the command line
//const rl = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout,
//});

/*
//checks if charicter is a vowel
function isVowel(char) {
  if (char.length == 1) {
    let vowels = new Array("a", "e", "i", "o", "u");
    let isVowel = false;

    for (let e in vowels) {
      if (vowels[e] == char) {
        isVowel = true;
      }
    }

    return isVowel;
  }
}

//sends all special charicters to end of string
function moveAllSC(str) {
  // Take length of string
  let len = str.length;

  // regular expression to check
  // char is special or not.
  let regx = new RegExp("[a-zA-Z0-9\\s+]");

  // traverse string
  let res1 = "",
    res2 = "";
  for (var i = 0; i < len; i++) {
    var c = str[i].toString();
    // check char at index i is a special char
    if (regx.test(c)) res1 = res1 + c;
    else res2 = res2 + c;
  }
  return res1 + res2;
}

//translates individual words
const pigLatin = (word) => {
  let formattedWord = word.toLowerCase().trim();
  let splitValue = formattedWord.split("");
  if (isVowel(splitValue[0]) === true) {
    splitValue.push("yay");
    let completedWordVowel = splitValue.join("");
    return moveAllSC(completedWordVowel);
  } else if (!!word.match(/[aeiou]/gi, "") === false) {
    splitValue.push("ay");
    let completedWordCons = splitValue.join("");
    return moveAllSC(completedWordCons);
  } else {
    for (let i = 0; i < word.length; i++) {
      if (isVowel(splitValue[i]) === false) {
        let pull = splitValue.shift();
        splitValue.push(pull);
        i--;
      } else {
        splitValue.push("ay");
        let completedWord = splitValue.join("");
        return moveAllSC(completedWord);
      }
    }
  }
};

//seperates multiword phrases for further translation
const phraseTrans = (phraseInput) => {
  let splitPhrase = phraseInput.split(" ");
  let completedPhrase = [];
  for (a = 0; a < splitPhrase.length; a++) {
    completedPhrase.push(pigLatin(splitPhrase[a]));
  }
  return completedPhrase.join(" ");
};

//starts and returns final product of piglatin translation
const loadTranslation = () => {
  let input = document.getElementById("user-input").value;
  let phrase = input.split(" ");
  let length = phrase.length;
  if (length > 1) {
    document.getElementById("display-element").innerHTML = phraseTrans(input);
  } else if ((length = 1)) {
    document.getElementById("display-element").innerHTML = pigLatin(input);
  }
};

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question("word ", (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
};
*/
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


// // **********
// //   HINTS
// // **********

// // break your code into pieces and focus on one piece at a time...
// // 1. if word begins with a vowel send to one function: adds "yay"
// // 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// // 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
