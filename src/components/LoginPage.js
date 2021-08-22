import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

export class LoginPage extends React.Component {

    onSubmit = () => {
        this.props.startLogin()
    }

    render() {
        return (
            <div>
                <button onClick={this.onSubmit}>Login</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)