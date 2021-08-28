import { EditExpensePage } from '../../components/EditExpensePage';
import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expenses'

let removeExpense, editExpense, history, wrapper;

beforeEach(() => {
    removeExpense = jest.fn()
    editExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage
            removeExpense={removeExpense}
            editExpense={editExpense}
            history={history}
            expense={expenses[2]} />
    );
})

test('should render edit expense page', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2])
    expect(history.push).toHaveBeenCalledWith("/")
})

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenCalledWith({ id: expenses[2].id })
    expect(history.push).toHaveBeenCalledWith("/")
})