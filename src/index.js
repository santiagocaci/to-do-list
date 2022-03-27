import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

// Dos maneras de hacerlo
// todoList.todos.forEach((todo) => {
//   crearTodoHtml(todo);
// });
todoList.todos.forEach(crearTodoHtml);


console.log('todos', todoList.todos);