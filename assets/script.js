
        var charAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+,-./:;<>=?@[]^_`\|/~"
        var passwordLength = prompt("How long would you like your password to be 'Please enter between 8 and 128'");
        var sChar = prompt("Please choose a special character");
        var nChar = prompt("Please choose a number");
        var lChar = prompt("Please choose a lowercase letter");
        var uChar = prompt("Please choose an uppercase letter");
        var yourPassword= " ";

        yourPassword.value = password(passwordLength.value, characters);

        var characters = charAll + sChar + nChar + lChar + uChar;
        console.log(characters);

        console.log(password(passwordLength,charAll));

        function password(length, characters){
            var pW = " ";
            for(var i = 0; i<passwordLength; i++){
                pW += characters.charAt(Math.floor(Math.random() * length.length));
            }
            return pW;
        }





        // <!--first try-->

        // var passwordLength = prompt("How long would you like your password to be 'Please enter between 8 and 128'");
        // var sChar = prompt("Please choose a special character");
        // var nChar = prompt("Please choose a number");
        // var lChar = prompt("Please choose a lowercase letter");
        // var uChar = prompt("Please choose an uppercase letter");
        // var passwordValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+,-./:;<>=?@[]^_`\|/~"
        // var password= "";

        // var passReq=[passwordLength, sChar, nChar, lChar, uChar];
        // console.log(passReq);

        

        // for(var i = 0; i <= passwordLength; i++){
        // password = password + passwordValue.charAt(Math.floor(Math.random()*Math.floor(passwordValue.length)));
        // }

        // // if (password.includes(sChar && nChar && lChar && uChar)){
        // console.log(password);
        // //  }

        // // else (for (var i))


        //     <!--Test code-->
        // // var test = "4!2Ea@F3#Hd4T$fS5kV%6sTr^7HbgD&BG8sSGF*9v"
        // // console.log(test.charAt(Math.floor(Math.random()*Math.floor(test.length))));

    