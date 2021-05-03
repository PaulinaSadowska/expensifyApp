import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Hello {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info</p>
            <WrappedComponent {...props} />
        </div>
    );
};

const withAuthentication = (WrappedComponent) => {
    return (props) => (
        (props.isAuth) ? <WrappedComponent {...props} /> : <p>Error</p>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthentication(Info);

ReactDOM.render(<AuthInfo isAuth={true} info="from me" />, document.getElementById('app'))