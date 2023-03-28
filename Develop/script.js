//Commands to make the btn work.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//Possibilities of lowercase, uppercase, number and special caracthers.

var characterLength = 8;
var possibleCharacters = [];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var NumberCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var SpecialCharacters = ['!','@','#','$','%','*','_'];

// Once I click the buttom, it calls the writePassword function that generates the prompts.
function writePassword() {
  var validPrompt = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if (validPrompt) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }

}

function getPrompts(){
  
  const Min_password_length = 8;
  const Max_password_length = 128;

  characterLength = parseInt(prompt("How many caracthers do you need? (choose between 8-128)"));
    if(isNaN(characterLength) || characterLength < Min_password_length || characterLength > Max_password_length) {
      alert("You need to pick between 8-128. Please, try again!");
      return false;
  }

  if (confirm("Should I include lowercase caracthers?")) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }

  if (confirm("Should I include uppercase caracthers?")) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }

  if (confirm("Should I include numbers?")) {
    possibleCharacters = possibleCharacters.concat(NumberCharacters);
  }

  if (confirm("Should I include special caracthers?")) {
    possibleCharacters = possibleCharacters.concat(SpecialCharacters);
  }

  return true;

}

// Once the prompts were answered, password is generated.

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
     var randomLetter = Math.floor(Math.random () * possibleCharacters.length)
     password += possibleCharacters[randomLetter];
   }
   return password;
 }



