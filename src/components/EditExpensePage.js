import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    return <div>
        Editing the expense: {props.expense.description}
        <div><button onClick={props.history.goBack}>back</button></div>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense))
                props.history.push("/")
            }}
        />
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }))
            props.history.push("/")
        }}>Remove</button>
    </div>
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((exp) => exp.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)