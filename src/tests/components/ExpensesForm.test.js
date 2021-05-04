import ExpenseForm from '../../components/ExpenseForm';
import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expenses'


test('should render expense form', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('should render form with data', () => {
    const wrapper = shallow(<ExpenseForm
        expense={expenses[0]}
    />);
    expect(wrapper).toMatchSnapshot();
})