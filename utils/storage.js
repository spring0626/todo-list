export default {
  get() {
    return JSON.parse(localStorage.getItem('todo-list')) || []
  },
  set(todoList) {
    localStorage.setItem('todo-list', JSON.stringify(todoList))
  },
}
