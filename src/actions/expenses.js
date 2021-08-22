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
        database.collection("expenses").add(expense).then((ref) => {
            console.log("saved", ref)
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

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});