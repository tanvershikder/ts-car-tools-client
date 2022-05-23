import { async } from '@firebase/util';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
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
                // console.log(data);
                if(result.success){
                    const img = result.data.url
                    const review ={
                        review : data.review,
                        ratings : data.ratings,
                        img : img
                    }
                    console.log(review);

                    fetch('http://localhost:4000/review',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(review)
                })
                .then(res=>res.json())
                .then(inserted =>{
                    console.log(inserted);
                    if(inserted.insertedId){
                        toast.success('Review added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add Review')
                    }
                })
                }
                
            })
    }

    return (
        <div className=' text-center'>
            <h3 className="text-2xl text-success font-bold lg:py-5">Give your Review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div className='form-control w-full max-w-xs'>
                    <input
                        type="text"
                        placeholder="Give Your Review"
                        className="input input-bordered input-primary w-full max-w-xs m-3"

                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Review is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                    </label>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <input
                        type="text"
                        placeholder="Give Your Ratings"
                        className="input input-bordered input-primary w-full max-w-xs m-3"

                        {...register("ratings", {
                            required: {
                                value: true,
                                message: 'Ratings is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                    </label>
                </div>

                <div className='form-control w-full max-w-xs'>
                    <label for="files" class="btn max-w-lg">Upload Image</label>
                    <input
                        type="file"
                        id="files"
                        className="input hidden input-bordered w-full max-w-lg"

                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>


                <div className='form-control w-full max-w-xs'>
                    <input type="submit" placeholder="Type here" class="btn btn-primary w-full max-w-lg m-3" />
                </div>



            </form>
        </div>
    );
};

export default AddReview;