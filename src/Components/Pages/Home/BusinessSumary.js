import React from 'react';
import flag from '../../../Images/flag.png'

const BusinessSumary = () => {
    return (
        <div className='bg-base-200 my-10'>
            <h3 className="text-6xl text-secondary font-bold text-center py-5 ">MILLION BUSINESS TRUST US </h3>
            <h3 className="text-4xl text-accent font-bold text-center ">TRY TO UNDERSTAND USER EXPECTATION </h3>
            <div className='flex justify-center items-center lg:my-5'>
                <hr className='w-20 h-1 border-0 rounded bg-gradient-to-r from-cyan-500 to-blue-500 m-5' />
                <hr className='w-16 h-1 border-0 rounded bg-gradient-to-r from-cyan-500 to-blue-500 m-5' />
                <hr className='w-8 h-1 border-0 rounded bg-gradient-to-r from-cyan-500 to-blue-500 m-5' />
            </div>
            <div>
                <div class="card w-96 ">
                    <figure class="px-10 pt-10">
                        <img src={flag} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSumary;