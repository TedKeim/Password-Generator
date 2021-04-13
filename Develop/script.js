var generateBtn = document.querySelector("#generate");
var generatePassword = "randompassword";  // added "randompassword"; //

function generatePassword() {      // added this... explain why //
  return 'yourpassword';
}
// Write password to the #password input
function writePassword() {
  console.log('writing password');
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
