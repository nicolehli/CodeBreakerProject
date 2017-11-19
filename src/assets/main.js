let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
  let input = document.getElementById('user-guess');

  // TODO Only set the answer and attempt hidden inputs when they aren't already set
  if (attempt.value.length == 0 || answer.value.length == 0) {
    setHiddenFields();
  }


  // TODO Validate input
  if (validateInput(input.value)) {
    attempt.value++;
  } else {
    return false;
  }

  if (getResults(input.value)) {
    setMessage('You Win! :)');
    showAnswer(true);
    showReplay();
  } else if (attempt.value >= 10) {
    setMessage('You Lose! :(');
    showAnswer(false);
    showReplay();
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
function validateInput(inputValue) {
  if (inputValue.toString().length == 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

// TODO Create getResults function
function getResults(inputValue) {
  var charGuessedCorrect = 0;

  var hintOutput = " ";

  // case 1: char matches
  // case 2: char does not match, char exists in answer
  // case 3: char does not match, char not in answer
  for (var i = 0; i < 4; i++) {
    if (inputValue.toString().charAt(i) == answer.value.charAt(i)) {
      hintOutput += '<span class="glyphicon glyphicon-ok"></span> ';
      charGuessedCorrect++;
    } else if (answer.value.indexOf(inputValue.toString().charAt(i)) > -1) {
      hintOutput += '<span class="glyphicon glyphicon-transfer"></span> ';
    } else {
      hintOutput += '<span class="glyphicon glyphicon-remove"></span> ';
    }
  }

  hintOutput = '<div>' + hintOutput + '</div>'

  // TODO add user-guess to our results
  document.getElementById("results").innerHTML +=
    '<span class="col-md-6">' + inputValue + '</span>' +
    '<span class="col-md-6">' + hintOutput + '</span>';

  // TODO Check for correct guess
  return charGuessedCorrect == 4;
}

// TODO create showAnswer
function showAnswer(boolWin) {
  document.getElementById('code').innerHTML = answer.value;
  // if (boolWin)
  //   document.getElementByClassName('code') = ' success';
  // else {
  //   document.getElementByClassName('code') = ' failure';
  // }
}

// TODO create showReplay
function showReplay() {
  document.getElementById("guessing-div").style.display = none;
  document.getElementById("replay-div").style.display = block;
}
