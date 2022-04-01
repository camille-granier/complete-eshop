import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useRef, useContext, } from 'react';
import AuthContext from '../redux/context/auth-context';

const Login = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorM, setErrorM] = useState('');

    const navigate = useNavigate();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true)
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBe_XAVBYsQKMxorakltzhqKxUnNGvCJjo',
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
                setIsLoading(false)
                if(res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed!';
                        if(data && data.error && data.error.message) {
                            errorMessage = data.error.message;
                        }
                        setErrorM(errorMessage);
                        throw new Error(errorMessage);
                    });
                }
            })
            .then((data) => {
                const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
                authCtx.login(data.idToken);
                navigate('/');
            })
            .catch((err) => {
            });
    };

    const Error = () => {
        const errorText = errorM.replace("_", " ");

        return (
            <p className='text-danger'>{errorText}</p>
        )
    }

    return (
        <>
            <div className="login-form text-center">

                <main className="form-signin">
                    <form onSubmit={submitHandler}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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
                        {!isLoading ? <button className="w-100 btn btn-lg btn-dark" type="submit">Sign in</button> : <p>Loging in</p> }
                        {errorM && <Error/>}
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