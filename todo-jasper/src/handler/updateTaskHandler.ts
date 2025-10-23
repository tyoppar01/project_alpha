import { renderList } from "../components/cardList.js";
import { ToDoItem } from "../models/todoItem";
import ToDoService from "../services/todoService.js";
import { Status } from "../types/status.enum.js";
import { Logger } from "../utils/logger.js";

const todoService = ToDoService.getInstance();
const logger = Logger.getInstance();

export function updateStatusEventListener(task: ToDoItem, taskList: HTMLUListElement) {
      
      return (event: Event) => {
            event.stopPropagation();
            task.status = task.status === Status.d ? Status.o : Status.d;
            todoService.updateTask(task);
            logger.info(`task_id: ${task.id} has changed status`);
            renderList(taskList);
      }
}