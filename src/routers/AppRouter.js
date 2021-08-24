import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import LoginPage from '../components/LoginPage';
import EditExpensePage from '../components/EditExpensePage';
import { PageNotFound } from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

export const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" exact={true} component={LoginPage} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={PageNotFound}></Route>
            </Switch>
        </div>
    </Router>
);
