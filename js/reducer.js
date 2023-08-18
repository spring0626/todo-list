import storage from "../utils/storage.js";

const initState = {
    todoList: storage.get(),
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed,
    },
    filter: "all",
    editId: null,
};

const actions = {
    add({ todoList }, title, inputSelector) {
        todoList.push({ id: todoList[todoList.length - 1]?.id + 1 || 0, title, completed: false });
        storage.set(todoList);
        if (inputSelector) {
            setTimeout(() => {
                document.querySelector(inputSelector).focus();
            }, 0);
        }
    },
    toggle({ todoList }, id) {
        const todo = todoList.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        storage.set(todoList);
    },
    toggleAll({ todoList }, status) {
        todoList.forEach((todo) => (todo.completed = status));
        storage.set(todoList);
    },
    destroy({ todoList }, id) {
        const index = todoList.findIndex((todo) => todo.id === id);
        todoList.splice(index, 1);
        storage.set(todoList);
    },
    changeFilter(state, type) {
        state.filter = type;
    },
    clearCompleted(state) {
        state.todoList = state.todoList.filter(state.filters.active);
        storage.set(state.todoList);
    },
    startEdit(state, id, inputSelector) {
        state.editId = id;
        if (inputSelector) {
            setTimeout(() => {
                const input = document.querySelector(inputSelector);
                input.focus();
                input.setSelectionRange(0, input.value.length);
            }, 0);
        }
    },
    endEdit(state, value) {
        if (state.editId !== null) {
            if (value) {
                const index = state.todoList.findIndex((todo) => todo.id === state.editId);
                state.todoList[index].title = value;
                storage.set(state.todoList);
            } else {
                this.destroy(state, state.editId);
            }
            state.editId = null;
        }
    },
};

export default function reducer(state = initState, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}
