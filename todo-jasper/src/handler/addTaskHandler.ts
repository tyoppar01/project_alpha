import { renderList } from "../components/cardList.js";
import ToDoService from "../services/todoService.js";
import { ErrorCode } from "../types/error.enum.js";
import { Logger } from "../utils/logger.js";

type inputType = undefined | string;

const todoService = ToDoService.getInstance();
const logger = Logger.getInstance();

const logPrefixTask = "in put task";

export function addTaskHandle(input:HTMLInputElement, taskList: HTMLUListElement) {
      if (!input || input.value.trim() === "") {
            logger.warn(`${logPrefixTask} ${ErrorCode.EMPTYINPUT}`)
            return;
      }
      if(input.value.trim.length > 50) {
            logger.warn(`${logPrefixTask} ${ErrorCode.EMPTYINPUT}`)
      } 

      const taskName = input.value.trim();
      todoService.addTask(taskName);
      logger.info(`added a new task [task name: ${taskName}]`);
      renderList(taskList);
}