var welcome = alert("Welcome to my game! You will be playing rock, paper, scissors against the computer. Good luck!");

var wins = 0;
var losses = 0;
var ties = 0;

var game = function() {
// user chooses r,p, s
    //ask user via pop up what choice they want and save to a variable
    var userQuestion = prompt("Please choose rock, paper, or scissors");
    var userChoice = userQuestion.toLowerCase();

// create string to hold options
    var options = ['rock', 'paper', 'scissors'];

// computer chooses r, p or a
    let computerChoice = options[Math.floor(Math.random()*3)];

// check if input is valid
    if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
        alert("Oops! I did not understand your choice. Please type 'rock', 'paper' or 'scissors'.");
    } else {
        alert(`You chose ${userChoice} and computer chose ${computerChoice}...`);
// determine winner
        let winner;
        var determineWinner = function(user, computer) {
            if (user == computer) {
                winner = 'tie';
            } else if (user == 'rock' && computer == 'paper' || user == 'paper' && computer == 'scissors' || user == 'scissors' && computer == 'rock') {
                winner = 'computer';
            } else {
                winner = 'user';
            };
        };
        determineWinner(userChoice, computerChoice);
// display winner to user
        if (winner == 'tie') {
            alert("It's a tie!");
            ties ++;
        } else if (winner == 'computer') {
            alert("Computer won 😢");
            losses ++;
        } else {
            alert("Congratulations! You won!");
            wins ++;
        };     
// show statistics to user 
        alert(`Here are your statistics. 
        Wins: ${wins};
        Losses: ${losses};
        Ties: ${ties}`);
    };

//asks to play again 
    var playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        game();
    } else {
        alert("Thanks for playing!");
    };
}

game();

