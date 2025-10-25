import { renderList } from "./components/cardList.js";
import { addTaskHandle } from "./handler/addTaskHandler.js";
import { filterCompletedHandle, filterSearchHandle } from "./handler/filterHandler.js";
const prior = document.getElementById("prior-input");
const search = document.getElementById("search-input");
const input = document.getElementById("task-name-input");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("todo-list");
const showCompleted = document.getElementById("show-completed");
search.addEventListener("input", () => { filterSearchHandle(search, taskList); });
addTask.addEventListener("click", () => { addTaskHandle(input, prior, taskList); });
showCompleted.addEventListener("click", () => { filterCompletedHandle(taskList); });
renderList(taskList);
//# sourceMappingURL=main.js.map