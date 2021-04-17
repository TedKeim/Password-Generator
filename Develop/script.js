var generateBtn = document.querySelector("#generate");
var random ="";
var newPass = "";
var length = "";

function generatePassword() {
var length = Number(prompt('How many characters would you like your password to contain?'));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8-128 characters. How many characters would you like your password too contain?"));
var symbols = confirm("Click OK to confirm including special characters?");
var numbers = confirm("Click OK to confirm including numeric characters."); 
var lowers = confirm("Click OK to confirm lowercase letters.");
var uppers = confirm("Click OK to confirm uppercase letters.");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type.");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

if (lowers == true) {
  charLowers = "abcdefghijklmnopqrstuvwxyz"
}

else {
  charLowers =""
}

if (uppers == true) {
  charUppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
else {
  charUppers = ""
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
random = (charLowers + charUppers + Numbers + charSymbols);

for (var i = 0; i < length; ++i) {
  newPass += random.charAt(Math.floor(Math.random() * random.length));
}

window.alert (newPass);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// function makeid(length) {
//   var result = [];
//   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
//   }
//     return result.join('');
//   }
  
  
  // console.log(makeid(123));
