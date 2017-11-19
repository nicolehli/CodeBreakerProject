let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    // TODO add functionality to guess function here
    if (attempt.toString().length == 0 || answer.toString().length == 0)
      setHiddenFields();

}

// implement new functions here

// TODO Set answer variable to a random 4 char long number between 0000 and 9999
function setHiddenFields() {
  attempt.value = 0;

  // NOTE Math.random() generate a number between 0 to 1 (not incl. 1)
  answer.value = Math.floor((Math.random() * 10000));

  while (answer.toString().length != 4) {
    var numOfZeros = 4 - answer.toString().length;
    for(var i = 0; i < numOfZeros; i++){
      answer.value = "0" + answer.value;
    }
  }
}

// TODO Set message label to what is provided to parameter
function setMessage(msg) {

  // set .innerHTML not .value
  document.getElementById('message').innerHTML = msg;
}

// TODO
function validateInput(guessLen){
  if (guessLen.toString().length == 4)
    return true;
  else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}
