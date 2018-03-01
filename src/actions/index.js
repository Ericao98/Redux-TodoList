let nextId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextId++,
    text,
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY',
    filter,
});

export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
};