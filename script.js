// Assignment code here
/* button info and assignment code */
//DOM elements
// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');



//Generate functions
function getRandomLower() {
  return String.fromCharCode((Math.floor(Math.random() * 26) + 97));
}
function getRandomUpper() {
  return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
}

function getRandomNumber() {
  return String.fromCharCode((Math.floor(Math.random() * 10) + 48));
}

function getRandomSymbol() {
  const symbols = '!@#$^&*()[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// Write password to the #password input

function generatePassword() {

  function askLength() {
    let result = prompt(
      "How many characters would you like your password to be? Pick a number between 8-128."
    );

    // validate the prompt
    if (!JSON.parse(result)) {
      askLength();
    }

    if (JSON.parse(result)) {
      let parsedResult = JSON.parse(result);
      if (parsedResult < 8 || parsedResult > 128) {
        askLength();
      }
    }

    return JSON.parse(result);

  }

  var userLength = askLength();

  var userSymbol = confirm(
    "Do you want to include special characters? If yes click Ok. If no click Cancel.  For example:!, @, #, $, %, &,  =, ?, >, <."
  );

  var userLowerCase = confirm(
    "Do you want to include lowercase letters? If yes click Ok. If no click Cancel."
  );

  var userUpperCase = confirm(
    "Do you want to include uppercase letters? If yes click Ok. If no click Cancel."
  );
  var userNumber = confirm(
    "Do you want to include numbers?  If yes click Ok. If no click Cancel."
  );

  let generatedPassword = '';

  let criteriaArray = [];
  let callbackMap = {
    'lowercase': getRandomLower,
    'uppercase': getRandomUpper,
    'numbers': getRandomNumber,
    'symbols': getRandomSymbol,
  };

  if (userSymbol) {
    criteriaArray.push('symbols');
  }
  if (userLowerCase) {
    criteriaArray.push('lowercase');
  }
  if (userUpperCase) {
    criteriaArray.push('uppercase');
  }
  if (userNumber) {
    criteriaArray.push('numbers');
  }

  for (let i = 0; i < userLength; i++) {
    let idx = Math.floor(Math.random() * criteriaArray.length); // returns idx of a value in criteria array
    let randomCharacterKey = criteriaArray[idx]; // pulls out the value at the index
    let randomCharacterCallback = callbackMap[randomCharacterKey]; // pulls out the callback from the map using the random key

    generatedPassword += randomCharacterCallback();
  }

  return generatedPassword;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













