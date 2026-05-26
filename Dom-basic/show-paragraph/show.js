// show input text in paragraph
let inputBox = document.getElementById("inputBox");
let showText = document.getElementById("showText");
inputBox.addEventListener("input", function(){
    showText.textContent = inputBox.value;
});
