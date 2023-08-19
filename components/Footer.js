import html from "../js/core.js";
import { connect } from "../js/store.js";

function Footer({ todoList, filters, filter }) {
    return html`
        <footer class="footer">
            <span class="todo-count"><strong>${todoList.filter(filters.active).length}</strong> item left</span>
            <ul class="filters">
                ${Object.keys(filters).map(
                    (type) => html`
                        <li>
                            <a
                                class="${filter === type && "selected"}"
                                href="#"
                                onclick="dispatch('changeFilter', '${type}')"
                            >
                                ${type[0].toUpperCase() + type.slice(1)}
                            </a>
                        </li>
                    `
                )}
            </ul>
            ${todoList.some(filters.completed) &&
            html`<button class="clear-completed" onclick="dispatch('clearCompleted')">Clear completed</button>`}
        </footer>
    `;
}

export default connect()(Footer);
