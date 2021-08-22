import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Home page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)