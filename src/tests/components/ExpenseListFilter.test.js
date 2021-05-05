import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, filters, wrapper;

beforeEach(() => {
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    filters = {
        text: "hello",
        sortBy: "amount",
        startDate: moment(123),
        endDate: moment(222),
    }

    wrapper = shallow(
        <ExpenseListFilters
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            filters={filters} />
    );
})

test('should render edit expense page', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render edit expense page with alt filters', () => {
    const altFilters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,
    }
    wrapper.setProps({ filters: altFilters })
    expect(wrapper).toMatchSnapshot();
})

test('should text change', () => {
    const value = "new text"
    wrapper.find('input').simulate('change', { target: { value } })
    expect(setTextFilter).toHaveBeenCalledWith(value)
})

test('should sort by date', () => {
    const value = "date"
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const value = "amount"
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should sort not change', () => {
    const value = "anything"
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByAmount).not.toHaveBeenCalled()
    expect(sortByDate).not.toHaveBeenCalled()
})

test('should date changes', () => {
    const dates = { startDate: moment(333), endDate: moment(3423) };
    wrapper.find(DateRangePicker).prop('onDatesChange')(dates);
    expect(setStartDate).toHaveBeenCalledWith(dates.startDate);
    expect(setEndDate).toHaveBeenCalledWith(dates.endDate);
})

test('should date focus changes', () => {
    expect(wrapper.calendarFocused).toBe(undefined)
    wrapper.find(DateRangePicker).prop('onFocusChange')("startDate");
    expect(wrapper.state().calendarFocused).toBe("startDate")
    wrapper.find(DateRangePicker).prop('onFocusChange')("endDate");
    expect(wrapper.state().calendarFocused).toBe("endDate")
})