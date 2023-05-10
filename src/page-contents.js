const displayForm = () => {
    document.getElementById('add-todo-form').style.display = "";
}

const addItemToChecklist = () => {
    const addItem = document.querySelector("#add-to-checklist").value;

    if (addItem !== "") {
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;

        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.querySelector("#add-to-checklist").value = "";

        if (document.querySelectorAll("li").length > 0) {
            console.log("Checklist Module length: " + document.querySelectorAll("li").length);
            const nodeListCheckList = document.querySelectorAll("li");
            console.log(nodeListCheckList);

            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", () => {
                    checkListItem.remove();
                });
            })
        }
    }
    else return;
}

const clearForm = () => {
    const nodeListCheckList = document.querySelectorAll("li");
    for (let i = 0; i < nodeListCheckList.length; i++) {
        nodeListCheckList[i].remove();
    }
    document.querySelector("#add-todo").reset();
}

export {displayForm, addItemToChecklist, clearForm};