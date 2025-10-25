import { renderList } from "../components/cardList.js";
import ToDoService from "../services/todoService.js";
import { ErrorCode } from "../core/types/error.enum.js";
import { Logger } from "../core/utils/logger.js";
import { Priority, ToDoItem } from "../models/todoItem.js";
import { RandomTaskId } from "../core/utils/mathUtil.js";
import { Status } from "../core/types/status.enum.js";

type inputType = undefined | string;

const todoService = ToDoService.getInstance();
const logger = Logger.getInstance();

const logPrefixTask = "input task";

export function addTaskHandle(input:HTMLInputElement, priority:HTMLSelectElement, taskList: HTMLUListElement) {
      if (!input || input.value.trim() === "") {
            logger.warn(`${logPrefixTask} ${ErrorCode.EMPTYINPUT}`)
            return;
      }

      if(input.value.length > 50) {
            logger.warn(`${logPrefixTask} ${ErrorCode.LENGHTLIMIT}`)
            return;
      } 

      // create object, to do item
      const taskName = input.value.trim();
      const newItem: ToDoItem = { id: RandomTaskId(), title: taskName, status: Status.o, priority: priority.value as Priority }
      todoService.addTask(newItem);
      logger.info(`Added a new task [title: ${taskName}][status: ${newItem.status}][priority: ${newItem.priority}]`);
      renderList(taskList);
}