import * as todoList from './todolist.js';

const TodoListAdd = (taskss,task) => {

    taskss.push(task);
    todoList.TodoListItems(taskss);

}

const TodoListDelete = (taskss) => {

    
    
}

const reindexTasks = (taskss)=>{
    taskss.forEach((element,i) => {
        element.index = i;
       });
}

export { TodoListAdd, TodoListDelete, reindexTasks}