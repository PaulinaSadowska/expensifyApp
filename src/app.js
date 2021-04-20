import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => {
    return <p>expense dashboard page</p>
};

const AddExpensePage = () => {
    return <p>add expense page</p>
};

const EditExpensePage = () => {
    return <p>Edit your expense!</p>
}

const HelpPage = () => {
    return <p>I cannot help you, sorry</p>
}
const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" exact={true} component={ExpenseDashboardPage} />
            <Route path="/create" exact={true} component={AddExpensePage} />
            <Route path="/edit" exact={true} component={EditExpensePage} />
            <Route path="/help" exact={true} component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'))