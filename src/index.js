import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

const todoList = new TodoList();
const tarea = new Todo('Aprender Javascript!!!');

todoList.insertarTodo(tarea);


console.log(todoList);

crearTodoHtml(tarea);