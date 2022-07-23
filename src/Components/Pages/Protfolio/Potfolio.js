import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import myImg from "../../../Images/myimg (1).jpg"

const Potfolio = () => {
    const [user] = useAuthState(auth)
    console.log(user);

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200 shadow-2xl ">
                    
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={myImg} className='h-96 w-96' alt='Myimg'/>
                        {/* <img src="https://ibb.co/NyyPd4x" alt='Myimg' className='' /> */}
                        <div className='m-5'>
                            <h1 className="text-5xl font-bold ">Tanver Shikder</h1>
                            <h1 className="text-2xl text-info">Hi, I am Tanver Shikder , I am a MERN Developer. </h1>
                            <h1 className='text-1xl text-secondary'>I am A student of Computer Technology in Chattogram Polytechnic Institute</h1>
                            <h1>I am a student of Programming Hero Batch 5</h1>

                            <p className='text-2xl m-3 text-info'>Skills :</p>
                            <div className='text-center'>
                                <p>React js</p>
                                <p>Node js</p>
                                <p>Mongodb</p>
                                <p>Express</p>
                                <p>Stripe</p>
                                <p>sendGrid</p>
                                <p>Firebase Authentication</p>
                                <p>Html</p>
                                <p>css</p>
                                <p>Bootsrap css</p>
                                <p>Tailwind css</p>
                                <p>API</p>
                                <p>JWT</p>
                            </div>
                        <a href="https://tanver-portfolio.web.app/" target="blank" className='btn btn-primary'> Potfolio <AiOutlineArrowRight className='text-3xl'/></a>
                        </div>
                    </div>
                </div>
                <p className='text-center text-3xl text-blue-600 lg:my-5 my-3'>My 3 website link are given Bellow </p>

                <div className='text-2xl lg:mx-10'>
                    <p className='text-green-700'>1 / It's is Simple Store management website , with node js, react js, mongodb,express, Firebase , React Firebase Hooks ,Boostrap , JWT</p>
                    <p className='flex mx-10 justify-center items-center'><span><AiOutlineArrowRight /></span> <a href="https://ts-mackbook.web.app/" className='text-link text-yellow-700'>Ts-Mackbook Store </a></p>
                </div>
                <div className='text-2xl lg:mx-10 my-5'>
                    <p className='text-blue-700'>1 / It's is Simple Apointment management website with  react js, Firebase , React Firebase Hooks,Boostrap ,JWT,Css</p>
                    <p className='flex mx-10 justify-center items-center'><span><AiOutlineArrowRight /></span> <a href="https://dr-newyas-appointment-servoce.web.app/" className='text-link text-yellow-700'>Dr-NewYas Appointment</a></p>
                </div>
                <div className='text-2xl lg:mx-10'>
                    <p className='text-green-700'>1 / It's is Simple bolg website with react ,react Routing,Html,css,Boostrap, React Rechart </p>
                    <p className='flex mx-10 justify-center items-center'><span><AiOutlineArrowRight /></span> <a href="https://tsmackbookreview.netlify.app/" className='text-link text-yellow-700'>Blog Page</a></p>
                </div>

            </div>
        </div>
    );
};

export default Potfolio;