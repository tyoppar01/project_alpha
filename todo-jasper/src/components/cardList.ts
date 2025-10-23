import { deleteElement } from "../handler/deleteTaskHandler.js";
import { ToDoItem } from "../models/todoItem";
import ToDoService from "../services/todoService.js";

const todoService = ToDoService.getInstance();

export function renderList(taskList: HTMLUListElement, tasks: ToDoItem[] = todoService.getToDoItems()): void {
      
      taskList.innerHTML = "";

      tasks.forEach(task => {

            // create card item
            const li = document.createElement("li");
            
            // delete task button
            const deleteButton = deleteElement();

            // delete task event
            deleteButton.addEventListener("click", (e) => {
                  e.stopPropagation();
                  todoService.removeTask(task.id);
                  renderList(taskList);
            })

            // append into list
            li.textContent = `${task.title} (${task.status})`;
            li.appendChild(deleteButton);
            taskList.appendChild(li);

      });  

}

