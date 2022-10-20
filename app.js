var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#translate-output");
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error occured. ", error);
    alert("Sorry! Something went wrong with the server. Please try again after some time.")
}

function clickHandler () {
    var inputText = txtInput.value;

    fetch(constructURL(inputText))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)