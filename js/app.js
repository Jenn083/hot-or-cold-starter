function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
  $('.js-what').click(function() {
    $('.overlay').fadeIn(1000);
  });

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
  $('.js-close').click(function(){
    $('.overlay').fadeOut(1000);
  });
}

function handleNewGame() {
  $('.js-new-game').click(function () {
    numGuess = 0;//reset to zero
    $('.js-guess-count').html(numGuess);
    resetGuess ='Enter a number between 0 and 100';
    $('#js-user-guess').val(resetGuess);
    randomNumber;
    $('#guessList').html('');
  });

}

function handleSubmit() {

  $('#js-guess-submit').click(function(event) {
    event.preventDefault();
    numGuess ++;
    var inputVal = $('#js-user-guess').val();
    if(inputVal == '' || isNaN(inputVal) || inputVal<0 || inputVal>100) {
      alert('Please enter a number from 0-100');
    }
    $('.js-guess-count').text(numGuess);
    var appendGuess = $('#js-user-guess').val();
    var theDifference = Math.abs(appendGuess-randomNumber);
    $('#guessList').append('<li>' + appendGuess + '</li>');
    if(theDifference>=50) {
      $('#guessList').append('<li> ice cold</li>');
      console.log('ice cold');
    } else if(theDifference>=30 && theDifference<50) {
      console.log('cold');
      $('#guessList').append('<li> cold </li>');
    } else if(theDifference>=20 && theDifference<30) {
      $('#guessList').append('<li>warm</li>');
      console.log('warm');
    } else if(theDifference>=10 && theDifference<20) {
      $('#guessList').append('<li>hot</li>');
      console.log('hot');
    } else if(theDifference>=1 && theDifference<10) {
      console.log('very hot');
      $('#guessList').append('<li>very hot</li>');
    }else if(theDifference===0) {
      $('#guessList').append('<li>you guessed it!</li>');
    }

  });
}

var numGuess= 0;
var resetGuess = 'Enter a number between 0 and 100';
var randomNumber = Math.floor(Math.random()*100)+1;

// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
$(document).ready(function(){
  handleInstructionsModal();
  handleNewGame();
  handleSubmit();


});
