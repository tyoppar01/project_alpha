import { ToDoItem } from "../models/todoItem";
import { Status } from "../types/status.enum";

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

      public getToDoItems(): ToDoItem[] {
            return [...this.toDoItems];
      }

      public addTask(task: ToDoItem): void {
            this.toDoItems.push(task);
      }

      public removeTask(id: number): void {
            this.toDoItems = this.toDoItems.filter(x => x.id !== id);
      }

      public updateTask(task: ToDoItem): void {
            this.toDoItems = this.toDoItems.map(x => x.id === task.id ? task : x);
      }

}

export default ToDoService;