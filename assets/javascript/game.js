$(document).ready(function() {

var RandomNumber = 0;
//var PlayerSum = 0;
var PlayerGuess = 0;

var Crystal1 = 0;
var Crystal2 = 0;
var Crystal3 = 0;
var Crystal4 = 0;

var Wins = 0;
var Loses = 0;

var StartGame = function(){
    //Call this function to pick out a random number and edit the HTML element
    min = Math.ceil(19);
    max = Math.floor(120);
    var RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    $("#RandomNumber").text(RandomNumber);

    //Pickout random numbers for each off the Crystals and assign the values to the crystal buttons
    
    minCrystal = Math.ceil(1);
    maxCrystal = Math.floor(12);
    var Crystal1 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal;
    var Crystal2 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal;
    var Crystal3 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal;
    var Crystal4 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal;


    $("#button-1").val(Crystal1);
    $("#button-2").val(Crystal2);
    $("#button-3").val(Crystal3);
    $("#button-4").val(Crystal4);

};


//When a crystal is pressed, call this function to update the Player Sum element by adding the crystal's random value to this Player sum number
$(".crystal").on("click", function() {
    PlayerSum += $(this).val();
$("#PlayerSum").text(PlayerSum);
});


var WinCondition = function(){
    //After the PlayerSum is updated, check if the Player has won or lost.

    //Update the Wins or Loses correspondingly

};

StartGame();


});