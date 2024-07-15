function validateInput() {
    const inputText = document.getElementById("input-text").value;
    const errorMessage = document.getElementById("error-message");

    const isValid = /^[a-z\s]*$/.test(inputText);

    if (!isValid) {
        errorMessage.classList.remove("hidden");
        setTimeout(() => {
            errorMessage.classList.add("hidden");
        }, 3000);
    } else {
        errorMessage.classList.add("hidden");
    }
}

function encryptText() {
    validateInput();
    let inputText = document.getElementById("input-text").value;
    let outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output-text").value = outputText;
    document.getElementById("input-text").value = "";
}

function decryptText() {
    validateInput();
    let inputText = document.getElementById("input-text").value;
    let outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = outputText;
    document.getElementById("input-text").value = "";
}

function copyText() {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    
    alert("Texto copiado al portapapeles");
}
