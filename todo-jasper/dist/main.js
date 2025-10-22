import ToDoService from "./services/todoService.js";
const todoService = ToDoService.getInstance();
const search = document.getElementById("todo-input");
const taskList = document.getElementById("todo-list");
function renderList(tasks = todoService.getToDoItems()) {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} (${task.status})`;
        taskList.appendChild(li);
        console.log(li);
    });
}
renderList();
//# sourceMappingURL=main.js.map