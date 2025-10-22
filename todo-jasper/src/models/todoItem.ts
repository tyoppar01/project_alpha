import { Priority } from "../types/priority.enum";
import { Status } from "../types/status.enum";
import { Tagging } from "../types/tag.enum";

export interface ToDoItem {
      id: number;
      title: string;
      status: Status;
      dueOn? : Date;
      completedOn? : Date;
      tagging? : Tagging;
      priority? : Priority;
}


