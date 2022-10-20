var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#translate-output");

function clickHandler () {
    output.innerText = "ABCD" + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler)