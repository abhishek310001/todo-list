import projectLoad from "./project-load";
import createTodo from "./todo";
import {displayForm, addItemToChecklist, clearForm} from "./page-contents";

let eventListeners = (() => {
    const addNewTodo = document.querySelector(".add-todo-btn");
    addNewTodo.addEventListener("click", displayForm);

    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToChecklist);

    const clearBtn = document.querySelector(".reset-btn");
    clearBtn.addEventListener("click", clearForm);
})();

const pageLoad = () => {
    const mainContainer = document.querySelector("#main-container");
    
    const heading = document.createElement("h1");
    heading.textContent = "To-Do Lists";
    mainContainer.appendChild(heading);

    

    const myTodo = createTodo('Buy Groceries',"Go get the groceries needed at the home","15/05/2023","Low","Fruits, Milk and Nuts");
    console.log(myTodo);
}

export default {pageLoad,eventListeners};
