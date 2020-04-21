import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosWithCredentials from '../utils/axiosWithCredentials';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
    console.log({users})

    useEffect(() => {
        axiosWithCredentials.get('/users')
        .then(res => {
            console.log("data from get request", res)
            setUsers(res.data)
        })
        .catch(err => console.log("COULD NOT FETCH DATA", err))
    }, [])

    return (
        <div>
            {(users.length < 1) ? 
                <p>You must <Link to="/login">sign in</Link> or <Link to="/">create an account</Link> to see a list of users.</p> 
            : null}
                {/* users.map(u => (
                    <div>
                        <p>{u.first_name} {u.last_name}</p>
                        <p>{u.email}</p>
                    </div>
                ))
            } */}
            {users.map(u => (
                <div>
                    <p>{u.first_name} {u.last_name}</p>
                    <p>{u.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Users;