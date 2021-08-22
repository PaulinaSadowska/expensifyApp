import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { startSetExpenses } from './actions/expenses'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        console.log("logged in", uid)
    } else {
        console.log("logged out", uid)
    }
});