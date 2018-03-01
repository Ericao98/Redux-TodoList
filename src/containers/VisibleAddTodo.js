import AddTodoForm from '../components/AddTodoForm';
import { connect } from 'react-redux';
import { addTodo }  from '../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (value) => dispatch(addTodo(value)),
})

const VisibleAddTodo = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddTodoForm);

export default VisibleAddTodo;
