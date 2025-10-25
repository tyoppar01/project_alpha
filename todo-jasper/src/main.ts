import { renderList } from "./components/cardList.js";
import { addTaskHandle } from "./handler/addTaskHandler.js";
import { filterCompletedHandle, filterSearchHandle } from "./handler/filterHandler.js";
import { updateProgressBar } from "./handler/progressHandler.js";
import { ToDoItem } from "./models/todoItem.js";

const prior = document.getElementById("prior-input") as HTMLSelectElement;
const search = document.getElementById("search-input") as HTMLInputElement;
const input = document.getElementById("task-name-input") as HTMLInputElement;
const addTask = document.getElementById("add-task") as HTMLButtonElement;
const taskList = document.getElementById("todo-list") as HTMLUListElement;
const showCompleted = document.getElementById("show-completed") as HTMLLabelElement;

export const bar = document.getElementById("progress-bar") as HTMLDivElement;

search.addEventListener("input", () => {filterSearchHandle(search, taskList);})
addTask.addEventListener("click", () => { addTaskHandle(input, prior, taskList); })
showCompleted.addEventListener("click", () => { filterCompletedHandle(taskList); })

renderList(taskList);