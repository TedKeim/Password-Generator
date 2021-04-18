var generateBtn = document.querySelector("#generate");

function generatePassword() {   // this section of code uses prompts to select criteria for a random password
var random ="";
var newPass = "";
var length = "";
var length = Number(prompt('How many characters would you like your password to contain?'));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8-128 characters. How many characters would you like your password too contain?"));
var symbols = confirm("Click OK to confirm including special characters?");
var numbers = confirm("Click OK to confirm including numeric characters."); 
var lowers = confirm("Click OK to confirm lowercase letters.");
var uppers = confirm("Click OK to confirm uppercase letters.");

while (!uppers && !lowers && !numbers && !symbols) {  // this section of code will bring up an alert box if there is no criteria selected
  alert("You must select at least one character type.");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

if (uppers == true) {
  charUppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

else {
  charUppers =""
}

if (lowers == true) {
  charLowers = "abcdefghijklmnopqrstuvwxyz"
}
else {
  charLowers = ""
}

if (numbers == true) {
  Numbers = "0123456789"
}
else {
  Numbers = ""
}

if (symbols == true) {
  charSymbols = "!@#$%^&*()_=+-[]:';<>?/.,{}"
}
else {
  charSymbols = ""
}
random = (charUppers + charLowers + Numbers + charSymbols);  

for (var i = 0; i < length; ++i) {  // for loop that randomizes all of the letters, numbers, and symbols
  newPass += random.charAt(Math.floor(Math.random() * random.length));
}

window.alert (newPass);  //alert window that shows the new password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
