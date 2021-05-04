import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Home page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
    </header>
);