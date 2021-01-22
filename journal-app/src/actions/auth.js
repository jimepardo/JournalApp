import { types } from '../types/types';
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig';

export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {

        setTimeout( () => {
            dispatch(login(123, 'Juli'));
        }, 3500);
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const login = (uid, displayName) => ({  
    type: types.login,
    payload: {
        uid,
        displayName
    }
});
