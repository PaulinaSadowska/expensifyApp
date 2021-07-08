import React from 'react'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const totalPriceFormatted = numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')
    return <p>
        Viewing {props.expenses.length} expenses totalling {totalPriceFormatted}
    </p>  
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);