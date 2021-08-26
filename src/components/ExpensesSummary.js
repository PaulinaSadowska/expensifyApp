import React from 'react'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import expenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
    const { expenses } = props
    const totalPriceFormatted = numeral(getExpensesTotal(expenses) / 100).format('$0,0.00')
    const expenseWord = (expenses.length === 1) ? "expense" : "expenses"
    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">Viewing <span>{expenses.length}</span> {expenseWord} totalling <span>{totalPriceFormatted}</span></h2>
                <div className="page-header__actions">
                    <Link className="button" to="/create" exact={true}>Add expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);