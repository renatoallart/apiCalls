import React, { useEffect, useState } from 'react'

export const FetchApi = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then(resp => resp.json())
            .then(data => setUsers(data.data))
    }, [])

    console.log(users)
    const allUsers = users.map(user => {
        return(
            <div>
                <img src={user.avatar} alt="avatar" />
                <p>{user.first_name} {user.last_name}</p>
            </div>
        )
    })
    return (
        <div>
            {allUsers}

            <h2>Code</h2>
            <pre>
                <code>
                {JSON.stringify(users, null, 2)}
                </code>
            </pre>
        </div>
    )
}
