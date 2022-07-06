import './index.css';
import * as todoList from './todolist.js';
import * as addRemove from './add-remove.js'
import * as storage from './storage.js'

let tasks = storage.getTasksFromStorage();

todoList.TodoListItems(tasks);

const addTask = document.querySelector('.text-area')
addTask.addEventListener('keydown',(e)=>{
 
  if(e.keyCode === 13){
    const task = {
      description: addTask.value,
      completed: false,
      index: tasks.length,
    }
      addRemove.TodoListAdd(tasks,task);
      storage.setTasksToStorage(tasks);
      addTask.value = null;
  }
})
    


 


