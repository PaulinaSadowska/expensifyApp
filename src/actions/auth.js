import { firebase, googleAuthProvider } from '../firebase/firebase'

// LOG_IN
export const logIn = (user = {}) => ({
    type: 'LOG_IN',
    user
});

export const startLogIn = () => {
    return (dispatch) => {
        return firebase.auth()
            .signInWithPopup(googleAuthProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("user", user)
                dispatch(logIn({
                    user
                }))
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

    };
};