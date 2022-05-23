import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading'

const PurchacsTools = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const NameRef = useRef('');
    const EmailRef = useRef('');
    const QuantityRef = useRef('');
    const LocationRef = useRef('');
    const PhoneRef = useRef('');
    const [error, setError] = useState(null)

    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch(`http://localhost:4000/products/${id}`).then(res => res.json()));


    let updatequantity = Number(tool?.quantity);
    const minimum = Number(tool?.minimum)

    const heldelBuy = (event) => {
        event.preventDefault()
        const name = NameRef.current.value;
        const email = EmailRef.current.value;
        const quantity = QuantityRef.current.value;
        const location = LocationRef.current.value;
        const phone = PhoneRef.current.value;


        const newQuantity = Number(quantity)

        const bookingDetails = {
            toolName: tool.name,
            toolPrice: tool.price,
            name: name,
            email: email,
            quantity: quantity,
            location: location,
            phone: phone
        }

        console.log(bookingDetails);

        if (newQuantity < minimum) {
            setError(`please order more then ${minimum} pice`)
            return
        }
        if (newQuantity > updatequantity) {
            setError(`${newQuantity} pices is not available`)
            return
        }
        else {
            // update quantity 
            updatequantity = updatequantity - newQuantity

            const quantity = { updatequantity }

            console.log(quantity);

            const url = `http://localhost:4000/products/${id}`
            console.log(url);
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(quantity)

            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })

            // post order

            fetch('http://localhost:4000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(bookingDetails)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.insertedId) {
                        toast.success(`your order is wait for payment`)
                    }
                    refetch()
                    event.target.reset()
                })
        }
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center lg:my-10'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={tool.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>{tool.decreption}</p>
                    <p>Price :{tool.price}</p>
                    <p>Available :{tool?.quantity} Pices</p>
                    <form onSubmit={heldelBuy}>
                        <input type="text" name='name' ref={NameRef} placeholder="User Name" class="input input-bordered w-full max-w-xs my-3" value={user.displayName} disabled />
                        <input type="text" name='email' ref={EmailRef} placeholder="user email" class="input input-bordered w-full max-w-xs my-3" value={user.email} disabled />
                        <input type="text" name='quantity' defaultValue={minimum} ref={QuantityRef} placeholder={`Enter buying Quantity more then ${minimum} pices`} class="input input-bordered w-full max-w-xs my-3" required />
                        <p className="text-red-500">{error}</p>
                        <input type="text" name='location' ref={LocationRef} placeholder="Add Location" class="input input-bordered w-full max-w-xs my-3" required />
                        <input type="text" name='phone' ref={PhoneRef} placeholder="Phone Number" class="input input-bordered w-full max-w-xs my-3" required />
                        <div class="card-actions justify-end">
                            {(Number(tool?.quantity) < minimum)
                                ?
                                <Link to='/' class= "btn btn-primary" >out of stock</Link>
                                :
                                <button class="btn btn-primary" >Confirm order</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchacsTools;