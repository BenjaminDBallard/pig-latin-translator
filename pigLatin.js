// See https://www.geeksforgeeks.org/how-to-share-code-between-node-js-and-the-browser/
(function(exports) {

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

  // Export the function to exports
  // In node.js this will be exports
  // the module.exports
  // In browser this will be function in
  // the global object sharedModule
  exports.pigLatin = pigLatin;
  exports.phraseTrans = phraseTrans;

})(typeof exports === 'undefined'?
  this['pigLatin']={}: exports);
