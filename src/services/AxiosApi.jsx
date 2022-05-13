import axios from 'axios'
import { useEffect, useState } from 'react'

export const AxiosApi = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios("https://reqres.in/api/users")
            .then(resp => setUsers(resp.data.data))

    }, [])

    console.log(users)

    const allUsers = users.map(user =>
        <div>
            <img src={user.avatar} alt="avatar" />
            <p>{user.first_name} {user.last_name}</p>
        </div>
    )
    return (
        <div>
            <h1> Axios</h1>
            {allUsers}

            <pre>
                {JSON.stringify(users, null, 2)}
            </pre>
        </div>
    )
}
