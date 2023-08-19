import html from "../js/core.js";

function TodoItem(todo, editId) {
    return html`
        <li class="${todo.completed && "completed"} ${editId === todo.id && "editing"}">
            <div class="view">
                <input
                    class="toggle"
                    type="checkbox"
                    ${todo.completed && "checked"}
                    onchange="dispatch('toggle', ${todo.id})"
                />
                <label ondblclick="dispatch('startEdit', ${todo.id}, '.editing .edit')">${todo.title}</label>
                <button class="destroy" onclick="dispatch('destroy', ${todo.id})"></button>
            </div>
            <input
                class="edit"
                value="${todo.title}"
                onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || 
                event.keyCode === 27 && dispatch('endEdit', '${todo.title}')"
                onblur="dispatch('endEdit', this.value.trim())"
            />
        </li>
    `;
}

export default TodoItem;
