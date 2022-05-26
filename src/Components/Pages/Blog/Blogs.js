import React from 'react';
import code from '../../../Images/code.jpg'

const Blogs = () => {
    return (
        <div>
            <h3 className="text-3xl text-center ">This is blog Page</h3>
            <div className='m-5'>
                <p className='text-2xl text-blue-500 '>1. Q: How will you improve the performance of a React Application?</p>
                <p className="text-1xl">
                    1/ Windowing or list virtualization in React<br />
                    2/ Render dynamic import as a regular component<br />
                    3/ Keeping component state local where necessary. <br />
                    4/use dependency Optimization like lodas.js , etc ..
                </p>
            </div>
            <div className='m-5'>
                <p className='text-2xl text-blue-500 '>2. Q:  What are the different ways to manage a state in a React application?</p>
                <p>5 Types of Application State in React and they can help in satae maneagement :</p>
                <p className="text-1xl">
                    1/ data state<br />
                    2/ control state<br />
                    3/ Session state<br />
                    4/ Location state <br />
                    5/ Conclusion <br />
                </p>
            </div>
            <div className='m-5'>
                <p className='text-2xl text-blue-500 '>3. How does prototypical inheritance work?</p>
                <p className="text-1xl">
                    prototypal inheritance হচ্ছে javascript এর একটি feature যেইটা ব্যাবহার করে অবজেক্ট এর মাঝে methods and properties add করা হয়। <br />
                    এই মেথড এর সাহায্যে একটি object অন্য একটি object এর properties and methods কে inherit করতে পারে।
                    <br />
                    Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes
                </p>
            </div>
            <div className='m-5'>
                <p className='text-2xl text-blue-500 '>4. Why you do not set the state directly in React?</p>
                <p className="text-1xl">
                    If we update it directly, calling the setState() afterward may just replace the update we made.When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. and we will lose control of the state across all components.
                </p>
            </div>
            <div className='m-5'>
                <p className='text-2xl text-blue-500 '>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                <p className="text-1xl">
                    we can get specefic product by using find menthode of array . <br />
                    example code are given bellow : <br />

                    <img src={code} alt="" />

                </p>
            </div>
            <div className='m-5'>
                <p className='text-2xl text-blue-500 '>5. What is a unit test? Why should write unit tests?</p>
                <p className="text-1xl">
                    <span className='font-bold'> Unit test :</span><br />
                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. <br />
                    This testing methodology is done during the development process by the software developers and sometimes QA staff. <br/>
                    <span className='font-bold'>Why should we write unit tests :</span><br />
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently
                </p>
            </div>
        </div>
    );
};

export default Blogs;