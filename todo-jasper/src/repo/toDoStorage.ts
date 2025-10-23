import { ToDoItem } from "../models/todoItem";

// PENDING WORK

function isToDoItem(obj: any): obj is ToDoItem {
  return (
    typeof obj.id === "number" &&
    typeof obj.title === "string" &&
    typeof obj.status === "string"
  );
}

const stored = JSON.parse(localStorage.getItem("tasks") || "[]");
const validTasks = stored.filter(isToDoItem);
