import { v1 as uuid } from 'uuid'
import moment from 'moment';
import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense = {}) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = "",
            note = "",
            amount = 0,
            createdAt = moment().valueOf()
        } = expenseData;
        const expense = { description, note, amount, createdAt }
        return database.collection("expenses").add(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.id,
                ...expense
            }))
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return database.collection("expenses").doc(id).delete().then(() => {
            dispatch(removeExpense({ id }))
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.collection("expenses").doc(id).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        });
    };
};

//SET_EXPENSES
export const setExpenses = (expenses = []) => ({
    type: 'SET_EXPENSES',
    expenses
});


export const startSetExpenses = () => {
    return (dispatch) => {
        return database.collection("expenses").get().then((querySnapshot) => {
            const expenses = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                expenses.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            dispatch(setExpenses(expenses))
        });
    };
};
