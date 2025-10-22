import { ToDoItem } from "./models/todoItem";
import ToDoService from "./services/todoService";

const todoService = ToDoService.getInstance();

const search = document.getElementById("todo-input") as HTMLInputElement;
const taskList = document.getElementById("todo-list") as HTMLUListElement;

function renderList(tasks: ToDoItem[] = todoService.getToDoItems() ) {
    
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} (${task.status})`;
        taskList.appendChild(li);

        console.log(li);
    });  
    
}

renderList();