var realLength;
var includeLowerCase;
var includeUpperCase;
var includeNum;
var includeSpecial;
//Since the function starts via a button, these are global so 
//they can be re-written
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*"]
var ourPassword = []
var conditions = []

function makePassword(){
    var newCondition //this is how we will tell which char to use
    for(var i = 0; i < realLength; i++){
        newCondition = conditions[Math.floor(Math.random() * conditions.length)]
        console.log(newCondition)
        
        //Before Giving a value, make sure we are usuing all conditions no matter
        //what.
        
        if (newCondition == "lower"){
            ourPassword[i] = alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase()
        }
        else if (newCondition == "upper"){
            ourPassword[i] = alphabet[Math.floor(Math.random() * alphabet.length)]
        }
        else if (newCondition == "num"){
            ourPassword[i] = Math.floor(Math.random() * 10)
        }
        else{
            ourPassword[i] = specialCharArray[Math.floor(Math.random() * specialCharArray.length)]
        }
        
    }
        var finalPass = ourPassword.join()
        document.getElementById("password").innerHTML = finalPass.replace(/,/g," ") 
        document.getElementById("myButton").innerHTML = "Generate Again"
}

function startGenerating(){
    var getLength = window.prompt("Choose characters, Max 128"); //gets size min of 8
    realLength = parseInt(getLength); //converts string to int
    //Just in case the player tries some funny business

    conditions = []; //Reset Peramiter 
    if (realLength < 8){
        realLength = 8;
    }
    else if (realLength > 128){
        realLength = 128;
    }

    //Bools for special chars
    includeLowerCase = window.confirm("Do you want lowercase Letters?");
    includeUpperCase = window.confirm("Do you want UPPERCASE?");
    includeNum = window.confirm("Do you want Numbers?");
    includeSpecial = window.confirm("Do you want Special Characters? (IE. !@#$%^&*)");

    if (includeLowerCase){
        conditions.push("lower")
    }
    if (includeUpperCase){
        conditions.push("upper")
    }
    if (includeNum){
        conditions.push("num")
    }
    if (includeSpecial){
        conditions.push("special")
    }

    if (conditions.length > 0){
        console.log(conditions)
        makePassword();
    }

    

}