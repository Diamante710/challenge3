var generateBtn = document.querySelector("#generate");
var numeric = "0123456789";
var specialCharacters = "`~!@#$%^&*()_-=+[]{}';:,<.>/?";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";

function generatePassword() {
  var generatedPassword = "";
  var passwordLength = prompt("How many characters do you want your password to contain?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Value entered incorrect. Please re enter a value between 8 and 128.");
    return;
  }

  var checkNumeric = confirm("Do you want password to include numbers?");
  var checkSpecialcharacters = confirm("Do you want password to include special characters?");
  var checkLowercase = confirm("Do you want password to include lowercase letters?");
  var checkUppercase = confirm("Do you want password to include upercase letters?");

  if (checkNumeric === false && checkSpecialcharacters === false && checkLowercase === false && checkUppercase === false) {
    alert("Must choose at least one character type to generate password.");
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    if (checkNumeric === true && generatedPassword.length < passwordLength) {
      var postion = Math.floor(Math.random() * numeric.length);
      generatedPassword = generatedPassword + numeric[postion];
    }
    if (checkSpecialcharacters === true && generatedPassword.length < passwordLength) {
      var postion = Math.floor(Math.random() * specialCharacters.length);
      generatedPassword = generatedPassword + specialCharacters[postion];
    }
    if (checkLowercase === true && generatedPassword.length < passwordLength) {
      var postion = Math.floor(Math.random() * lowercase.length);
      generatedPassword = generatedPassword + lowercase[postion];
    }
    if (checkUppercase === true && generatedPassword.length < passwordLength) {
      var postion = Math.floor(Math.random() * uppercase.length);
      generatedPassword = generatedPassword + uppercase[postion];
    }
  }
  return;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== undefined) {
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

generateBtn.addEventListener("click", writePassword);
