
// first thing I will do is set out all the posssbile choices that are right
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" , "n" , "o" , "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// then, we will start our variable for the score, and how many guesses I have left. Notice that how many guesses left starts with 10, becasue this will go down

var win = 0;
var loss = 0;
var guessLeft = 10;
//  add a variable for guessed letters
var guessedLetters = []

	// The computer will choose a random letter now
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log("Computer guesses: " + computerGuess);

// Now we add the code that records what happens when you press a key

// This will run when you press a key
document.onkeyup = function (event) {
	// which key was pressed?
	var `userGuess` = event.key;


	// THe below calculates the scores that will be on the scoreboard. For the wins and losses, it is just +1, but for guesses left, it is minus 1
	if (userGuess === computerGuess) {
		win++;
		alert("You won the game!");
		resetgame();

	} else {
		guessLeft = guessLeft - 1;
		guessedLetters.push(userGuess);
	}

	if (guessLeft === 0) {
		loss++
		alert("You lose the game!!!!");
		resetgame();
	}

	// now for the display on the screen
	var gameboard =
		"<h1>Guess what letter I am thinking of. . . </h1>" +
		"<p>You chose: " + userGuess + "</p>" +
		"<p>wins: " + win + "</p>" +
		"<p>losses: " + loss + "</p>" +
		"<p>Guesses Left: " + guessLeft + "</p>" +
		"Letters guessed: " + guessedLetters + "</p>";


	document.querySelector("#thegame").innerHTML = gameboard;

	function resetgame() {
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log("Computer guesses: " + computerGuess);
	
		guessLeft = 10;
		//  add a variable for guessed letters
		guessedLetters = []
	}
}





