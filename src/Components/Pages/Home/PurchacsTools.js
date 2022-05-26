import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading'
import { CgShoppingBag } from "@react-icons/all-files/cg/CgShoppingBag";

const PurchacsTools = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const NameRef = useRef('');
    const EmailRef = useRef('');
    const QuantityRef = useRef('');
    const LocationRef = useRef('');
    const PhoneRef = useRef('');
    const [error, setError] = useState(null)

    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch(`https://vast-wave-21361.herokuapp.com/products/${id}`).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    let updatequantity = Number(tool?.quantity);
    const minimum = Number(tool?.minimum)

    console.log(minimum);

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

            const url = `https://vast-wave-21361.herokuapp.com/products/${id}`
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

            fetch('https://vast-wave-21361.herokuapp.com/orders', {
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
                    event.target.reset()
                    refetch()
                })
        }
    }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div className='flex justify-center items-center lg:my-10'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl bg-blue-200">
                <figure><img src={tool.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tool.name}</h2>
                    <p>{tool.decreption}</p>
                    <p>Price :{tool.price}</p>
                    <p>Available :{tool?.quantity} Pices</p>
                    <form onSubmit={heldelBuy}>
                        <input type="text" name='name' ref={NameRef} placeholder="User Name" className="input input-bordered w-full max-w-xs my-3" value={user.displayName} disabled />

                        <input type="text" name='email' ref={EmailRef} placeholder="user email" className="input input-bordered w-full max-w-xs my-3" value={user.email} disabled /><br />

                        <label className='text-secondary'>Add Order Quantity</label>
                        <input type="text" name='quantity' defaultValue={minimum} ref={QuantityRef} placeholder={`Enter buying Quantity more then ${minimum} pices`} className="input input-bordered w-full max-w-xs my-3" required />

                        <p className="text-red-500 font-bold">{error}</p>
                        {/* <br /> */}

                        <label className='text-secondary'>Add Order Location</label>
                        <input type="text" name='location' ref={LocationRef} placeholder="Add Location" className="input input-bordered w-full max-w-xs my-3" required />

                        <br />
                        <label className='text-secondary'>Add You Contact</label>
                        <input type="text" name='phone' ref={PhoneRef} placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-3" required />

                        <div className="card-actions justify-end">
                            {(Number(tool?.quantity) < minimum)
                                ?
                                <Link to='/' className="btn btn-primary" >out of stock</Link>
                                :
                                <button className="btn btn-primary" >Confirm order <span className='ml-2 text-2xl text-cyan-500'> <CgShoppingBag/></span></button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchacsTools;