import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push("/")
    }

    onRemoveClick = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push("/")
    }

    render() {
        return <div>
            Editing the expense: {this.props.expense.description}
            <div><button onClick={this.props.history.goBack}>back</button></div>
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemoveClick}>Remove</button>
        </div>
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((exp) => exp.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeExpense: (data) => dispatch(removeExpense(data)),
    editExpense: (id, expense) => dispatch(editExpense(id, expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)