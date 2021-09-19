
var sec3 = document.getElementById("sec3");
var sec1 = document.getElementById("sec1");
var sec2 = document.getElementById("sec2");
var ac = document.getElementById("ac")
var btnSuma = document.getElementById("btnSuma");
var btnResta = document.getElementById("btnResta");

ac.addEventListener("click", function () {
    borrar();
})


function addValor(n) {
   sec1.textContent=parseInt(n);
}





function borrar() {
    sec3.textContent = "";
    sec2.textContent = "";
    sec1.textContent = "";
}

btnSuma.addEventListener("click", function () {
    var n1 = 4;  //1ro valor del sec1
    var n2 = 6; //2 do valor del sec 3
    //si el sec 2 tiene un "+":  HACER UN SWITCH?
    sec3.innerHTML = suma(n1, n2);
})





function suma(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}

function mult(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}

function div(n1, n2) {
    return parseInt(n1) / parseInt(n2);
}



