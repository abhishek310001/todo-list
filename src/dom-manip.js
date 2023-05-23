export function displayTheForm() {
    document.getElementById("add-todo-form").style.display = "";
}

export function addItemToCheckList() {
    const addItem = document.getElementById("add-to-checklist").value;
    if (addItem !== "") {
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.className = "form-li";
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = "";

        if (document.querySelectorAll(".form-li").length > 0) {
            const nodeListCheckList = document.querySelectorAll(".form-li");
            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromChecklist() {
                    checkListItem.remove();
                });
            })
        }
    } else return;
}

export function clearForm() {
    const nodeListCheckList = document.querySelectorAll(".form-li");
    for (let i = 0; i < nodeListCheckList.length; i++) {
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}

export function displayToDo() {

    let Title = localStorage.getItem("Title");
    let Description = localStorage.getItem("Description");
    let DueDate = localStorage.getItem("DueDate");
    let Priority = localStorage.getItem("Priority");
    let checkList = localStorage.getItem("CheckList");

    if (Title == null || Description == null || DueDate == null || Priority == null) {
        return;
    }

    const removeDivs = document.querySelectorAll(".card");
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    const projects = document.querySelector(".projects");
    const card = document.createElement("div");
    card.classList.add("card");
    projects.appendChild(card);

    
    let displayArray = { Title, Description, DueDate, Priority };
    
    for (let key in displayArray) {
        const para = document.createElement("p");
        para.textContent = (`${key}: ${displayArray[key]}`);
        card.appendChild(para);
    }
    
    const para = document.querySelectorAll("p");
    const checkListLabel = document.createElement("p");
    checkListLabel.textContent = "CheckList Items (Click item when completed):";
    const ul = document.createElement("ul");
    checkListLabel.classList.add("check-list-label");
    para[para.length - 1].appendChild(ul);
    ul.appendChild(checkListLabel);
    let checkListArray = checkList.split(",");
    
    if (checkList !== "") {
        for (let i = 0; i < checkListArray.length; i++) {
            const li = document.createElement("li");
            li.className = "display-li";
            li.textContent = checkListArray[i];
            
            li.addEventListener("click", function strikeOutCheckListItem () {
                if (li.classList.toggle("done")) {
                    localStorage.setItem(li.textContent, "true");
                } else if (li.classList.toggle("display-li")){
                    localStorage.setItem(li.textContent, "false");
                }
            });
            
            ul.appendChild(li);
        }
    } else return;
    
    const deleteToDoButton = document.createElement("button");
    deleteToDoButton.classList.add("remove-todo-button");
    deleteToDoButton.textContent = "Delete/Complete ToDo";
    card.appendChild(deleteToDoButton);
    deleteToDoButton.addEventListener("click", function deleteToDo() {
        card.remove();
        localStorage.clear();
    });

    window.onload = function() {
        const liNodes = document.querySelectorAll(".display-li");
        liNodes.forEach(liNode => {
            if (localStorage.getItem(liNode.textContent) == "true") {
                liNode.className = "done";
            }
        })
    }
}
