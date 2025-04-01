document.getElementById("writeText").addEventListener("input", storeText)

function storeText(event){
    sessionStorage.setItem("textContent",event.target.value)
}