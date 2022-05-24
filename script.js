
    
      // Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var input = prompt("Choose a length between 8 and 128");

  if (input >= 8 && input <= 128) {
    // GOOD CODE GOES HERE
  } else {
    alert("Enter a valid number");
    return generatePassword();  

  }

  if (input >= 8 && input <= 128) {
    var special = confirm('Include special characters?');
    var numbers = confirm('Include numbers?');
    var lowercase = confirm('Include lowercase characters?');
    var uppercase = confirm('Include uppercase characters');
  }
  
if (special === false && numbers === false && lowercase === false && uppercase === false){
  alert('Please select your criteria!');
  return generatePassword();
}  

if (special) {
  var special = ["!@#$%^&*()"];
}
if (special===false) {
  var special = [""];
}
if (numbers) {
  var numbers = ["0123456789"]
}
if (numbers===false) {
  var numbers = [""]
}
if (lowercase) {
  var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
}
if (lowercase===false) {
  var lowercase = [""]
}
if (uppercase) {
  var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
}
if (uppercase===false) {
  var uppercase = [""]
}
var randomChar = special + numbers + lowercase + uppercase

var password = "";
for (var i =0; i < input; i++) {
  var randomInput = randomChar[Math.floor(Math.random() * randomChar.length)];
  password += randomInput;
  
}
return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

 var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);