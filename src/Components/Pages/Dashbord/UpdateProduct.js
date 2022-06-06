import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';

const UpdateProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const navigae = useNavigate()
    const [loading, setLoading] = useState(false);

    const { productId } = useParams()

    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch(`https://vast-wave-21361.herokuapp.com/products/${productId}`).then(res => res.json()));

    console.log(tool);

    const onSubmit = async data => {

        console.log();

        const product = {
            decreption: data.decreption,
            quantity: data.quantity,
            minimum: data.minimum,
            price: data.price,
        }
        console.log(product);

        const url = `https://vast-wave-21361.herokuapp.com/product/${productId}`
        console.log(url);
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Product Updated ")
                refetch()
                reset()
            })
    }
    return (
        <div className='flex justify-center items-center '>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-100 p-10 lg:px-20 my-10 rounded'>
                <h2 className="text-2xl text-center font-sans font-semibold">Update Product</h2>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Name</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={tool?.name}
                        disabled
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Short Decreption</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Enter Short Decreption"
                        className="input input-bordered w-full max-w-xs"
                        {...register("decreption", {
                            required: {
                                value: true,
                                message: 'decreption is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Product Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Product Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Product Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Product Quantity"
                        className="input input-bordered w-full max-w-xs"
                        required
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Minumum order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter minimum order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        required
                        {...register("minimum", {
                            required: {
                                value: true,
                                message: 'Quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                    </label>
                </div>

                <div className="flex flex-col w-full border-opacity-50">
                    <input type="submit" value="Update Product" className="grid btn btn-warning rounded-box place-items-center input input-bordered w-full max-w-xs" />

                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;