const inputBox = document.getElementById("input-box");
const selectBox = document.getElementById("priority-select");
const completeDate = document.getElementById("due-date-input");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value !== '' && completeDate.value !== '' && selectBox.value !== '' && selectBox.value !=='Select Priority'){
        let li = document.createElement("li");
        let name = document.createElement("p");
        name.innerHTML = inputBox.value;
        li.appendChild(name);
        listContainer.appendChild(li);
        let pr = document.createElement("div");
        pr.innerHTML =  selectBox.value;
        li.appendChild(pr);
        let complete = document.createElement("p");
        complete.innerHTML = completeDate.value;
        li.appendChild(complete);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    else {
        alert("You must fill all!");
    }
    inputBox.value = "";
    completeDate.value = "";
    selectBox.value = "Select Priority";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();









































