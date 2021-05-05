import ExpenseForm from '../../components/ExpenseForm';
import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expenses'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates';


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

test('should render error for invalid', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate("submit", { preventDefault: () => { } });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper.find('p').text()).toEqual("Enter description and amount")
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "newDescription"
    wrapper.find('input').find({ placeholder: "description" }).simulate("change", { target: { value } })
    expect(wrapper.state('description')).toBe(value)
})

test('should set note', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "newNote"
    wrapper.find('textarea').simulate("change", { target: { value } })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "25.52"
    wrapper.find('input').at(1).simulate("change", { target: { value } })
    expect(wrapper.state('amount')).toBe(value)
})

test('should not set invalid amount', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "12.315"
    wrapper.find('input').at(1).simulate("change", { target: { value } })
    expect(wrapper.state('amount')).toBe('')
});

test('should call onSubmit', () => {
    const description = "newDescription"
    const amount = "25.52"
    const submitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm onSubmit={submitSpy} />);
    wrapper.find('input').at(0).simulate("change", { target: { value: description } })
    wrapper.find('input').at(1).simulate("change", { target: { value: amount } })
    wrapper.find('form').simulate("submit", { preventDefault: () => { } });

    expect(submitSpy).toHaveBeenCalledWith({
        "amount": 2552,
        "createdAt": 0,
        "description": "newDescription",
        "note": ""
    });
});

test('should set new date', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = moment("12/05/2021")
    wrapper.find(SingleDatePicker).prop("onDateChange")(value)
    expect(wrapper.state('createdAt')).toBe(value)
});

test('should set calendarFocused', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper.state('calendarFocused')).toBe(false)
    wrapper.find(SingleDatePicker).prop("onFocusChange")({ focused: true })
    expect(wrapper.state('calendarFocused')).toBe(true)
});