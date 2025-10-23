export function deleteElement(): HTMLButtonElement {
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-task-button");
      deleteButton.textContent = "X";
      return deleteButton;
}
