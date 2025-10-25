import { renderList } from "./components/cardList.js";
import { addTaskHandle } from "./handler/addTaskHandler.js";
import { filterCompletedHandle, filterSearchHandle } from "./handler/filterHandler.js";
import { PomodoroTimer } from "./handler/timerHandler.js";

const prior = document.getElementById("prior-input") as HTMLSelectElement;
const search = document.getElementById("search-input") as HTMLInputElement;
const input = document.getElementById("task-name-input") as HTMLInputElement;
//const addTask = document.getElementById("add-task") as HTMLButtonElement;
const taskList = document.getElementById("todo-list") as HTMLUListElement;
//const showCompleted = document.getElementById("show-completed") as HTMLLabelElement;
export const bar = document.getElementById("progress-bar") as HTMLDivElement;

search.addEventListener("input", () => {filterSearchHandle(search, taskList);})
document.getElementById("add-task")?.addEventListener("click", () => { addTaskHandle(input, prior, taskList); })
document.getElementById("show-completed")?.addEventListener("click", () => { filterCompletedHandle(taskList); })

const timer = new PomodoroTimer();
document.getElementById("start-pomodoro")?.addEventListener("click", () => timer.start());
document.getElementById("pause-pomodoro")?.addEventListener("click", () => timer.pause());
document.getElementById("reset-pomodoro")?.addEventListener("click", () => timer.reset());

renderList(taskList);