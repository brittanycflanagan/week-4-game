//Global Variables
var winningNumber = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var userNumber = 0;
var numberOfWins = 0;
var numberOfLosses = 0;


// Global Functions
function checkForWin () {
    if (userNumber === winningNumber) {
        console.log ("you win!");
        numberOfWins++;
        $("#wins").text(numberOfWins);
        resetGame();

    } else if (userNumber > winningNumber) {
        console.log ("you loss!");
        numberOfLosses++;
        $("#losses").text(numberOfLosses);
        resetGame()

    }
}

function getRandomNumber() {
    return Math.floor((Math.random() * 12) + 1);
}

function resetGame() {
    userNumber = 0;

    $("#user-number").text(userNumber);
    winningNumber = Math.floor((Math.random() * 120) + 19);
    $("#winning-number").text(winningNumber);
    console.log(winningNumber);

    crystal1 = getRandomNumber();
    console.log ("crystal1: "+crystal1);
    crystal2 = getRandomNumber();
    console.log ("crystal2: "+crystal2);
    crystal3 = getRandomNumber();
    console.log ("crystal3: "+crystal3);
    crystal4 = getRandomNumber();
    console.log ("crystal4: "+crystal4);
    
}

// pick a random number for each crystal & for the winning number
 $(document).ready(function() {
    $("#user-number").text(userNumber);
    winningNumber = Math.floor((Math.random() * 120) + 19);
    $("#winning-number").text(winningNumber);
    console.log(winningNumber);

    crystal1 = getRandomNumber();
    console.log ("crystal1: "+crystal1);
    crystal2 = getRandomNumber();
    console.log ("crystal2: "+crystal2);
    crystal3 = getRandomNumber();
    console.log ("crystal3: "+crystal3);
    crystal4 = getRandomNumber();
    console.log ("crystal4: "+crystal4);

    clickCrystal(crystal1, "crystal1");
    clickCrystal(crystal2, "crystal2");
    clickCrystal(crystal3, "crystal3");
    clickCrystal(crystal4, "crystal4");
}); 

// when you click on a crystal, give it the value of a random number // Create a For Loop After?
function clickCrystal (value, id) {
    $("#"+id).click(function(event){
        userNumber = value + userNumber;
        $("#user-number").text(userNumber);
        checkForWin();
    });
}


