export class TodoList {
  constructor() {
    // this.todos = [];
    this.cargarLocalStorage();
  }

  insertarTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter(todo => todo.id != id);
    this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      console.log(id, todo.id);
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter(todo => !todo.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    // JSON.stringify transforma el objeto en un JSON
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  cargarLocalStorage() {
    //   // JSON.parse transforma el JSON en un objeto
    this.todos = (localStorage.getItem('todo'))
      ? JSON.parse(localStorage.getItem('todo'))
      : [];
  }
}