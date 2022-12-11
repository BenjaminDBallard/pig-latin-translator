"use strict";

const pigLatin = require("./pigLatin")

// brings in the readline module to access the command line
const readline = require("readline");
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question("word> ", (answer) => {
    console.log(pigLatin.pigLatin(answer));
    getPrompt();
  });
};

getPrompt()
