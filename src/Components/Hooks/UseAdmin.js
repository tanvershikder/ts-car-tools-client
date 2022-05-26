import React, { useEffect, useState } from 'react';

const UseAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading,setAdminLoading] = useState(true)
    
    useEffect(()=>{
        const email = user?.email
        if(email){
            fetch(`https://vast-wave-21361.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data =>{
                setAdmin(data.admin)
                setAdminLoading(false)
            })
        }
    },[user])
    return [admin,adminLoading]
};

export default UseAdmin;