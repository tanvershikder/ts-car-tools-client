import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const ManageOrders = () => {

    const [orders, setorders] = useState([]);


    useEffect(() => {
        const url = "http://localhost:4000/orders";

        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setorders(data))
    }, [])

    const hendeldelete = id => {

        const procide = window.confirm("are you sure ? you want to delete ?")
        if (procide) {
            console.log(id);
            const url = `http://localhost:4000/orders/${id}`
            fetch(url, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        console.log("deleted");
                        const restorders = orders.filter(order => order._id !== id)
                        setorders(restorders)
                    }
                })
        }


    }


    return (
        <div>
            <h2>order {orders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>user Name</th>
                            <th>Tool Name</th>
                            <th>order Quantity</th>
                            <th>Status</th>
                            <th>Manage</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={order._id} className='bg-slate-400'>
                                <td>{index + 1}</td>
                                <td>{order.name}</td>
                                <td>{order.toolName}</td>
                                <td>{order.quantity}</td>
                                <td>
                                    <button className='btn btn-xs btn-success'>pay</button>
                                </td>
                                <td>
                                    <button className='btn btn-xs' onClick={() => hendeldelete(order._id)}>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;