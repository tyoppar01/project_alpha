import { ToDoItem } from "../models/todoItem";
import { Status } from "../types/status.enum";

class ToDoService {
      static getToDoItems(): ToDoItem[] {
            throw new Error("Method not implemented.");
      }

      private static instance: ToDoService;
      private toDoItems: ToDoItem[] = [];

      private constructor() {
            this.addTask({ id: 101, title: "Brush Teeth", status:  Status.d });
            this.addTask({ id: 102,title: "Jogging", status: Status.p });
      }

      public getToDoItems(): ToDoItem[] {
            return this.toDoItems;
      }

      public addTask(task: ToDoItem): void {
            this.toDoItems.push(task);
      }

      public removeTask(id: number): void {
            this.toDoItems.filter(x => x.id !== id);
      }

      public updateTask(task: ToDoItem): void {
            this.toDoItems.map(x => x.id === task.id ? task : x);
      }

}

export default ToDoService;