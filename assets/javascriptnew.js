var specialChar = ["!", "#", "$", "%", "&", "'", "*", "+" ];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var passArr = [];

var generatePassBtn = document.getElementById("getPassword");

generatePassBtn.addEventListener("click", handleClick);

function handleClick(){
    clearInterval();
    pwLength();
}
function pwLength(){
    passwordLength = prompt("How long would you like your password to be? please enter a number between 8 and 128")
    if(passwordLength < 8 || passwordLength > 128){
        alert("Password length must be between 8 and 128")
        pwLength();
    }
    else {
        characters();
    }
}

function  characters(){
    passArr = [];
    if (confirm("Would you like special characters in your password?")){
        passArr.push(specialChar);
    }
    if (confirm("Would you like uppercase characters in your password?")){
        passArr.push(upperChar);
    }
    if (confirm("Would you like lowercase characters in your password?")){
        passArr.push(lowerChar);
    }
    if (confirm("Would you like numbers in your password?")){
        passArr.push(numChar);
    }
    if(passArr.length < 2){
        alert("you must select at least two of the character options")
        characters();
    }
    else{
        generatePassword();
    }
}

function generatePassword(){
    var finalPassword = "";
    passwordlength = parseInt(passwordLength)
    for (var i = 0; i < passwordlength; i++){
        var whichArray = Math.floor(Math.random()*passArr.length)
        finalPassword += passArr[whichArray][Math.floor(Math.random()*passArr[whichArray].length)]
    }
    document.getElementById("password").innerText = finalPassword;
}

