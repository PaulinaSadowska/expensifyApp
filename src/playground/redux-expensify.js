import { useReducer } from 'react';
import { createStore, combineReducers } from 'redux'
import { v1 as uuid } from 'uuid'

// ADD_EXPENSE
const addExopense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = Date.now()
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description, note, amount, createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER

const setTextFilter = (text = "") => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE"
})

// SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
})
// SET_START_DATE

const setStartDate = (timestamp) => ({
    type: "SET_START_DATE",
    timestamp
})

// SET_END_DATE
const setEndDate = (timestamp) => ({
    type: "SET_END_DATE",
    timestamp
})


const expensesReducerDefaultsState = []

const expensesReducer = (state = expensesReducerDefaultsState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id != action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            });
        default:
            return state;
    }
}

const filtersReducerDefaultsState = {
    text: "",
    sortBy: "date", // date, amount
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultsState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.timestamp
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.timestamp
            }
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate != 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((expense1, expense2) => {
        if(sortBy == "amount"){
            return (expense1.amount < expense2.amount) ? 1 : -1;
        } else if(sortBy == "date"){
            return (expense1.createdAt < expense2.createdAt) ? 1 : -1;
        }
    })
};

store.subscribe(() => {
    const { expenses, filters } = store.getState();
    console.log(getVisibleExpenses(expenses, filters));
});
const expense1 = store.dispatch(addExopense({
    description: "Rent",
    amount: 99999
}))
const expense2 = store.dispatch(addExopense({
    description: "Cat food",
    amount: 666
}))
const expense3 = store.dispatch(addExopense({
    description: "waciki",
    amount: 1000
}))

/*store.dispatch(removeExpense({
    id: expense1.expense.id
}))
store.dispatch(editExpense(expense2.expense.id, {
    amount: 5000
}))*/

store.dispatch(sortByAmount());

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
