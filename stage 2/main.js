let counterInfo = {
    counterName: null,
    counterValue:null

}

document.getElementById("save").addEventListener("click",addName)

document.getElementById("count").addEventListener("click",addCount)


function addName(){
    counterInfo.counterName = document.getElementById("name").value;
    console.log(counterInfo.counterName)
    sessionStorage.setItem("counter",JSON.stringify(counterInfo))
}

function addCount(){
    counterInfo.counterValue+=1;
    sessionStorage.setItem("counter",JSON.stringify(counterInfo))
}