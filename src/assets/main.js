let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
  let input = document.getElementById('user-guess');

  // TODO Only set the answer and attempt hidden inputs when they aren't already set
  if (attempt.value.length == 0 || answer.value.length == 0)
    setHiddenFields();

  // TODO Validate input
  if (validateInput(input)) {
    attempt.value++;
  } else {
    return false;
  }

  if (getResults(input))
    setMessage('You Win! :)');
  else if (!getResults(input) && attempt.value >= 10) {
    setMessage('You Lose! :(');
  } else {
    setMessage('Incorrect, try again.');
  }
}

// implement new functions here

// TODO Set answer variable to a random 4 char long number between 0000 and 9999
function setHiddenFields() {
  attempt.value = "0";

  // NOTE Math.random() generate a number between 0 to 1 (not incl. 1)
  answer.value = Math.floor((Math.random() * 10000)).toString();

  // TODO Make sure the hidden input answer's value is exactly 4 characters long
  while (answer.value.length != 4) {
    var numOfZeros = 4 - answer.value.length;
    for (var i = 0; i < numOfZeros; i++) {
      answer.value = "0" + answer.value;
    }
  }
}

// TODO Set message label to what is provided to parameter
function setMessage(msg) {

  // set .innerHTML not .value
  document.getElementById('message').innerHTML = msg;
}

// TODO Create validateInput function
function validateInput(guessLen) {
  if (guessLen.length == 4)
    return true;
  else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

// TODO Create getResults function
function getResults(input) {
  var charGuessedCorrect = 0;

  var hintOutput = '';

  // case 1: char matches
  // case 2: char does not match, char exists in answer
  // case 3: char does not match, char not in answer
  for (var i=0; i<4; i++) {
    switch (true) {
      case input.toString().charAt(i) == answer.value.charAt(i):
        hintOutput += '<span class="glyphicon glyphicon-ok"></span> ';
        charGuessedCorrect++;
        break;
      case input.toString().charAt(i).indexOf(answer.value) > -1:
        hintOutput += '<span class="glyphicon glyphicon-transfer"></span> ';
        break;
      case input.toString().charAt(i).indexOf(answer.value) == -1:
        hintOutput += '<span class="glyphicon glyphicon-remove"></span> ';
        break;
    }
  }

  hintOption = '<div>' + hintOption + '</div>'

  // TODO add user-guess to our results
  document.getElementById("results").innerHTML = '<div class="row"><span class="col-md-6">' + hintOutput + '</span><div class="col-md-6">';

  // TODO Check for correct guess
  return charGuessedCorrect == 4;
}
