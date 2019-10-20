
        // var charAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+,-./:;<>=?@[]^_`\|/~"
        // var passwordLength = prompt("How long would you like your password to be 'Please enter between 8 and 128'");
        // var sChar = prompt("Please choose a special character");
        // var nChar = prompt("Please choose a number");
        // var lChar = prompt("Please choose a lowercase letter");
        // var uChar = prompt("Please choose an uppercase letter");
        // var yourPassword= " ";

        // // var yourChar = [sChar, nChar, lChar, uChar]
        // // console.log(yourChar);

        // // console.log(password(passwordLength, yourChar, charAll));

        // function password(){
        //     for(var i = 0; i < passwordLength; i++){
        //         password = password + charAll.charAt(Math.floor(Math.random()*Math.floor(charAll.length)));
        //         }
        //     }
            
        //  if (password.includes(sChar && nChar && lChar && uChar)){
        // console.log(password);
        //   }







        // <!--first try-->

        var passwordLength = prompt("How long would you like your password to be 'Please enter between 8 and 128'");
        var sChar = prompt("Please choose a special character");
        var nChar = prompt("Please choose a number");
        var lChar = prompt("Please choose a lowercase letter");
        var uChar = prompt("Please choose an uppercase letter");
        var passwordValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+,-./:;<>=?@[]^_`\|/~"
        var password= "";

        // var passReq=[passwordLength, sChar, nChar, lChar, uChar];
        // console.log(passReq);

        for(var i = 0; i <= passwordLength; i++){
        password = password + passwordValue.charAt(Math.floor(Math.random()*Math.floor(passwordValue.length)));
        }
        var goodPW = password.includes(sChar && nChar && lChar && uChar)
        console.log(goodPW);
        
        //  else ()
        //  for(var i = 0; i <= passwordLength; i++){
        //     password = password + passwordValue.charAt(Math.floor(Math.random()*Math.floor(passwordValue.length)));
        //     }


        //     <!--Test code-->
        // // var test = "4!2Ea@F3#Hd4T$fS5kV%6sTr^7HbgD&BG8sSGF*9v"
        // // console.log(test.charAt(Math.floor(Math.random()*Math.floor(test.length))));

    