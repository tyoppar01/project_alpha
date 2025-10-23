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

export function filterSearchHandle(keyword: HTMLInputElement, taskList: HTMLUListElement): void {

      if (keyword && keyword.value.trim() !== "") {
            const stateManager = StateUtil.getInstance();
            const logger = Logger.getInstance();
            logger.info("search keyword has updated")
            stateManager.setKeyWord(keyword.value.trim());
      }
      renderList(taskList);
}