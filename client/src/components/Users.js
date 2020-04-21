import React, { useEffect } from 'react';
import axios from 'axios';
import axiosWithCredentials from '../utils/axiosWithCredentials';

const Users = () => {

    // useEffect(() => {
    //     axiosWithCredentials.get('/api/users')
    //     .then(res => {
    //         console.log("data from get request", res)
    //     })
    //     .catch(err => console.log("COULD NOT FETCH DATA", err))
    // }, [])

    return (
        <div>
            This is where I'll display the users.
        </div>
    )
}

export default Users;