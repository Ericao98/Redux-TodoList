import React from 'react';
import VisibleAddTodo from '../containers/VisibleAddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

const App = () => {
    return (
        <div>
            <VisibleAddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
};

export default App;
