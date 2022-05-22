import React, { useEffect, useState } from 'react';

const UseAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading,setAdminLoading] = useState(true)
    
    useEffect(()=>{
        const email = user?.email
        if(email){
            fetch(`http://localhost:4000/admin/${email}`, {
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