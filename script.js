// Assignment code here
var passwordBtnEl = $('.password-btn');
var passwordDisplayEl = $('#password-display');
var Symbols=["!","@","#","$","%","^","&","*"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var upperCaseLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","y","Z"]
var lowerCaseLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n", "o","p","q","r","s","t","u","v","x","y","z"]
var combined = []

// Get references to the #generate element
const generatePassword = (length, hasNumber, hasSymbols, hasUppercase, hasLowercase) =>{
  const availableCharacters = [
    ...(hasSymbols ? Symbols : []),
    ...(hasNumber ? numbers : []),
    ...(hasLowercase ? lowerCaseLetter : []),
    ...(hasUppercase ? upperCaseLetter : [])
  ];
  console.log(availableCharacters);

  let password = "";

  if(availableCharacters.length === 0) return "";

  for(let i = 0; i <length; i++){
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    const randomCharacter = availableCharacters[randomIndex]
    password+= randomCharacter
  }
  return password;
}

var generateBtn = document.querySelector("#generate");
function getUserOptions (){
function getPasswordCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
  }
  
// Prompt user for password criteria
var passwordLength = parseInt(prompt ("Password most be at least 8 charactors long.",15));
var passwordSpecialCharacters = confirm ("Would you like special characters?");
var passwordNumbers = confirm("Would you like numbers?");
var passwordLowerCase = confirm("Would you like lowercase?");
var passwordUpperCase = confirm("Would you like uppercase?");
// Do user vaildation to check for password length. 8 -128
 //2A.figuer out away to take the yes prompt and randomize them to suggest password.
 console.log(Math.floor(Math.random()* 26));
 return{
  passwordSpecialCharacters, passwordLength, passwordLowerCase, passwordUpperCase, passwordNumbers
 }
 //Password will be generated.
}    
// Write password to the #password input
function writePassword() {
  var options = getUserOptions();
  console.log(options)
  var password = generatePassword(options.passwordLength,options.passwordNumbers,options.passwordSpecialCharacters, options.passwordUpperCase, options.passwordLowerCase);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
