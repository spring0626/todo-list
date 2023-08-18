import html from "../js/core.js";
import TodoItem from "./TodoItem.js";
import { connect } from "../js/store.js";

function TodoList({ todoList, filters, filter, editId }) {
    return html`
        <section class="main">
            <input
                id="toggle-all"
                class="toggle-all"
                type="checkbox"
                onchange="dispatch('toggleAll', this.checked)"
                ${todoList.every(filters.completed) && "checked"}
            />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todoList.filter(filters[filter]).map((todo) => TodoItem(todo, editId))}
            </ul>
        </section>
    `;
}

export default connect()(TodoList);
