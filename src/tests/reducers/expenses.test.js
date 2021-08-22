import expensesReducer from '../../reducers/expenses'
import { expenses } from '../fixtures/expenses'

test('should setup default expenses', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense with id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id })
    expect(state.length).toBe(2);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense when not found', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: "2182" })
    expect(state.length).toBe(3);
    expect(state).toEqual(expenses)
})

test('should add expense', () => {
    const newExpense = {}
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense: newExpense })
    expect(state.length).toBe(4);
    expect(state).toEqual([...expenses, newExpense])
})

test('should set expenses', () => {
    const state = expensesReducer([{ test: "dummy data" }], { type: 'SET_EXPENSES', expenses })
    expect(state.length).toBe(3);
    expect(state).toEqual(expenses)
})

test('should edit expense', () => {
    const updates = { description: "test" }
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', updates, id: expenses[0].id })
    expect(state.length).toBe(3);
    const updatedExpense = {
        ...expenses[0],
        description: "test"
    }
    expect(state).toEqual([updatedExpense, expenses[1], expenses[2]])
})

test('should do nothing when element to edit not found', () => {
    const updates = { description: "test" }
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', updates, id: "666" })
    expect(state).toEqual(expenses)
})
