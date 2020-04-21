import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosWithCredentials from '../utils/axiosWithCredentials';

const LoginForm = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [loginError, setLoginError] = useState('');

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    console.log({loginError})

    //login user
    const login = e => {
        e.preventDefault();
        axiosWithCredentials.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            console.log('Successful login', res)
            props.history.push('/users')
            // res.config.withCredentials = true;
        })
        .catch(err => {
            console.log('Error logging user in:', err)
            setLoginError(err)
        })
    }

    //handle submit

    return (
        <div>
            <h2>Welcome back!</h2>
            <form onSubmit={login}>
                <label htmlFor="username">Username</label>
                <input 
                    type="string"
                    name="username"
                    id="username"
                    value={credentials.username}
                    onChange={handleChanges}
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="string"
                    name="password"
                    id="password"
                    value={credentials.password}
                    onChange={handleChanges}
                />

                <button type="submit">Login</button>
            </form>

            {(loginError) ? <p>Oops! Incorrect login. Try again or <Link to="/">create a new account</Link></p> : null}
        </div>
    )
}

export default LoginForm;