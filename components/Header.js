import html from '../js/core.js'

function Header() {
  return html`
    <header class="header">
      <h1>todo list</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        onkeyup="event.keyCode === 13 && this.value.trim() && dispatch('add', this.value.trim(), '.new-todo')"
      />
    </header>
  `
}

export default Header
