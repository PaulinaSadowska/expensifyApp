import React from 'react'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import expenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
    const { expenses } = props
    const totalPriceFormatted = numeral(getExpensesTotal(expenses)/100).format('$0,0.00')
    const expenseWord = (expenses.length===1) ? "expense" : "expenses"
    return <p>
        <h2>Viewing {expenses.length} {expenseWord} totalling {totalPriceFormatted}</h2>
    </p>  
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);