import { priorMap } from "../models/todoItem.js";
import { Status } from "../core/types/status.enum.js";
import { RandomTaskId } from "../core/utils/mathUtil.js";
class ToDoService {
    static getInstance() {
        if (!ToDoService.instance) {
            ToDoService.instance = new ToDoService();
        }
        return ToDoService.instance;
    }
    constructor() {
        this.toDoItems = [];
        const task1 = { id: 344365, title: "Brush Teeth", status: Status.d, priority: "low" };
        const task2 = { id: 347291, title: "Jogging", status: Status.o, priority: "high" };
        this.addTask(task1);
        this.addTask(task2);
    }
    addTask(task) {
        if (typeof task === "string") {
            const newItem = { id: RandomTaskId(), title: task, status: Status.o, priority: priorMap["unlisted"] };
            this.toDoItems.push(newItem);
        }
        else {
            this.toDoItems.push(task);
        }
    }
    getToDoItems() {
        return this.toDoItems.map(({ id, title, status, priority }) => ({ id, title, status, priority }));
    }
    removeTask(id) {
        this.toDoItems = this.toDoItems.filter(x => x.id !== id);
    }
    updateTask(id, updates) {
        this.toDoItems = this.toDoItems.map(x => x.id === id ? Object.assign(Object.assign({}, x), updates) : x);
    }
}
export default ToDoService;
//# sourceMappingURL=todoService.js.map