import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading';
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";

const Tools = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  useEffect(() => {
    fetch(`https://vast-wave-21361.herokuapp.com/products?page=${page}&size=${size}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [page, size])


  useEffect(() => {
    fetch("https://vast-wave-21361.herokuapp.com/productCount")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const count = data.count;
        const page = Math.ceil(count / 6)
        setPageCount(page)
        // console.log(count);
      })
  }, [])

  let tools = []
  if (products) {
    // console.log("products ", products);
    tools = products

  }

  const hendelparchas = tool => {
    navigate(`/purchase/${tool._id}`)

    // console.log(user);
  }
  return (
    <div className='lg:px-12 lg:m-5'>
      <h2 className="text-2xl text-secondary font-bold text-center py-5 ">Get Car Repair Tools </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
          tools?.map(tool => <div key={tool._id} className="lg:max-w-lg transform transition duration-500 hover:scale-110 bg-gray-200 shadow-xl bg-base-100 lg:m-8  rounded">
            <figure className="">
              <img src={tool.img} alt="Products" className="rounded h-48 w-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title uppercase text-1xl text-orange-500">{tool.name}</h2>
              <p className='text-blue-600 uppercase'>{tool.decreption}</p>
              <p className='text-orange-500'>Price :${tool.price} <span className='text-lime-600 font-bold'>(per pice)</span></p>
              <p className='text-emerald-500 font-semibold'>Avialble :{tool.quantity} Pices</p>
              <p>Minimum Order :{tool.minimum} Pices</p>
              {
                Number(tool?.quantity) < Number(tool?.minimum)
                &&
                <p className='text-yellow-800 font-bold'>Out of stock</p>
              }
              <div className="card-actions">
                {(Number(tool?.quantity) < Number(tool?.minimum))
                  ?
                  <button className="btn btn-primary" >Try Later</button>
                  :
                  <button className="btn btn-primary  font-bold" onClick={() => hendelparchas(tool)}>Purchas<span className='text-green-500 font-bold m-2 text-2xl'><FiShoppingCart /></span></button>
                }
              </div>
            </div>
          </div>)
        }
      </div>
      <div className='text-center'>
        {
          [...Array(pageCount).keys()]
            .map(number => <button
              className={page === number ? "bg-blue-500 text-white lg:mt-3 shadow p-2 m-1 rounded" : "bg-yellow-300 text-white p-2 m-1 lg:mt-3 rounded"}
              onClick={() => setPage(number)}
            >{number + 1}</button>)
        }
      </div>
    </div>
  );
};

export default Tools;