import { ToDoItem } from "../models/todoItem";
import ToDoService from "../services/todoService.js";

const todoService = ToDoService.getInstance();

export function renderList(taskList: HTMLUListElement, tasks: ToDoItem[] = todoService.getToDoItems()): void {
      
      taskList.innerHTML = "";

      tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = `${task.title} (${task.status})`;
            taskList.appendChild(li);

            console.log(li);
      });  

}