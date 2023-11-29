import html from '../js/core.js'
import { connect } from '../js/store.js'
import Header from '../components/Header.js'
import TodoList from '../components/TodoList.js'
import Footer from '../components/Footer.js'

function App({ todoList }) {
  return html`
    <section class="todo-app">
      ${Header()} ${todoList.length > 0 && TodoList()}
      ${todoList.length > 0 && Footer()}
    </section>
  `
}

export default connect()(App)
