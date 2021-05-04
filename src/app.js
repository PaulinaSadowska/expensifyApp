import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { addExpense } from './actions/expenses'
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))

store.dispatch(addExpense({
    description: "Rent",
    amount: 99999
}))
store.dispatch(addExpense({
    description: "Cat food",
    amount: 2000
}))

store.dispatch(addExpense({
    description: "Water bill",
    amount: 40099
}))