let currentCode = "";

// CHANGE THIS TO YOUR SPECIAL NUMBER
const correctCode = "123025";

function addNumber(num){
    if(currentCode.length < 10){
        currentCode += num;
        document.getElementById("display").innerText = currentCode;
    }
}

function clearInput(){
    currentCode = currentCode.slice(0,-1);

    document.getElementById("display").innerText =
    currentCode || "••••";
}

function checkCode(){

    if(currentCode === correctCode){
        window.location.href = "apologyletter.html";
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("letter").style.display = "block";

    }else{

        document.getElementById("error").innerText =
        "Wrong man ka uy dinako nimo lab💔 Try again.";

        currentCode = "";
        document.getElementById("display").innerText = "••••";
    }
}