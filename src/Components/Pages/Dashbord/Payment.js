import React from 'react';
import { useQuery } from 'react-query';
import {loadStripe} from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import ChackoutFrom from './ChackoutFrom';


const stripePromise = loadStripe('pk_test_51L0VYqIjoDmdgvDrUO0C5ZUrgLT9Zdi3bmtGi5P95AABblBLQEXmfm5ME6oo9BAe3n8mpbP4pdQEFYjWaYtPF7sV00p5YqAipF');


const Payment = () => {

    const { orderid } = useParams()


    const { data: order, isLoading, refetch } = useQuery('tools', () => fetch(`https://vast-wave-21361.herokuapp.com/specificorders/${orderid}`,{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const { name, toolName, quantity, toolPrice } = order;

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-lg my-12">
                <div className="card-body">
                    <p className='text-success'> Hellow , {name}</p>
                    <p className='text-1xl text-secondary'> Your Order is almost done please Confirm your Payment</p>
                    <h2 className="card-title">
                        please pay for {quantity} pices {toolName}
                    </h2>
                    <p>please pay <span className='text-accent'>{toolPrice}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shasow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise} >
                        <ChackoutFrom order={order}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;