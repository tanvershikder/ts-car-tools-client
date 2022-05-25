import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const Review = () => {

    const {data:review,isLoading} = useQuery('getreviews',()=>fetch('http://localhost:4000/getreviews').then(res=>res.json()))

    console.log(review);
    
    if(isLoading){
        return <Loading></Loading>
    }
    // const reviews =  review?.slice(0,3)
    // console.log(reviews);

    return (
        <div>
            <h2 className="text-secondary text-center py-5 font-bold text-2xl">All Review</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    review?.map(review => <div key={review._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={review.img} alt="Shoes" className="rounded-xl h-48" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{review.name}</h2>
                            <p>{review.review}</p>
                            <p>{review.ratings}</p>
                        </div>
                    </div>) 
              }
            </div>
        </div>
    );
};

export default Review;