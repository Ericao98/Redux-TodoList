import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodoList = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        default:
            throw new Error ('Unexpected filter: ', filter);
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodoList(state.todos, state.filter)
});

const mapDispatchToProps = (dispatch) => ({
    onListClick: (id) => {dispatch(toggleTodo(id))}
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
