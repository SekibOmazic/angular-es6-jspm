class TodoItem {

  constructor(text, completed = false) {
    this.text = text;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
  }

  toString() {
    return `${this.text}...`;
  }

}

export { TodoItem };