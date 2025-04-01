const textContent = sessionStorage.getItem("textContent")
console.log(textContent)
if (textContent !== null){
    document.getElementById("showText").innerText = textContent;
}