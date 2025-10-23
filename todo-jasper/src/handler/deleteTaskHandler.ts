import { renderList } from "../components/cardList.js";
import ToDoService from "../services/todoService.js";
import { Logger } from "../utils/logger.js";

const todoService = ToDoService.getInstance();
const logger = Logger.getInstance();

export function deleteElement(): HTMLButtonElement {
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-task-button");
      deleteButton.textContent = "X";
      return deleteButton;
}

export function deleteTaskEventListener(taskId: number, taskList: HTMLUListElement) {
      return (event: Event) => {
            event.stopPropagation();
            todoService.removeTask(taskId);
            logger.info(`removed a task [id: ${taskId}]`);
            renderList(taskList);
      }
}