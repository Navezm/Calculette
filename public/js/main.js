// Déclaration d'éléments 
let input = document.querySelector("input");
let btnEqual = document.getElementById("btnEqual");
let btnChiffre = document.getElementsByClassName("btnChiffre");
let btnOperator = document.getElementsByClassName("btnOperator");
let btnAC = document.getElementById("btnAC");
let btnPoint = document.getElementById("btnPoint");
let operator;
let value = [];

// Event Operateur
for (let i = 0; i < btnOperator.length; i++) {
    if(i == 0){
        btnOperator[i].addEventListener("click", function(){
            operator = "+";
            value.push(Number(input.value));
            input.value = "";
        });
    } else if (i == 1){
        btnOperator[i].addEventListener("click", function(){
            operator = "-";
            value.push(Number(input.value));
            input.value = "";
        });
    } else if (i == 2){
        btnOperator[i].addEventListener("click", function(){
            operator = "*";
            value.push(Number(input.value));
            input.value = "";
        });
    } else if (i == 3){
        btnOperator[i].addEventListener("click", function(){
            operator = "/";
            value.push(Number(input.value));
            input.value = "";
        });
    };
};

// Event chiffre // BTN
for (let i = 0; i < btnChiffre.length; i++) {
    btnChiffre[i].addEventListener("click", function(){
        if(i == 9){
            input.value = input.value + "0";
        } else {
            input.value = input.value + (i + 1);
        };
    });
};

// Event chiffre // Clavier
document.addEventListener("keydown", function(e){
    console.log(e.code);
    if(e.code == "Numpad1" || e.code == "Digit1"){
        input.value = input.value + "1";
    } else if(e.code == "Numpad2" || e.code == "Digit2"){
        input.value = input.value + "2";
    } else if(e.code == "Numpad3" || e.code == "Digit3"){
        input.value = input.value + "3";
    } else if(e.code == "Numpad4" || e.code == "Digit4"){
        input.value = input.value + "4";
    } else if(e.code == "Numpad5" || e.code == "Digit5"){
        input.value = input.value + "5";
    } else if(e.code == "Numpad6" || e.code == "Digit6"){
        input.value = input.value + "6";
    } else if(e.code == "Numpad7" || e.code == "Digit7"){
        input.value = input.value + "7";
    } else if(e.code == "Numpad8" || e.code == "Digit8"){
        input.value = input.value + "8";
    } else if(e.code == "Numpad9" || e.code == "Digit9"){
        input.value = input.value + "9";
    } else if(e.code == "Numpad0" || e.code == "Digit0"){
        input.value = input.value + "0";
    } else if(e.code == "NumpadDecimal" || e.code == "Comma"){
        input.value = input.value + ".";
    };
});

// Event AC
btnAC.addEventListener("click", function(){
    input.value = "";
})

// Event .
btnPoint.addEventListener("click", function(){
    input.value = input.value + ".";
});

// Event Equal 
btnEqual.addEventListener("click", function(){
    value.push(input.value);
    if(operator == "+"){
        input.value = Number(value[0]) + Number(value[1]);
    } else if(operator == "-"){
        input.value = Number(value[0]) - Number(value[1]);
    } else if(operator == "*"){
        input.value = Number(value[0]) * Number(value[1]);
    } else if(operator == "/"){
        input.value = Number(value[0]) / Number(value[1]);
    };
    for (let i = 0; i < 2; i++) {
        value.pop();
    };
});