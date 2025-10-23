import { renderList } from "./components/cardList.js";
import { addTaskHandle } from "./handler/addTaskHandler.js";

const input = document.getElementById("task-name-input") as HTMLInputElement;
const addButton = document.getElementById("add-task") as HTMLButtonElement;
const taskList = document.getElementById("todo-list") as HTMLUListElement;
const showCompleted = document.getElementById("show-completed") as HTMLLabelElement;

addButton.addEventListener("click", () => { addTaskHandle(input, taskList); })
renderList(taskList);