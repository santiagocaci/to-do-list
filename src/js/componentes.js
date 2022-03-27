// Referencias en el Html

import { Todo } from "../classes";
import { todoList } from "../index.js";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
    <li class="${(todo.completado ? 'completed' : '')}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado ? 'checked' : '')}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;

  divTodoList.appendChild(div.firstElementChild);
  return div.firstElementChild;
}

// Eventos
txtInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && txtInput.value.length > 0) {

    const nuevoTodo = new Todo(txtInput.value);
    todoList.insertarTodo(nuevoTodo);

    crearTodoHtml(nuevoTodo);
    txtInput.value = '';
  }
});

divTodoList.addEventListener('click', (e) => {

  const nombreElto = (e.target.localName); // input, label, button
  const todoElto = e.target.parentElement.parentElement;
  const todoId = todoElto.getAttribute('data-id');

  if(nombreElto.includes('input')){
    todoList.marcarCompletado(todoId);
    todoElto.classList.toggle('completed');
  }
});