enum TodoStatus {
      done = "Done",
      inProgress = "in-progress",
      todo = "todo"
}

type ContactBirthDate = Date | number | string;

interface ToDoItem {
      id: number;
      title: string | number;
      status: TodoStatus;
      contactBirthDate?: ContactBirthDate;
      completedOn? : Date;
}

const todoItems: ToDoItem[] = [
    { id: 1, title: "Learn HTML", status: TodoStatus.done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: TodoStatus.inProgress },
    { id: 3, title: "Write the best app in the world", status: TodoStatus.todo },
]

function addTodoItem(todo): ToDoItem {
    const id = getNextId(todoItems)

    const newTodo: ToDoItem = {
        id,
        title: "To Do Item - 1",
        status: todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends {id : number}>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))