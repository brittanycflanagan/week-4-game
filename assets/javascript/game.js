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
        console.log ("you won!");
        numberOfWins++;
        $("#wins").text(numberOfWins);
        resetGame();

    } else if (userNumber > winningNumber) {
        console.log ("you lost!");
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


// when you click on a crystal, add it's value to the userNumber & check for win

$("#crystal1").click(function(event){
    userNumber = crystal1 + userNumber;
    $("#user-number").text(userNumber);
    console.log(crystal1);
    checkForWin();
});

$("#crystal2").click(function(event){
    userNumber = crystal2 + userNumber;
    $("#user-number").text(userNumber);
    console.log(crystal2);
    checkForWin();
});

$("#crystal3").click(function(event){
    userNumber = crystal3 + userNumber;
    $("#user-number").text(userNumber);
    console.log(crystal3);
    checkForWin();
});

$("#crystal4").click(function(event){
    userNumber = crystal4 + userNumber;
    $("#user-number").text(userNumber);
    console.log(crystal4);
    checkForWin();
});

    // Tried to merge into one function, but could not get it it work properly
    //     function clickCrystal (value, id) {
    //     $("#"+id).click(function(event){
    //         userNumber = value + userNumber;
    //         console.log(value);
    //         $("#user-number").text(userNumber);
    //         checkForWin();
    //     });
    // }

// pick a random number for each crystal & for the winning number on document load
 $(document).ready(function() {
    $("#user-number").text(userNumber);
    winningNumber = Math.floor((Math.random() * 120) + 19); //need to look at it being inclusive
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
    
  //  clickCrystal(crystal1, "crystal1");
  //  clickCrystal(crystal2, "crystal2");
  //  clickCrystal(crystal3, "crystal3");
  //  clickCrystal(crystal4, "crystal4");
    
    }); 



    