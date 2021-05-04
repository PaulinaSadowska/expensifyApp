import moment from 'moment';
import selectExpenses from '../../selectors/expenses'

const now = moment("12-25-2005", "MM-DD-YYYY")
const expenses = [
    {
        id: "1",
        description: 'Gum',
        note: "",
        amount: 195,
        createdAt: now.valueOf()
    },
    {
        id: "2",
        description: 'Rent',
        note: "",
        amount: 109500,
        createdAt: now.clone().subtract(4, 'd').valueOf()
    },
    {
        id: "3",
        description: 'Credit card',
        note: "",
        amount: 4500,
        createdAt: now.clone().add(4, 'd').valueOf()
    }
]
test('should filter by text', () => {
    const filters = {
        text: 'e',
        sortBy: "date"
    }
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1]])
})
test('should filter by start date', () => {
    const filters = {
        sortBy: "date",
        startDate: now.clone()
    }
    const result = selectExpenses(expenses, filters);

    expect(result.length).toBe(2)
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by end date', () => {
    const filters = {
        sortBy: "date",
        endDate: now.clone().subtract(1, 'd')
    }
    const result = selectExpenses(expenses, filters);

    expect(result.length).toBe(1)
    expect(result).toEqual([expenses[1]])
})

test('should sort by date', () => {
    const filters = {
        sortBy: "date"
    }
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount', () => {
    const filters = {
        sortBy: "amount"
    }
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})