import { renderList } from "../components/cardList.js";
import { ToDoItem } from "../models/todoItem";
import ToDoService from "../services/todoService.js";
import { Status } from "../core/types/status.enum.js";
import { Logger } from "../core/utils/logger.js";

const todoService = ToDoService.getInstance();
const logger = Logger.getInstance();

export function updateStatusEventListener(task: ToDoItem, taskList: HTMLUListElement) {
      
      return (event: Event) => {
            event.stopPropagation();
            const newStatus: Status = task.status === Status.d ? Status.o : Status.d;
            todoService.updateTask(task.id, { status : newStatus });
            logger.info(`task: ${task.title} has changed status`);
            renderList(taskList);
      }
}