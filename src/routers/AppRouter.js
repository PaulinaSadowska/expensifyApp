import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import LoginPage from '../components/LoginPage';
import EditExpensePage from '../components/EditExpensePage';
import { HelpPage } from '../components/HelpPage';
import { PageNotFound } from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory()

export const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" exact={true} component={LoginPage} />
                <PrivateRoute path="/dashboard" exact={true} component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={PageNotFound}></Route>
            </Switch>
        </div>
    </Router>
);
