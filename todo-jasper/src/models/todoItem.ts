import { Status } from "../types/status.enum";

type Priority = "low" | "medium" | "high";
type Tag = "work" | "study" | "daily" | "misc";
type Tagging = Priority | Tag;

export interface ToDoItem {
      readonly id: number;
      title: string;
      status: Status;
      dueOn? : Date;
      completedOn? : Date;
      tagging? : Tagging;
      priority? : Priority;
}


