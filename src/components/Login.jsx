import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useRef } from 'react';

const Login = () => {

    const [isLogin, setIsLogin] = useState(false);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const entereedEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if(isLogin) {

        } else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBe_XAVBYsQKMxorakltzhqKxUnNGvCJjo',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: entereedEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then(res => {
                if(res.ok) {

                } else {
                    
                }
            })
        }
    };

    return (
        <>
            <div className="login-form text-center">

                <main className="form-signin">
                    <form onSubmit={submitHandler}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" ref={emailInputRef} placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" ref={passwordInputRef} placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>
                        <NavLink to='/register' className='btn ms-2 mt-4'>
                            Create a new account
                        </NavLink>
                    </form>
                </main>
            </div>
        </>
    );
};

export default Login;