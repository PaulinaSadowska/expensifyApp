import moment from 'moment'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'

test('set text filter with no text', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
})

test('set text filter with text', () => {
    const action = setTextFilter("someText")
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "someText"
    })
})

test('sort by amount', () => {
    const action = sortByAmount()
    expect(action.type).toBe("SORT_BY_AMOUNT")
})

test('sort by date', () => {
    const action = sortByDate()
    expect(action.type).toBe("SORT_BY_DATE")
})

test('set start date', () => {
    const action = setStartDate(moment(1234))
    expect(action).toEqual({
        type: "SET_START_DATE",
        timestamp: moment(1234)
    })
})

test('set end date', () => {
    const action = setEndDate(moment(4321))
    expect(action).toEqual({
        type: "SET_END_DATE",
        timestamp: moment(4321)
    })
})