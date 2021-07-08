import { ExpensesSummary } from '../../components/ExpensesSummary';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expenses'

test('should render expensesSummary', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpensesSummary 
            expenses = {expenses}
        />);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should render expensesSummary for empty list', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpensesSummary 
            expenses = {[]}
        />);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})