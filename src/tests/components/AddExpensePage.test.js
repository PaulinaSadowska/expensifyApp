import { AddExpensePage } from '../../components/AddExpensePage';
import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expenses'

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <AddExpensePage startAddExpense={addExpense} history={history} />
    );
})

test('should render add expense page', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should submit new expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(addExpense).toHaveBeenCalledWith(expenses[0])
    expect(history.push).toHaveBeenCalledWith("/dashboard")
})