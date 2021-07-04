// Assignment code here
function random(arry){
  var ranIndex = Math.floor(Math.random() * arry.length);
  return ranIndex;
}

function generatePassword(){
  var password = [];

  var params = {
    number: ["0","1","2","3","4","5","6","7","8","9"],
    lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","p","w","x","y","z"],
    upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","P","W","X","Y","Z"],
    specialChars: ["!","@","#","$","%","^","&","*","?","<",">","+"]
  }
  
  var passLength = window.prompt("Enter a number for the length of the password. \n(must be more than 8 and less than 128)");
  passLength = parseInt(passLength);

  while (passLength < 8 || passLength > 128){
    passLength = window.prompt("Number entered is out of range. Please enter a number between 8 and 128.")
  }

  var confirmNumber = window.confirm("Include numbers?");
  var confirmLowercase = window.confirm("Include Lowercase?");
  var confrimUppercase = window.confirm("Include Uppercase?");
  var confrimSymbol = window.confirm("Include Special Characters?");

  

  for (i = password.length + 1; i < passLength; i++){
    var ranParam = Math.floor(Math.random() * 4) + 1;
    console.log("Random Param: " + ranParam);

    switch(ranParam) {
      case 1:
        console.log("Number");
        if (confirmNumber){
          password.push(params.number[random(params.number)]);
        }
        break;
      case 2:
        console.log("Lowercase");
        if (confirmLowercase){
          password.push(params.lowerCase[random(params.lowerCase)]);

        }
        break;
      case 3:
        console.log("Uppercase");
        if (confrimUppercase){
          password.push(params.upperCase[random(params.upperCase)]);
        }
        break;
      case 4:
        console.log("Symbol")
        if (confrimSymbol){
          password.push(params.specialChars[random(params.specialChars)]);
        }
        break;
    }
  }
  console.log("Password: " + password)
  return password.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
