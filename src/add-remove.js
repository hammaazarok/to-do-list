import * as todoList from './todolist.js';
import * as storage from './storage.js';

const reindexTasks = (taskss) => {
  taskss.forEach((element, i) => {
    element.index = i;
  });
  return taskss;
};

const TodoListDelete = (taskss) => {
  let removeTask = document.querySelectorAll('.item');
  removeTask.forEach((e, eindex) => {
    removeTask = document.querySelectorAll('.item');
    let deleteButton = e.parentNode.nextSibling.nextSibling;
    e.addEventListener('focus', () => {
      deleteButton = e.parentNode.nextSibling.nextSibling;

      if (deleteButton.classList[1] === 'fa-ellipsis-vertical') {
        deleteButton.classList.remove('fa-ellipsis-vertical');
        deleteButton.classList.add('fa-trash-can');
        deleteButton.addEventListener('click', () => {
          if (deleteButton.classList[1] === 'fa-trash-can') {
            taskss = reindexTasks(taskss);
            taskss = taskss.filter((t) => t.index !== eindex);
            taskss = reindexTasks(taskss);
            storage.setTasksToStorage(taskss);
            todoList.TodoListItems(taskss);
            TodoListDelete(taskss);
          }
        });
        removeTask.forEach((t) => {
          if (t !== e) {
            deleteButton = t.parentNode.nextSibling.nextSibling;
            deleteButton.classList.remove('fa-trash-can');
            deleteButton.classList.add('fa-ellipsis-vertical');
            deleteButton = e.parentNode.nextSibling.nextSibling;
          }
        });
      }
    });
  });
};
const TodoListAdd = (taskss, task) => {
  taskss.push(task);
  todoList.TodoListItems(taskss);
  TodoListDelete(taskss);
  storage.setTasksToStorage(taskss);
};

export { TodoListAdd, TodoListDelete, reindexTasks };
