import './index.css';
import { TodoListItems } from './todolist.js';

const tasks = [
  {
    description: 'Write article',
    completed: false,
    index: 0,
  },
  {
    description: 'Go shop',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete 2 coding challenges',
    completed: false,
    index: 2,
  },
];

TodoListItems(tasks);
// document.body.appendChild(component());