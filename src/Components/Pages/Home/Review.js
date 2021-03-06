import React,{useState} from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const Review = () => {

    const { data: review, isLoading } = useQuery('getreviews', () => fetch('https://vast-wave-21361.herokuapp.com/getreviews').then(res => res.json()))




    if (isLoading) {
        return <Loading></Loading>
    }

    let reverseArrayall = [...review]?.reverse()
    const reverseArray = reverseArrayall.slice(0,3)
    console.log(reverseArray);


    return (
        <div>
            <h2 className="text-secondary text-center py-5 font-bold text-2xl">All Review</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:p-12 bg-blue-50'>
               
                {
                    reverseArray?.map(review => <div key={review._id} className="card max:w-lg mx-8  transform transition duration-500 hover:scale-110 bg-orange-100 shadow-xl">
                        <figure className="">
                            <img src={review.img} alt="Shoes" className="rounded-full h-48 w-48 mt-3" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title capitalize text-gray">{review.name}</h2>
                            <p className='capitalize text-amber-500 text-1xl'>{review.review}</p>
                            <p className='text-orange-600'>{review.ratings}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;