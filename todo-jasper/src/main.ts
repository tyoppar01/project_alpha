import { renderList } from "./components/cardList.js";
import { addTaskHandle } from "./handler/addTaskHandler.js";
import { filterCompletedHandle } from "./handler/filterCompletedHandler.js";

const input = document.getElementById("task-name-input") as HTMLInputElement;
const addTask = document.getElementById("add-task") as HTMLButtonElement;
const taskList = document.getElementById("todo-list") as HTMLUListElement;
const showCompleted = document.getElementById("show-completed") as HTMLLabelElement;

addTask.addEventListener("click", () => { addTaskHandle(input, taskList); })
showCompleted.addEventListener("click", () => { filterCompletedHandle(taskList); })

renderList(taskList);