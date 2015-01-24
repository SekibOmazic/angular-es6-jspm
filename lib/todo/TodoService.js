import { TodoItem } from './TodoItem';

class TodoService {

  constructor() {
    this.todos = [
      new TodoItem('Learn Angular 1.0', true),
      new TodoItem('Learn Angular 2.0'),
      new TodoItem('Learn AtScript')
    ];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(todo) {
    let index = this.todos.indexOf(todo);
    let removedItem = this.todos.splice(index, 1);
    return removedItem;
  }

  getAll() {
    return this.todos;
  }

  clearAll() {
    // with this.todos = [] the TodoCtrl.items would have an old reference
    // and no update would take place
    this.todos.length = 0;
  }

}

export { TodoService };
