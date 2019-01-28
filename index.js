// Bitcoin Hangman v0.01 for Node.js Server

//Prompts the user for each guess and keeps track of the user's remaining guesses

//Require
//=========================
var Word = require("./word");
var inquirer = require("inquirer");

//Main
//=========================
var wins = 0;
var losses = 0;
var lives = 9;
main(lives, wins, losses);

//Functions
//=========================



function main() {
    var coins = ["bitcoin", "ether", "xrp", "lumens", "eos", "litecoin", "bcash", "iota", "cardano", "monero", "tether", "tron", "dash", "neo", "nem", "tezos", "zcash", "decred", "waves", "status", "dragonchain"]
    var select = coins[Math.floor(Math.random() * coins.length)];
    //winning string

    var arrLetters = select.split("");
    var secret = arrLetters.join("");
    console.log("Secret: " + secret);
    var numBlanks = arrLetters.length;
    var hangman = [];
    var blanks = [];
    var correct = [];
    for (var i = 0; i < numBlanks; i++) {
        blanks.push("_");
        hangman.push("");

    };
    hangman = arrLetters.join(" ");
    blanks = blanks.join(" ");

    var wordObj = new Word(select);
    // console.log("                       ");
    // console.log("                       ");
    console.log("$$$$$$$$$$$$$$$$$$$$$$$");
    console.log("--- Bitcoin Hangman ---");
    console.log("=======================");
    console.log("                       ");
    console.log("Hangman: " + hangman);
    console.log("Blanks_: " + blanks);
    var workflow = [
        {
            type: "input",
            message: "Guess Coin",
            default: "Guess a Letter",
            name: "guess"
        },
        {
            type: "input",
            name: "letterInq",
            when: function (answers) {
                Word();
                //HINT: If you name your letter's display function toString, JavaScript 
                //will call that function automatically whenever casting that object to a 
                 //string (check out this example: https://jsbin.com/facawetume/edit?js,console)
                // console.log(word);
                var guesses = [];
                guesses.push(answers.guess)
                console.log("Guesses: " + guesses);
                console.log("Your Guess: " + answers.guess);
                lives--;
                if (lives <= 0) {
                    console.log("Game Over");
                    process.exit(1);
                }
                else if
                    (secret = correct) {
                    console.log("You Win!");
                    process.exit(1);
                };
            }
        }];


wordObj.return();

inquirer.prompt(workflow).then((guesses, answers) => {
    console.log(wordObj);
    // console.log(JSON.stringify(hang, null, '  '));


});
}






