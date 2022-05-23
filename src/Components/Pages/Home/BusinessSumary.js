import React from 'react';
import flag from '../../../Images/flag.png'
import { RiFlagLine } from "@react-icons/all-files/ri/RiFlagLine";
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { IoIosPeople } from "@react-icons/all-files/io/IoIosPeople";
import { BiLike } from "@react-icons/all-files/bi/BiLike";
import bg from '../../../Images/bg.png'

const BusinessSumary = () => {
    return (
        <div
            style={{
                background: `url(${bg})`
            }}
            className="my-10]">
            <h3 className="text-6xl text-secondary font-normal font-serif text-center py-5 ">MILLION BUSINESS TRUST US </h3>
            <h3 className="text-3xl text-center ">TRY TO UNDERSTAND USER EXPECTATION </h3>
            <div className='flex justify-center items-center lg:my-2'>
                <hr className='w-20 h-1 border-0 rounded bg-gradient-to-r from-cyan-500 to-blue-500 m-5' />
                <hr className='w-16 h-1 border-0 rounded bg-gradient-to-r from-cyan-500 to-blue-500 m-5' />
                <hr className='w-8 h-1 border-0 rounded bg-gradient-to-r from-cyan-500 to-blue-500 m-5' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className="card max;w-lg">
                    <div className="card-body items-center text-center">
                        <span className='text-accent text-7xl'><RiFlagLine /></span>
                        <h2 className="card-title text-5xl">72</h2>
                        <p className="text-2xl text-accent">countries</p>
                    </div>
                </div>
                <div className="card max;w-lg">
                    <div className="card-body items-center text-center">
                        <span className='text-accent text-7xl'><CgWebsite /></span>
                        <h2 className="card-title text-5xl">200+</h2>
                        <p className="text-2xl text-accent">Complete projects</p>
                    </div>
                </div>
                <div className="card max;w-lg">
                    <div className="card-body items-center text-center">
                        <span className='text-accent text-7xl'><IoIosPeople /></span>
                        <h2 className="card-title text-5xl">150+</h2>
                        <p className="text-2xl text-accent">Happy clients</p>
                    </div>
                </div>
                <div className="card max;w-lg">
                    <div className="card-body items-center text-center">
                        <span className='text-accent text-7xl'><BiLike /></span>
                        <h2 className="card-title text-5xl">300+</h2>
                        <p className="text-2xl text-accent">likes</p>
                    </div>
                </div>

            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl  mx-12">

                <div className="card-body grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className='me-5'>
                        <h2 className="card-title text-3xl text-bold text-accent "> Any Question about us or get a products Request ?</h2>
                        <p className='text-1xl'>Don't fell shy to contact us</p>
                    </div>
                    <div className="card-actions justify-center items-center">
                        <button className="btn btn-accent w-48 text-white text-bold">Request For Quote</button>
                        <button className="btn bg-blue-900 border-0 w-48 font-bold">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSumary;