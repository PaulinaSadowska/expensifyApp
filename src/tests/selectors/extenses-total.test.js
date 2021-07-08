import getExpensesTotal from '../../selectors/expenses-total.js'

test('should calculate total expenses', () => {
    const expenses = [
        {
            amount: 12,
        },
        {
            amount: 20,
        },
        {
            amount: 45,
        }
    ];

    const result = getExpensesTotal(expenses)

    expect(result).toEqual(77)
})

test('should return 0 if no expenses', () => {
    const result = getExpensesTotal([])

    expect(result).toEqual(0)
})

test('should return sum of single expense', () => {
    const result = getExpensesTotal([{amount: 12}])

    expect(result).toEqual(12)
})