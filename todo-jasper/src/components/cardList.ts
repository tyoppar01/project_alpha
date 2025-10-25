import { deleteElement, deleteTaskEventListener } from "../handler/deleteTaskHandler.js";
import { updateStatusEventListener } from "../handler/updateTaskHandler.js";
import { ToDoItem, priorMap } from "../models/todoItem.js";
import ToDoService from "../services/todoService.js";
import { Status } from "../core/types/status.enum.js";
import { StateUtil } from "../core/utils/stateUtil.js";
import { updateProgressBar } from "../handler/progressHandler.js";

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
            li.textContent = `${task.title}`;
            // priorMap ?? usage is nullish coalescing operator
            li.classList.add(priorMap[task.priority ?? "unlisted"]);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
      });  

      updateProgressBar(tasks);
}

