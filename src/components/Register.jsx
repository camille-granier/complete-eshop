import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useRef, useContext } from 'react';
import AuthContext from '../redux/context/auth-context';

const Register = () => {

    const [isLogin, setIsLogin] = useState(false);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if(isLogin) {

        } else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBe_XAVBYsQKMxorakltzhqKxUnNGvCJjo',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            ).then((res) => {
                if(res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed!';
                        if(data && data.error && data.error.message) {
                            errorMessage = data.error.message;
                        }
                        alert(errorMessage);
                        throw new Error(errorMessage);
                    });
                }
            })
            .then((data) => {
                authCtx.login(data.idToken);
                console.log(data)
            })
            .catch((err) => {
                alert(err.message);
            })
        }
    };

    return (
        <>
            <div className="login-form text-center">

                <main className="form-signin">
                    <form onSubmit={submitHandler}>
                        <h1 className="h3 mb-3 fw-normal">Please Sign-up</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" ref={emailInputRef} placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" ref={passwordInputRef} placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-dark" type="submit">Create Account</button>
                        <NavLink to='/login' className='btn ms-2 mt-4'>
                            Login with existing account
                        </NavLink>
                    </form>
                </main>
            </div>
        </>
    );
};

export default Register;