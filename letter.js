//Display an underlying character or a blank placeholder (such as an underscore), 
//depending on whether (No Required files)
//or not the user has guessed the letter. That means the constructor 
//should define: A string value to store the underlying character for the letter
//A boolean value that stores whether that letter has been guessed yet


function Letter(isGuessed, input, blank) {
    this.isGuessed = isGuessed,
        this.guess = input,
        this.blank = blank,
        this.return = function () {
            //A function that returns the underlying character if the letter has been 
            //guessed, or a placeholder (like an underscore) if the letter has not been 
            //guessed 
            
            // if(this.guess == )
            
        }
    this.checkGuess = function () {
        //A function that takes a character as an argument and checks it 
        //against the underlying character, updating the stored boolean value to 
        //true if it was guessed correctly
    }
}

module.exports = Letter;