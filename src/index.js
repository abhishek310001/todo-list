import { createToDo } from './create-to-do.js';
import { displayTheForm, addItemToCheckList, clearForm, displayToDo } from './dom-manip.js'

displayToDo();

let clickEventsModule = (function() {

    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToCheckList);

    const clearBtn = document.querySelector(".reset-button");
    clearBtn.addEventListener("click", clearForm);

    const submitBtn = document.querySelector(".submit-button");
    submitBtn.addEventListener("click", createToDo);
    
})();
