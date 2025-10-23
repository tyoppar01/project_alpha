import { ToDoItem } from "./models/todoItem";
import { Logger } from "./utils/logger.js";
import { ErrorCode } from "./types/error.enum.js";
import ToDoService from "./services/todoService.js";
import { renderList } from "./components/cardList.js";

const todoService = ToDoService.getInstance();
const logger = Logger.getInstance();
const input = document.getElementById("task-name-input") as HTMLInputElement;
const addButton = document.getElementById("add-task") as HTMLButtonElement;
const taskList = document.getElementById("todo-list") as HTMLUListElement;

addButton.addEventListener("click", () => {
    if (!input || input.value.trim() === "") {
        logger.warn(`to do task ${ErrorCode.EMPTYINPUT}`)
        return;
    }

    const taskName = input.value.trim();
    todoService.addTask(taskName);
    renderList(taskList);
})

renderList(taskList);