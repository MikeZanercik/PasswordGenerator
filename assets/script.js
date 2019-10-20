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
function RandomNumber (bottom, top) {
    var diff = (top - bottom) + 1;
    return Math.floor(Math.random()* diff)+ bottom;
}
function RandomItemInArray(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}
function ShuffleArray(arr){
    for(var i = 0; i < arr.length; i++){
        var randomIndex = Math.floor(Math.random()*arr.length);
        var tempValOne = arr[i];
        var tempValTwo = arr[randomIndex];
        arr[i] = tempValTwo;
        arr[randomIndex]= tempValOne;
    }
    return arr
}
function generatePassword(){
    var finalPassword = [];
    var possibleCharacters= [];
    var options = getPasswordOptions();
    if (options.sChar){
        var randomsChar = RandomNumber(33, 47);
        finalPassword.push(randomsChar)
        for (var i =33; i<=47;i++){
            possibleCharacters.push(i)
        }
    }
    if (options.nChar){
        var randomnChar = RandomNumber(48, 57);
        finalPassword.push(randomnChar)
        for (var i = 48; i<= 57; i++){
            possibleCharacters.push(i)
        }
    }
    if (options.lChar){
        var randomlChar = RandomNumber(97, 122);
        finalPassword.push(randomlChar)
        for (var i = 97; i<= 122; i++){
            possibleCharacters.push(i)
        }
    }
    if (options.uChar){
        var randomuChar = RandomNumber(65, 90);
        finalPassword.push(randomuChar)
        for (var i = 65; i<= 90; i++){
            possibleCharacters.push(i)
        }
    }
    for(var i = finalPassword.length; i < options.length; i++){
        var randomChar = RandomItemInArray(possibleCharacters);
        finalPassword.push(randomChar)
    }
    for(var i =0; i < finalPassword.length; i++){
        finalPassword[i] = string.fromCharCode(finalPassword[i]);
    }
    return ShuffleArray(finalPassword).join("")
}
