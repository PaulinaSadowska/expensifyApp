import React from 'react';
import { connect } from 'react-redux';

import { startLogIn } from '../actions/auth';

export class LoginPage extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.startLogIn()
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.onSubmit}>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogIn: () => dispatch(startLogIn())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)