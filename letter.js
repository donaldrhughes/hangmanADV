//Display an underlying character or a blank placeholder (such as an underscore), 
//depending on whether (No Required files)
//or not the user has guessed the letter. That means the constructor 
//should define: A string value to store the underlying character for the letter
//A boolean value that stores whether that letter has been guessed yet


function Letter(secret, input) {
    this.isGuessed = false,
        this.guess = input,
        this.blank = true,
        this.return = function () {
            //A function that returns the underlying character if the letter has been 
            //guessed, or a placeholder (like an underscore) if the letter has not been 
            //guessed 
         
                //Check if letters in word
            
              
            
                for (var i=0; i < secret.length; i++) {
                    if (secret[i] == this.guess) {
                        this.isGuessed = true;
                        
                    }
                }
                if (this.isGuessed) {
                    for (var i=0; i < secret.length; i++) {
                        if (secret[i] == this.guess) {
                            correct[i] = this.guess;
                        }
                    }
                }
                else {
                   console.log("Last Else")
                
                }
            
            
        }
    this.checkGuess = function () {
        //A function that takes a character as an argument and checks it 
        //against the underlying character, updating the stored boolean value to 
        //true if it was guessed correctly
    }
}

module.exports = Letter;