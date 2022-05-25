import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteUserModal from './DeletedUserModal';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [deleteUser,setDeleteUser] = useState(null)

    const { data:users, isLoading ,refetch} = useQuery('tools', () => fetch('http://localhost:4000/users',{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }, 
    }).then(res => res.json()))

    console.log(users);

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
                            users?.map((user,index)=><UserRow
                                key={user._id} 
                                user={user}
                                refetch={refetch}
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
                refetch={refetch}
            ></DeleteUserModal>}
        </div>
    );
};

export default MakeAdmin;