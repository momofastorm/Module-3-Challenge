// Assignment code here
/* button info and assignment code */
//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Place functions into an object
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


const length = +lengthEl.value;


//Generate functions
function getRandomLower(){
return String.fromCharCode ((Math.floor(Math.random() * 26) + 97));
}
function getRandomUpper(){
  return String.fromCharCode ((Math.floor(Math.random() * 26) + 65));
  }

  function getRandomNumber(){
    return String.fromCharCode ((Math.floor(Math.random() * 10) + 48));
  }

  function getRandomSymbol(){
    const symbols ='!@#$^&*()[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }


// Write password to the #password input

function generatePassword() {
  var userLength = prompt(
    "How many characters would you like your password to be? Pick a number between 8-128."
    
  );
  }
  var userSymbol = prompt(
    "Do you want to include special characters? For example:!, @, #, $, %, &,  =, ?, >, <. Enter Y or N:"
    );
    
    var userLowerCase = prompt(
      "Do you want to include lowercase letters? Enter Y or N:"
      );

      var userUpperCase = prompt(
        "Do you want to include uppercase letters? Enter Y or N:"
        ); 
        var userNumber = prompt(
          "Do you want to include numbers? Enter Y or N:"
          );   
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  
  const length = +lengthEl.value;
  const hasSymbol = userSymbol === Y;
  const hasLower = userLowerCase === Y;
  const hasUpper = userUpperCase === Y;
  const hasNumber = userNumber === Y;
 

  resultEl.innerText = generatePassword(
    hasSymbol, 
    hasLower, 
    hasUpper, 
    hasNumber, 
    length
    );
        };


//Generate password function
function generatePassword(lower, upper, number, symbol, length) {

  let generatedPassword ='';

  const typesCount = lower + upper + number + symbol;
  
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  
  item => Object.values(item)[N]

  for (let i = 0;i < length += typesCount) {
    typesArr.forEach(type => {
     const funcName = Object.keys(type)[0];
     
     generatedPassword += randomFunc [funcName]();
    })

  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}



  

  

  




