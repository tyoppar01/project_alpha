import { renderList } from "../components/cardList.js";
import ToDoService from "../services/todoService.js";
import { ErrorCode } from "../types/error.enum.js";
import { Logger } from "../utils/logger.js";

type inputType = undefined | string;

const todoService = ToDoService.getInstance();
const logger = Logger.getInstance();

export function addTaskHandle(input:HTMLInputElement, taskList: HTMLUListElement) {
      if (!input || input.value.trim() === "") {
            logger.warn(`to do task ${ErrorCode.EMPTYINPUT}`)
            return;
      }

      const taskName = input.value.trim();
      todoService.addTask(taskName);
      renderList(taskList);
}