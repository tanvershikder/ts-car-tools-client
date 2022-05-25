import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../Firebase.init';
import { useSignInWithGoogle,useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import google from "../../Images/google.png"
import UseToken from '../Hooks/UseToken';
import { toast } from 'react-toastify';

const Login = () => {
    const [showpass, setShowpass] = useState(false);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit,getValues  } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const [token] = UseToken(user || gUser);
    const EmailRef = useRef('');
    const navigate = useNavigate()
    let location = useLocation();
    let signInerror;
    let from = location.state?.from?.pathname || "/";

    useEffect(()=>{
        if (user || gUser) {
            navigate(from, { replace: true });
        }
        // if (token) {
        //     navigate(from, { replace: true });
        // }
    },[token, from, navigate])

    
    if(gLoading || loading){
        return <Loading></Loading>
    }

    if(gError || error){
        signInerror=<p className="text-red-500"><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email,data.password)
    }

    const hendelForgetPssword = async () => {
        // const email = EmailRef.current.value;
        const email = getValues("email");
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast("email sent");
        }
        else {
            toast('enter your email')
        }

    }


    return (
        <div className='flex h-screen justify-center items-center mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"

                                // ref={EmailRef}

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Password</span>
                            </label>
                            <input
                                type={showpass ? "text" : "password"}
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full max-w-xs"

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charecters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input type="checkbox" name="" id="" onClick={() => setShowpass(!showpass)} /> <span>see password</span>

                        {signInerror}
                        <p className='text-yellow-400 m-3 cursor-pointer' onClick={hendelForgetPssword}>forget Password?</p>
                        <div className="flex flex-col w-full border-opacity-50">
                            <input type="submit" value="Login" className="grid btn btn-primary rounded-box place-items-center input input-bordered w-full max-w-xs" />

                            <p className='m-3'>New to Ts-Car_tools?
                                <span><Link to="/signup" className='text-secondary text-sm cursor-pointer'>Create New Account</Link></span></p>

                        </div>
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline'><span><img src={google} alt="" /></span> CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;