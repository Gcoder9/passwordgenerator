
    
      // Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var input = parseInt(prompt("Choose a lenght between 8 and 128"));

  if (input >= 8 && input <= 128) {
    // GOOD CODE GOES HERE
  } else {
    alert("Enter a valid number");
    return generatePassword();

  }

  if (input >= 8 && input <= 128) {
    var special = confirm('Include speacial characters?');
    var numbers = confirm('Include numbers?');
    var lowercase = confirm('Include lowercase characters?');
    var uppercase = confirm('Include uppercase characters');
  }
  
if (special === false && numbers === false && lowercase === false && uppercase === false){
  alert('Please select your criteria!');
  return generatePassword();
}


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 var generateBtn = document.querySelector("#generate");
  

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
