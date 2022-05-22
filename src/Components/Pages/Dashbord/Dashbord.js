import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import UseAdmin from '../../Hooks/UseAdmin';

const Dashbord = () => {
    const [user] = useAuthState(auth)
    const [admin] = UseAdmin(user)
    console.log(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashbord-slider" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl font-bold text-purple-500 p-5'>Welcome to your Dashbord</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashbord-slider" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='myprofile'>My profile</Link></li>
                    {
                        !admin && <>

                            <li><Link to='myorders'>My Orders</Link></li>
                            <li><a>Add Review</a></li>
                        </>
                    }
                    {
                        admin && <>
                            <li><Link to='manageAllorders'>Manage All Orders</Link></li>
                            <li><Link to='addproducts'>Add Products</Link></li>
                            <li><Link to='makeAdmin'>Make an Admin</Link></li>
                            <li><a>Manage Products</a></li>
                        </>

                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;