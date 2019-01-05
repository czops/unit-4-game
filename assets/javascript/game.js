$(document).ready(function() {

var RandomNumber = 1;
var PlayerSum = 0;
var PlayerGuess = 0;
//adding this so that you can jQuery the 1-4 crystal values into this variable
var CrystalValue = 0;

var Crystal1 = 0;
var Crystal2 = 0;
var Crystal3 = 0;
var Crystal4 = 0;

var Wins = 0;
var Losses = 0;

var StartGame = function(){
    //Call this function to pick out a random number and edit the HTML element
    min = Math.ceil(19);
    max = Math.floor(120);
    RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    debugger;
    $("#RandomNumber").text(RandomNumber);
    $("#PlayerSum").text(PlayerSum);
    $("#Wins").text("Wins: " + Wins);
    $("#Losses").text("Losses: " + Losses);

    //Pickout random numbers for each off the Crystals and assign the values to the crystal buttons
    
    minCrystal = Math.ceil(1);
    maxCrystal = Math.floor(12);
    Crystal1 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal;
    Crystal2 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal;
    Crystal3 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal;
    Crystal4 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal;


    $("#button-1").val(Crystal1);
    $("#button-2").val(Crystal2);
    $("#button-3").val(Crystal3);
    $("#button-4").val(Crystal4);

};


//When a crystal is pressed, call this function to update the Player Sum element by adding the crystal's random value to this Player sum number



$(".crystal").on("click", function() {
    var CrystalValue = ($(this).attr("value"));
    xtal = parseInt(CrystalValue)
    PlayerSum += xtal;

    $("#PlayerSum").text(PlayerSum);

    WinCondition();

});


var WinCondition = function(){
    //After the PlayerSum is updated, check if the Player has won or lost.
    if (PlayerSum === RandomNumber){
        debugger;
        console.log("You win!");
        PlayerSum = 0;
        Wins++;
        StartGame();
        
    }
    
    if (PlayerSum > RandomNumber) {
        debugger;
        console.log("You Lose!");
        PlayerSum = 0;
        Losses++;
        StartGame();
    }
    //Update the Wins or Loses correspondingly

};

StartGame();


});