import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    console.log(user.email);

    const { data: orders, isLoading, refetch } = useQuery('tools', () => fetch(`http://localhost:4000/orders/${user.email}`).then(res => res.json()))
    console.log(orders);


    const hendeldelete = id => {
        console.log(id);
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
                        refetch()
                    }
                })
        }
    }

    return (
        <div>
            <p className="text-3xl text-primary text-center py-5">{user?.displayName} orders</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>user Name</th>
                            <th>Tool Name</th>
                            <th>order Quantity</th>
                            <th>Payment</th>
                            <th>manage</th>
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
                                    
                                    {(order.toolPrice && !order.paid) && <Link to={`/dashbord/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                </td>
                                <td>
                                    <button className='btn btn-xs btn-secondary' onClick={() => hendeldelete(order._id)}>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;