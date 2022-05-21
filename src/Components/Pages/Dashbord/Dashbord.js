import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashbord = () => {
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
                <li><a>My Orders</a></li>
                    <li><a>Add Review</a></li>
                    <li><a>My Profile</a></li>
                    <li><a>Manage All Orders</a></li>
                    <li><a>Add Products</a></li>
                    <li><a>Make an Admin</a></li>
                    <li><a>Manage Products</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;