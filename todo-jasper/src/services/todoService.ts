import { ToDoItem } from "../models/todoItem.js";
import { Status } from "../types/status.enum.js";

class ToDoService {

      private static instance: ToDoService;
      private toDoItems: ToDoItem[] = [];
      static getToDoItems: any;

      public static getInstance(): ToDoService {
      if (!ToDoService.instance) {
            ToDoService.instance = new ToDoService();
      }
      return ToDoService.instance;
      }

      private constructor() {
            this.addTask({ id: 101, title: "Brush Teeth", status:  Status.d });
            this.addTask({ id: 102,title: "Jogging", status: Status.p });
      }

      public addTask<T extends ToDoItem | string>(task: T): void {
            if (typeof task === "string") {
                  const randomNumber = Math.random();
                  const newItem: ToDoItem = { id: randomNumber, title: task, status: Status.p }
                  this.toDoItems.push(newItem);
            } else {
                  this.toDoItems.push(task);
            }
      }

      public getToDoItems(): ToDoItem[] {
            return [...this.toDoItems];
      }

      public removeTask(id: number): void {
            this.toDoItems = this.toDoItems.filter(x => x.id !== id);
      }

      public updateTask(task: ToDoItem): void {
            this.toDoItems = this.toDoItems.map(x => x.id === task.id ? task : x);
      }

}

export default ToDoService;