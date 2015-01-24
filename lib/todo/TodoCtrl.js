import {TodoItem} from './TodoItem';

class TodoCtrl {

  constructor(growl, TodoService) {
    this.growl = growl;
    this.service = TodoService;

    this.items = this.service.getAll();
    this.newTodo = '';
  }

  addTodo() {
    let anItem = new TodoItem(this.newTodo);
    this.growl.addInfoMessage(anItem.toString()+' added', {ttl: 2000});
    this.service.add(anItem);
    this.newTodo = '';
  }

  removeTodo(item) {
    let removed = this.service.remove(item);
    this.growl.addWarnMessage(removed.toString()+'removed', {ttl: 2000});
  }

  clearAll() {
    this.service.clearAll();
    this.growl.addErrorMessage('All Clear', {ttl: 2000});
  }

}

TodoCtrl.$inject = ['growl', 'TodoService'];

export { TodoCtrl }