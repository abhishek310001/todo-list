import { parseISO, startOfToday } from "date-fns";
import { clearForm } from "./dom-manip.js";
import { saveToDoToLocal } from "./local-storage.js";

let toDoArray = [];

export const createToDo = () => {
  let Title = document.getElementById("Title").value;
  let Description = document.getElementById("Description").value;
  let DueDate = document.getElementById("DueDate").value;
  let Priority = document.getElementById("Priority").value;

  if (Title == "" || Description == "" || DueDate == "") {
    alert(
      "Title, Description, and Due Date are required fields, please try again!"
    );
    return;
  }

  if (parseISO(DueDate) < startOfToday()) {
    alert(
      "You have entered a date that has already passed!  Please enter a date greater than or equal to today."
    );
    return;
  }

  const nodeListCheckList = document.querySelectorAll(".form-li");
  let checkListArray = [];
  for (let i = 0; i < nodeListCheckList.length; i++) {
    let strippedCheckList = nodeListCheckList[i].textContent.replace(
      "\u00D7",
      ""
    );
    checkListArray.push(strippedCheckList);
  }

  let CheckList = checkListArray.join(", ");
  toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
  saveToDoToLocal({ Title, Description, DueDate, Priority }, CheckList);
  clearForm();

  return { Title, Description, DueDate, Priority }, CheckList;
};
