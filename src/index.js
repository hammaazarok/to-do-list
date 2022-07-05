import './index.css';
import './todolist.js'
import { Todo_list_Item, Todo_list_Items } from './todolist.js';
let tasks = [
    {
        description:"Write article",
        completed:false,
        index:0
    },
    {
        description:"Go shop",
        completed:false,
        index:1
    },
    {
        description:"Complete 2 coding challenges",
        completed:false,
        index:2
    }
]


Todo_list_Items(tasks);
// document.body.appendChild(component());