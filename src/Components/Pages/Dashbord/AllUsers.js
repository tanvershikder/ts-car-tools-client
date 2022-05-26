import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import DeleteUserModal from './DeletedUserModal';
import UserRow from './UserRow';
import Loading from '../../Shared/Loading'

const MakeAdmin = () => {
    const [user, setUser] = useState([])
    const [deleteUser, setDeleteUser] = useState(null)

    // const { data:user, isLoading ,refetch} = useQuery('tools', () => fetch('https://vast-wave-21361.herokuapp.com/users',{
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json',
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }, 
    // }).then(res => res.json()))

    useEffect(() => {
        fetch(`https://vast-wave-21361.herokuapp.com/users`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user])

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    console.log(user);
    let users = []
    if (user) {
        users = user;
    }

    return (
        <div>
            <h3 className="text-3xl text-blue-500">this is make admin {users?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                setDeleteUser={setDeleteUser}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteUser && <DeleteUserModal
                deleteUser={deleteUser}
                setDeleteUser={setDeleteUser}
                
            ></DeleteUserModal>}
        </div>
    );
};

export default MakeAdmin;