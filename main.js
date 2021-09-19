
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

    if ($("#sec2").html() == "")
        sec1.textContent = sec1.innerHTML + parseInt(n);
    else
    
    sec3.textContent = sec3.innerHTML + parseInt(n);




}

function addOperacion(op) {
    if (op == "+") {
        sec2.innerText = "+";
    } if (op == "x") {
        sec2.innerText = "x";
    } if (op == "/") {
        sec2.innerText = "/";
    } if (op == "-") {
        sec2.innerText = "-";
    }

}

function resolver(n1, n2) {
    var n1 = sec1.innerHTML;
    var n2 = sec3.innerHTML;
    var op = sec2.innerHTML;

    if (op == "+") {
        suma(n1, n2);
    } if (op == "x") {
        mult(n1, n2);
    } if (op == "/") {
        div(n1, n2);
    } if (op == "-") {
        resta(n1, n2);
    }


}

function borrar() {
    sec3.textContent = "";
    sec2.textContent = "";
    sec1.textContent = "";
}


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



