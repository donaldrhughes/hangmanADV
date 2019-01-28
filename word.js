var input = process.argv[2];
var Letter = require("./letter");

var letterObj = new Letter(false, input, "_");
var guessed = [];
guessed.push(letterObj);
Letter();

//object representing the current word the user 
var word = function Word(word) {
    //array of new Letter objects
    this.letters = guessed,
        this.guess = letterObj,
        this.word = word,
        this.return = function () {
            //A function that returns a string representing the word. This should call 
            //the function on each letter object (the first function defined in Letter.js) 
            //that displays the character or an underscore and concatenate those together.
            // console.log("this.return");
        }
    this.call = function () {
        //A function that takes a character as an argument and calls the guess function 
        //on each letter object (the second function defined in Letter.js)
    }
}


module.exports = word;
