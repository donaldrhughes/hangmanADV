// Bitcoin Hangman v0.01 for Node.js Server
// License: (2019) Free and usable freely. Always open source for all.
// Written by: Donald R. Hughes (Twitter: drhiot)
//=======================================================================================


// Did not get completed but the practice with using constructors and integrated inquirer in node was very fullfilling!

//Prompts the user for each guess and keeps track 
//of the user's remaining guesses
//HINT: If you name your letter's display function toString, JavaScript 
//will call that function automatically whenever casting that object to a 
//string (check out this example: https://jsbin.com/facawetume/edit?js,console)

//Require
//=========================
var Word = require("./word");
var inquirer = require("inquirer");


//Global Vars
//==========================
var coins = ["bitcoin", "ether", "xrp", "lumens", "eos", "litecoin", "bcash", "iota", "cardano", "monero", "tether", "tron", "dash", "neo", "nem", "tezos", "zcash", "decred", "waves", "status", "dragonchain"]
var select = coins[Math.floor(Math.random() * coins.length)];
var arrLetters = select.split("");
var blanks = arrLetters.length;
var hangman = [];
    for (var i=0; i < blanks; i++) {
        hangman.push("_");
    }
var wins = 0;
var losses = 0;
var lives = 9;
var wordObj = new Word(select);
Word();
var workflow = [
    {
        type: "input",
        message: "Guess a letter",
        default: true,
        name: "guess1"
    },
    {
        type: "input",
        name: "letterInq",
        when: function (answers) {
            if (answers.guess1 == "a") {
                console.log(answers);

            }
            else if (lives <= 0) {
                console.log("Game Over");
                process.exit(1);
            }
            else {
                console.log("\n\n--Continue--\n\n");
            }
        }
    }];


//Main
//==========================

console.log()
wordObj.return();

inquirer.prompt(workflow).then(() => {


    console.log(wordObj);
    // console.log(JSON.stringify(hang, null, '  '));

});