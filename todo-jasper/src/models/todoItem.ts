import { Status } from "../core/types/status.enum.js";

export type Priority = "low" | "medium" | "high" | "unlisted";
type Tag = "work" | "study" | "daily" | "misc";
type Tagging = Priority | Tag;

export const priorMap: Record<Priority, string> = {
  high: "prior-high",
  medium: "prior-medium",
  low: "prior-low",
  unlisted: "prior-none"
};

export interface ToDoItem {
      readonly id: number;
      title: string;
      status: Status;
      dueOn? : Date;
      completedOn? : Date;
      tagging? : Tagging;
      priority? : Priority;
}


