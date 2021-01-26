import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {  startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
// import { removeError, setError } from '../../actions/ui';
// import validator from 'validator';


export const LoginScreen = () => {
    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui);
    

    const [formValues, handleInputChange] = useForm({
        email:'jime@gmail.com',
        password: '123456'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        
        dispatch(startLoginEmailPassword(email, password));
        
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    // const handleTwitterLogin = () => {
    //     dispatch(startTwitterLogin());
    // }

    // const isFormValid = () => {
       
    //     if ( !validator.isEmail(email)) { 
    //         dispatch(setError('El email es invalido'));
    //         return false;
    //     }else if ( password.length < 5){
    //         dispatch(setError('La contraseña es muy corta'));
    //         return false;
    //     }
    //     dispatch(removeError());
    //     return true;
    // }

    return (
        <>
           <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}
                className="animate__animated animate__fadeIn animate__faster"
            >

                {/* {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                } */}

                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >Login
                </button>

                <hr/>
                <div className="auth__social-networks">
                    <p> Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">
                    Create new account
                </Link>

            </form> 

            </>
        
    )
}
