import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Payment = () => {

    const {orderid} = useParams()
    console.log(orderid);

    const url = `https://pacific-stream-06908.herokuapp.com/bookings/${orderid}`

    const { data: appointment, isLoading } = useQuery(['booking', orderid], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const { patientName, treatment, date, price } = appointment;

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-lg my-12">
                <div className="card-body">
                    <p className='text-success'> Hellow ,</p>
                    <h2 className="card-title">
                        please pay for 
                    </h2>
                    <p>we will see you on </p>
                    <p>please pay </p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shasow-2xl bg-base-100">
                <div className="card-body">
                    {/* <Elements stripe={stripePromise} >
                        <CheckoutFrom appointment={appointment}/>
                    </Elements> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;