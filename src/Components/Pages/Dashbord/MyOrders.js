import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../Firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    console.log(user.email);

    const { data: orders, isLoading, refetch } = useQuery('tools', () => fetch(`http://localhost:4000/orders/${user.email}`).then(res => res.json()))

    return (
        <div>
            <p className="text-3xl text-primary text-center py-5">{user?.displayName} orders</p>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>user Name</th>
                            <th>Tool Name</th>
                            <th>order Quantity</th>
                            <th>Payment</th>
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
                                    {/* {(appointment.price && !appointment.paid) && <Link to={`payment/${appointment._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>} */}
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