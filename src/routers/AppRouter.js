import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import LoginPage from '../components/LoginPage'
import EditExpensePage from '../components/EditExpensePage'
import { HelpPage } from '../components/HelpPage'
import { PageNotFound } from '../components/PageNotFound'
import { Header } from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={LoginPage} />
                <Route path="/dashboard" exact={true} component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={PageNotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;