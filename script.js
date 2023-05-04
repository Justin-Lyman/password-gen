
document.addEventListener("DOMContentLoaded", function() {
  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  // Generate password function
  function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to contain?");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8 and 128 characters");
      return "";
    }

    var includeLowercase = confirm("Click OK to confirm including lowercase characters.");
    var includeUppercase = confirm("Click OK to confirm including uppercase characters.");
    var includeNumbers = confirm("Click OK to confirm including numeric characters.");
    var includeSpecial = confirm("Click OK to confirm including special characters.");

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
      alert("You must select at least one character type!");
      return "";
    }

    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    var possibleChars = "";
    if (includeLowercase) {
      possibleChars += lowercaseChars;
    }
    if (includeUppercase) {
      possibleChars += uppercaseChars;
    }
    if (includeNumbers) {
      possibleChars += numberChars;
    }
    if (includeSpecial) {
      possibleChars += specialChars;
    }

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * possibleChars.length);
      password += possibleChars[randomIndex];
    }

    return password;
  }
});