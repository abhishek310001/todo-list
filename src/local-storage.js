import { displayToDo } from "./dom-manip.js";

export function saveToDoToLocal({ Title, Description, DueDate, Priority }, CheckList) {
    localStorage.setItem("Title", Title);
    localStorage.setItem("Description", Description);
    localStorage.setItem("DueDate", DueDate);
    localStorage.setItem("Priority", Priority);
    localStorage.setItem("CheckList", CheckList);
    displayToDo();
    return { Title, Description, DueDate, Priority }, CheckList;
}
