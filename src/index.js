import "./index.css";
import * as todoList from "./todolist.js";
import * as addRemove from "./add-remove.js";
import * as storage from "./storage.js";

const tasks = storage.getTasksFromStorage();

todoList.TodoListItems(tasks);
addRemove.TodoListDelete(tasks);
const addTask = document.querySelector(".text-area");
addTask.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    const task = {
      description: addTask.value,
      completed: false,
      index: tasks.length,
    };
    addRemove.TodoListAdd(tasks, task);
    addTask.value = null;
  }
});

const editTask = document.querySelectorAll(".item");
editTask.forEach((i,index)=>{
  i.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      const task = {
        description: i.value,
        completed: false,
        index: index,
      };
      tasks[index] = task;
      todoList.TodoListItems(tasks);
      storage.setTasksToStorage(tasks);
      addRemove.TodoListDelete(tasks)
    }
  });
})

