import { renderList } from "../components/cardList.js";
import { Logger } from "../utils/logger.js";
import { StateUtil } from "../utils/stateUtil.js";

export function filterCompletedHandle(taskList: HTMLUListElement): void {

      const stateManager = StateUtil.getInstance();
      const logger = Logger.getInstance();

      stateManager.switchShowCompleted();
      logger.info("filter show completed list")

      renderList(taskList);

}

export function filterSearchHandle(input: HTMLInputElement, taskList: HTMLUListElement): void {
      const stateManager = StateUtil.getInstance();
      const keyword =  input?.value.trim() ?? "";
      stateManager.setKeyWord(keyword);
      renderList(taskList);
}