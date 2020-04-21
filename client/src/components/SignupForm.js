import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupForm = (props) => {
    const [newAcct, setNewAcct] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
    })

    console.log(newAcct);

    const handleChanges = e => {
        setNewAcct({
            ...newAcct,
            [e.target.name]: e.target.value
        })
    }

    const createAccount = account => {
        axios.post('http://localhost:5000/api/register', account)
        .then(res => {
            console.log('new account created', res)
        })
        .catch(err => console.log('error creating account:', err))
    }

    const handleSubmit = e => {
        e.preventDefault();
        createAccount(newAcct);
        props.history.push('/users');
    }

    return (
        <div>
            <h2>Create account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name</label>
                <input 
                    type="string"
                    name="first_name"
                    id="first_name"
                    value={newAcct.first_name}
                    onChange={handleChanges}
                />

                <label htmlFor="last_name">Last Name</label>
                <input 
                    type="string"
                    name="last_name"
                    id="last_name"
                    value={newAcct.last_name}
                    onChange={handleChanges}
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="string"
                    name="email"
                    id="email"
                    value={newAcct.email}
                    onChange={handleChanges}
                />

                <label htmlFor="username">Username</label>
                <input 
                    type="string"
                    name="username"
                    id="username"
                    value={newAcct.username}
                    onChange={handleChanges}
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="string"
                    name="password"
                    id="password"
                    value={newAcct.password}
                    onChange={handleChanges}
                />

                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Log in here.</Link></p>
        </div>
    )
}

export default SignupForm;