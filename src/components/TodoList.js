import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onListClick }) => {
    return (
        <ul>
            {
                todos.map(todo => 
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => onListClick(todo.id)}
                    />
                )
            }
        </ul>
    );
};

export default TodoList;
