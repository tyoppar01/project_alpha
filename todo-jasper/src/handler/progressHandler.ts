import { Status } from "../core/types/status.enum.js";
import { bar } from "../main.js";
import { ToDoItem } from "../models/todoItem.js";

export function updateProgressBar(tasks: ToDoItem[]): void {
  const doneCount = tasks.filter(t => t.status === Status.d).length;
  const total = tasks.length;
  const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  if (bar) bar.style.width = `${percent}%`;
}
