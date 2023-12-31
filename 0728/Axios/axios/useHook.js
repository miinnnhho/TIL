import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    // state인 users를 useState()로 선언하세요.
    const [users, setUsers] = useState([]);

    // async와 await를 이용한 useEffect()를 선언하세요.
    useEffect(() => {
        async function fetchUser() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        }
        fetchUser();
    }, []);

    const userName = users.map((user) => <li key={user.id}> {user.name} </li>);

    return (
        <>
            <h4>사용자 리스트</h4>
            <div> {userName} </div>
        </>
    );
}

export default Users;
