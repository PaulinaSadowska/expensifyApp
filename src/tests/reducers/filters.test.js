import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    })
})

test('should sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe("amount")
})

test('should sort by date', () => {
    const currentState = {
        text: "hello",
        sortBy: "amount",
        startDate: moment(1234),
        endDate: moment(4321),
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe("date")
})

test('should set start date', () => {
    const expectedDate = moment(1222);
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', timestamp: expectedDate })
    expect(state.startDate).toBe(expectedDate)
})

test('should set end date', () => {
    const expectedDate = moment(12444);
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', timestamp: expectedDate })
    expect(state.endDate).toBe(expectedDate)
})

test('should set text', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: "test" })
    expect(state.text).toBe("test")
})