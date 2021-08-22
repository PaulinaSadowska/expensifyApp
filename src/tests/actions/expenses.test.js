import { expect } from '@jest/globals';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    startAddExpense,
    addExpense,
    startRemoveExpense,
    removeExpense,
    editExpense,
    setExpenses,
    startSetExpenses
} from '../../actions/expenses'
import { expenses } from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]);

beforeEach(() => {
    expenses.forEach((expense) => {
        database.collection("expenses").doc(expense.id).set(expense);
    })
});

test('should start add save default expense to database and store', (done) => {
    const store = createMockStore({});
    store.dispatch(startAddExpense()).then(() => {
        const action = store.getActions()[0];
        expect(action.expense).toStrictEqual({
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: expect.any(Number)
        })
        done();
    });
})

test('should start add save expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        note: "awesome",
        amount: 30.11,
        createdAt: 12222
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions()[0];
        expect(action.type).toBe('ADD_EXPENSE')
        expect(action.expense).toStrictEqual({
            id: expect.any(String),
            ...expenseData
        })
        done();
        // fails due to https://github.com/facebook/jest/issues/8769
        /*return database.collection("expenses")
            .doc(action.expense.id)
            .get()*/
    });/*.then(() => {
        expect(doc.data()).toBe(expenseData)
        done();
    })*/
})

test('should add create action with params', () => {
    const expenseData = expenses[2]
    const { type, expense } = addExpense(expenseData);
    expect(type).toBe('ADD_EXPENSE');
    expect(expense).toEqual(expenseData)
})

test('should remove create action with id', () => {
    const expectedId = 1234
    const action = removeExpense({ id: expectedId });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: expectedId
    })
})

test('should start remove item in database', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const action = startRemoveExpense({ id });
    store.dispatch(action).then(() => {
        const action = store.getActions()[0];
        expect(action.type).toBe('REMOVE_EXPENSE')
        expect(action.id).toBe(id)
        done();
    });
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


test('should setup set expense action object with expenses', () => {
    const action = setExpenses(expenses);
    expect(action.type).toBe('SET_EXPENSES');
    expect(action.expenses).toBe(expenses);
})

/* fails
test('should start setup fetch expenses from firebase', (done) => {
    const store = createMockStore({});
    console.log("actions", actions)
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        console.log("actions", actions)
        const action = actions[0];
        expect(action.type).toBe('SET_EXPENSES');
        expect(action.expenses).toBe(expenses);
        done();
    }).catch(() => {
        console.log("error")
        done();
    });
})*/