import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
// console.log(user);
    const imagestorage_key = '8c9e657645bc7264c5c4e9c24848e699';

    const onSubmit = async (data) => {
        const formData = new FormData();
        const image = data.image[0];
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imagestorage_key}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.success) {
                    const img = result.data.url
                    const userinfo = {
                        img: img,
                        phone:data.phone
                    }
                    console.log(userinfo);
                    // send to you database
                    fetch(`http://localhost:4000/userinfo/${user.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(userinfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result.result.modifiedCount);
                            if (result.result.modifiedCount > 0) {
                                toast.success('user update successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to update user')
                            }
                        })
                }
            })
    }

    return (
        <div className='flex justify-center items-center bg-slate-200 '>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)} className='py-10 bg-red-100 my-10 p-10'>
                    <p className="text-3xl text-accent text-center"><span className='text-secondary'>{user.displayName}</span> Details</p>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            value={user?.displayName}
                            disabled
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Email</span>
                        </label>
                        <input
                            type="email"
                            className="input input-bordered w-full max-w-xs"
                            value={user?.email}
                            disabled
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-base font-semibold">update Conatact Number</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"

                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-base font-semibold">upload your image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"

                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    

                    <div className="flex flex-col w-full border-opacity-50">
                        <input type="submit" value="Update Your Profile" className="grid btn btn-primary rounded-box place-items-center input input-bordered w-full max-w-xs" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;