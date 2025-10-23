import { deleteElement, deleteTaskEventListener } from "../handler/deleteTaskHandler.js";
import { updateStatusEventListener } from "../handler/updateTaskHandler.js";
import { ToDoItem } from "../models/todoItem";
import ToDoService from "../services/todoService.js";
import { Status } from "../types/status.enum.js";
import { StateUtil } from "../utils/stateUtil.js";

const todoService = ToDoService.getInstance();
const stateManager = StateUtil.getInstance();

export function renderList(taskList: HTMLUListElement, tasks: ToDoItem[] = todoService.getToDoItems()): void {
      
      taskList.innerHTML = "";

      const displayList = tasks;
      const keyword = stateManager.getKeyWord();
      const showCompleted = stateManager.getShowCompleted();
      let filterList: ToDoItem[] = displayList.filter(x => x.status !== Status.d || showCompleted).filter(x => x.title.toLowerCase().includes(keyword));

      filterList.forEach(task => {

            const li = document.createElement("li");

            // delete task button and event handler
            const deleteButton = deleteElement();
            deleteButton.addEventListener("click", deleteTaskEventListener(task.id, taskList));
            li.addEventListener("dblclick", updateStatusEventListener(task, taskList));

            // append into list
            li.style.cursor = "pointer";
            li.textContent = `${task.title} (${task.status})`;
            li.appendChild(deleteButton);
            taskList.appendChild(li);

      });  

}

