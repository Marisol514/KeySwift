//Select the HTML element with the id "generare" and store it int ehe variable generateBtn
var generateBtn = document.querySelector("#generate");

//***** Write password to the #password input
//Define a function named writePassword
function writePassword() {
  //Call the generatePassword function and store the result in the variable password
  var password = generatePassword();
  //Select the HTML element with the id "password" and store it in the varialble passwordText
  var passwordText = document.querySelector("#password");

  //Set the value of the paswordText imput field to the generated password
  passwordText.value = password;
}

//***** Add event listener to the generateBtn element. listening for a "click" event, and calling the writePassword function
//Define a fucntion named generatePassword
generateBtn.addEventListener("click", writePassword);

//***** Function to generate a password based on user prompts
//Define fuction called generatePassword
function generatePassword() {
  // Call the promptPasswordLength function and store the result in the variable passwordLength
  var passwordLength = promptPasswordLength();
  // Validate password length using if the password length is empty, then is not equal to the isNaN determines is it is a value. Ensures that
  //pasword length is greater than eight characters or less than 128.
  if (passwordLength === null || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    //otherwise instruct the window to display the invalid entry and wait for the user to dismiss the message
    alert("Please enter a valid password length between 8 and 128 characters.");
    //Return ends the function and specifies a value to return to the function caller
    return "";
  }

  // Prompt for character types
  // The var declares the fuction - scoped optonally called includeLowercase initializing the confrim method the displaying the message include lower case character?
  var includeLowercase = confirm("Include lowercase characters?");
  // The var declares the fuction - scoped optonally called includeUppercase initializing the confrim method the displaying the message Include uppercase Characters?
  var includeUppercase = confirm("Include uppercase characters?");
  // The var declares the fuction - scoped optonally called includeNumeric initializing the confrim method the displaying the message Include numeric characters?
  var includeNumeric = confirm("Include numeric characters?");
  // The var declares the fuction - scoped optonally called includeSpecial initializing the confrim method the displaying the message Include special characters?
  var includeSpecial = confirm("Include special characters?");


  // Validate at least one character type is selected
  // Using the "if" statement and the logical NOT "!" veridies if there request does not includes a lower case, uppercase, mumeric or special characters.  
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    //if the criterias are not met then return the message "Please select at least one character type"
    alert("Please select at least one character type.");
    //return end the fuction and specifies a value tot he function caller
    return "";
  }

  // Generate password based on selected criteria - This will be used later in the loop. 
  // this variable called pasword using the function "generateRandomPassword" that meets the chriteria of lenght, lowercase. uppercase, numeric values or special characters,  
  var password = generateRandomPassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  // then return the password. 
  return password;
}

// Function to prompt for password length
// This fuction is to prompt the box as the passord lenght
function promptPasswordLength() {
  //this calls the valuable to enter the length entry, then using the prompt it displays the messaage.
  var lengthInput = prompt("Enter the length of the password (between 8 and 128 characters):");
  //return end the prompt by using parseInt analizes the string and returns an number.
  return parseInt(lengthInput);
}

// Function to generate a random password
//this fuction uses the generateRandomPassword using the lenght specified then, use if fuction above to include at least one of the chriterias
function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  // Define character sets based on selected criteria
  //then use the the valiable below and use the listed lower cases below.
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  //then use the the valiable below and use the listed upper case letters below.
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //then use the the valiable below and use the numbers below.
  var numericChars = "0123456789";
  //then use the the valiable below and use the listed special charaters below.
  var specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

  // Initialize the character set to use
  //the variable is looking at the charactter set chriteria listed below in the if items the uquall the loop velow;
  var charSet = "";

  //if includeslowercases
  if (includeLowercase) {
    //then use the character set then add a lower case item fromt the lowercaseChars list.
    charSet += lowercaseChars;
  }
    //then use the character set then add an uppercase item fromt the uppercaseChars list.
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
      //then use the character set then add a numeric item fromt the numericChars list.
  if (includeNumeric) {
    charSet += numericChars;
  }
      //then use the character set then add a special character item fromt the specialChars list.
  if (includeSpecial) {
    charSet += specialChars;
  }

  // Generate the password
  //use the variable password to equal the result of the for loop specified below
  var password = "";
  //for the variable used the iterator "i"to equal 0, then iteration i to be the length then use increment operator of i++
  for (var i = 0; i < length; i++) {
    //use the variable randomIndex to return a number using the Math.Floor then using Math.Random look at the character set 
    //in charset then the length specified by the user  
    var randomIndex = Math.floor(Math.random() * charSet.length);
    //set the password to add the characterset and sets a set of string called randomIndex.
    password += charSet.charAt(randomIndex);
  }
//this ends the generateRandomPassowrd returning the password/
  return password;
}