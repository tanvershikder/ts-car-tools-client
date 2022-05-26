import React from 'react';

const Subcribeus = () => {
    return (
        <div className="hero lg:min-h-screen bg-blue-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" lg:mx-10 text-center lg:text-left">
                        <h1 className="text-5xl font-bold font-serif">Subscribe Now !</h1>
                        <p className="py-6">Get Discount by subscribe us . and you will get all update news by you prodiding email. We will send all update news about our website. </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body bg-blue-300">
                            <h2 className="text-2xl text-secondary font-bold text-center m-5">Get All Update Subscribe Us</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="give your email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Subcribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subcribeus;