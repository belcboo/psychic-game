/* Declaring variables */

var wins = 0; /* Stores wins of the user */
var losses = 0; /* Store loses of user/wins of the system */
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; /* Store the vales that the system will pick random */
var guess = 9; /* Counter set to 9, each run will substrac 1 */
var chain = ""; /* Chain to store the letters typed by user */

function status(){
    document.getElementById("wins").innerHTML = "Wins: " + wins; // Print wins displaying the new value
    document.getElementById("losses").innerHTML = "Losses: " + losses;  // Print wins displaying the new value 
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guess; //Print guesses left
    document.getElementById("chain").innerHTML = "Your guesses so far: " + chain; // Print chain without any chars 
}

function reset(){
    guess = 9; // Reset counter to 9 
    chain = ""; // Reset chain to ""  
}

/* This function will be triggered each time the user press a key */
document.onkeyup = function (event) {

    var userInput = event.key.toLowerCase(); /* Assign the key entered by user as value and convert it to lowercase */
    var pyschic = abc[Math.floor(Math.random() * abc.length)]; /* Assign a random value to psychic */
 
    guess -= 1; /* Decreases the counter to validate winner */
    chain = chain + event.key + ", "; /* Add's letters entered by user to create a chain and display user guesses */
    status();

    if (pyschic === userInput) { /* If user guesses the system random letter then: */
        wins++; /* Adds one to var wins */
        reset();
        status();
    }
    else if (guess === 0) { /* Validate if user lose */
        losses++; /* Adds one to var losses */
        reset();
        status();
    }
}