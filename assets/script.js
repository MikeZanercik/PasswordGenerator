var passwordDiv = document.getElementById("password");
var generatePassBtn = document.getElementById("getPassword");
generatePassBtn.addEventListener("click", handleClick);
function handleClick(){
    passwordDiv.innerText = generatePassword();
}
function getPasswordOptions() {
    var length;
    do {
        length = parseInt(prompt("How long would you like your password to be?"));
    } while (isNaN(length) || length < 8 || length > 128);
    var sChar = confirm("Do you want special characters?");
    var nChar = confirm("Do you want numbers?");
    var lChar = confirm("Do you want lowercase characters?");
    var uChar = confirm("Do you want uppercase characters?");
    var options = {
        length,
        sChar,
        nChar,
        lChar,
        uChar,
    }
    return options
};

function RandomItemInArray(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}

function generatePassword(){
    var finalPassword = [];
    var possibleCharacters= [];
    var options = getPasswordOptions();
    if (options.sChar){
        var randomsChar = ["!", "#", "$", "%", "&", "'", "*", "+" ];
        possibleCharacters.push(randomsChar)
        for (var i =0; i<=randomsChar.length;i++){
            finalPassword.push(i)
        }
    }
    if (options.nChar){
        var randomnChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        possibleCharacters.push(randomnChar)
        for (var i = 0; i<=randomnChar.length; i++){
            finalPassword.push(i)
        }
    }
    if (options.lChar){
        var randomlChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        possibleCharacters.push(randomlChar)
        for (var i = 0; i<=randomlChar.length; i++){
            finalPassword.push(i)
        }
    }
    if (options.uChar){
        var randomuChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        possibleCharacters.push(randomuChar)
        for (var i = 0; i<= randomuChar.length; i++){
            finalPassword.push(i)
        }
    }
    for(var i = 0; i < options.length; i++){
        var randomChar = RandomItemInArray(possibleCharacters);
        finalPassword.push(randomChar)
        return (finalPassword)
    }
    }

