

 // create list item dynamically using JavaScript
    let listInput = document.getElementById("listInput");
    let addBtn = document.getElementById("addBtn");
    let taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function(){
        let newItem = document.createElement("li");
        newItem.textContent = listInput.value;
        taskList.appendChild(newItem);
        listInput.value = "";
    });