var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function promptMe(){
  var passwordLength = prompt('How many characters would you like your password to contain?');
  alert (passwordLength);
  if (confirm("Click OK to confirm including special characters?")) {
      if (confirm( "Click OK to confirm including numeric characters.")) {
          if (confirm("Click OK to confirm lowercase letters.")) {
              if (confirm("Click OK to confirm uppercase letters.")) {
              }
          }
      }
  } else {
    txt = "User cancelled the prompt.";
  }
  }

function makeid(length) {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
    return result.join('');
  }

  console.log(makeid(128));
