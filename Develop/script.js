var generateBtn = document.querySelector("#generate");

// function generatePassword() {      // added this... explain why //
  // return 'password';
// }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function promptMe(){
  var userChoice = prompt('How many characters would you like your password to contain?');
  alert (userChoice);

}
