import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
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
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">
                        Editing the expense: <span>{this.props.expense.description}</span>
                    </h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <div>
                    <button
                        className="button button--secondary"
                        onClick={this.onRemoveClick}
                    >Remove Expense
                    </button>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((exp) => exp.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeExpense: (data) => dispatch(startRemoveExpense(data)),
    editExpense: (id, expense) => dispatch(startEditExpense(id, expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)