import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('should add create action with default values', () => {
    const { type, expense } = addExpense();
    expect(type).toBe('ADD_EXPENSE');
    expect(expense).toEqual({
        description: "",
        note: "",
        amount: 0,
        id: expect.any(String),
        createdAt: expect.any(Number)
    })
})

test('should add create action with params', () => {
    const expenseData = {
        description: "test",
        note: "note",
        amount: 888,
        createdAt: 999922
    }
    const { type, expense } = addExpense(expenseData);
    expect(type).toBe('ADD_EXPENSE');
    expect(expense).toEqual({
        ...expenseData,
        id: expect.any(String)
    })
})

test('should remove create action with id', () => {
    const expectedId = 1234
    const action = removeExpense({ id: expectedId });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: expectedId
    })
})


test('should edit create action with id and all updates', () => {
    const expectedId = 1234
    const action = editExpense(expectedId, {
        description: "dupa",
        amount: 666
    });
    expect(action.type).toBe('EDIT_EXPENSE');
    expect(action.id).toBe(expectedId)
    expect(action.updates).toEqual({
        description: "dupa",
        amount: 666
    })
})