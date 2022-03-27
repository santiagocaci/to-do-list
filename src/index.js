import { Todo, TodoList } from './classes';
import './styles.css';

const todoList = new TodoList();
const tarea = new Todo('Aprender Javascript');

todoList.insertarTodo(tarea);

console.log(todoList);