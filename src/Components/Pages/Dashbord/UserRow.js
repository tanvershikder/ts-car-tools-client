import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user,  setDeleteUser,index }) => {
    
    const { email, role } = user;
    const hendelMakeAdmin = () => {
        fetch(`https://vast-wave-21361.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('failed to make an admin')
                }
                return res.json()})
            .then(data => {
                console.log(data);
                if (data.result.modifiedCount > 0) {
                   
                    toast.success('successfully made an admin')
                }
            })
    }

    return (
            <tr>
                <th>{index+1}</th>
                <td>{email}</td>
                <td>
                    {
                        role !== 'admin'
                        &&
                        <button onClick={hendelMakeAdmin} className="btn">make Admin</button>
                    }
                </td>
                <td><label onClick={() => setDeleteUser(user)} htmlFor="user-modal" className="btn modal-button btn-xs  btn-error">Delete</label></td>
            </tr>
    );
};

export default UserRow;