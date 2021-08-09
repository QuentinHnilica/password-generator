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
    ourPassword = [] //clear the array so you can change the size of the password to a lower amt
    for(var i = 0; i < realLength; i++){
        newCondition = conditions[Math.floor(Math.random() * conditions.length)]
        
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
        var finalPass = ourPassword.join() //converts array to string
        document.getElementById("password").innerHTML = finalPass.replace(/,/g," ") //displays pass without commas
        document.getElementById("myButton").innerHTML = "Generate Again"
}

function startGenerating(){
    var getLength = document.querySelector('#fname'); //gets size min of 8
    const regex = /\d/;
    const doesItHaveNumber = regex.test(getLength.value) //checks string for a number


    if (doesItHaveNumber){ //to ensure they are inputting correctly

    
        realLength = getLength.value.replace(/\D/g,''); //converts string to int

        conditions = []; //Reset Peramiter 
        if (realLength < 8){ //in case they put a number lower or higher than allowed amt
            realLength = 8;
        }
        else if (realLength > 128){
            realLength = 128;
        }

        //Bools for special chars
        includeLowerCase = document.querySelector('#lowerCase:checked') !== null;
        includeUpperCase = document.querySelector('#upperCase:checked') !== null;
        includeNum = document.querySelector('#num:checked') !== null;
        includeSpecial = document.querySelector('#special:checked') !== null;

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
            makePassword();
        }
        else
        document.getElementById("password").innerHTML = "You must check at least 1 box" //To Guide user of rules
    }
    else{
        document.getElementById("password").innerHTML = "Input A Number" //To guide user of rules
    }
}