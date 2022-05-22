import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserModal = ({deleteUser,setDeleteUser,refetch}) => {
    const { name,email } = deleteUser;

    const hendelDelete = () => {

        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                if (data.deletedCount) {
                    toast.success(`User ${email} is deleted`)
                    setDeleteUser(null)
                    refetch()
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="user-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are You Sure You Want to Dlete !</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button class="btn btn-xs btn-error" onClick={hendelDelete}>Delete</button>
                        <label for="user-modal" class="btn btn-xs">Cencel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteUserModal;