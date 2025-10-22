import { Status } from "../types/status.enum.js";
class ToDoService {
    static getInstance() {
        if (!ToDoService.instance) {
            ToDoService.instance = new ToDoService();
        }
        return ToDoService.instance;
    }
    constructor() {
        this.toDoItems = [];
        this.addTask({ id: 101, title: "Brush Teeth", status: Status.d });
        this.addTask({ id: 102, title: "Jogging", status: Status.p });
    }
    getToDoItems() {
        return [...this.toDoItems];
    }
    addTask(task) {
        this.toDoItems.push(task);
    }
    removeTask(id) {
        this.toDoItems = this.toDoItems.filter(x => x.id !== id);
    }
    updateTask(task) {
        this.toDoItems = this.toDoItems.map(x => x.id === task.id ? task : x);
    }
}
export default ToDoService;
//# sourceMappingURL=todoService.js.map