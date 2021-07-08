import { ExpensesSummary } from '../../components/ExpensesSummary';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expenses'

test('should render expensesSummary', () => {
    const wrapper = shallow(<ExpensesSummary expenses = {expenses} />);
    expect(wrapper).toMatchSnapshot()
})

test('should render expensesSummary for empty list', () => {
    const wrapper = shallow(<ExpensesSummary expenses = {[]} />);
    expect(wrapper).toMatchSnapshot()
})

test('should render expensesSummary for list with only one item', () => {
    const wrapper = shallow(<ExpensesSummary expenses = {[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot()
})