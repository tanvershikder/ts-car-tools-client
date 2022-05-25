import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading';

const Tools = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url = "http://localhost:4000/products";

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  let tools = []
  if (products) {
    console.log("products ", products);
    tools = products?.slice(0, 6)

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
          products?.map(tool => <div key={tool._id} className="lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={tool.img} alt="Shoes" className="rounded-xl h-48 w-64 " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{tool.name}</h2>
              <p>{tool.decreption}</p>
              <p>Price :${tool.price} (per pice)</p>
              <p>Avialble :{tool.quantity} Pices</p>
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
                  <button className="btn btn-primary" onClick={() => hendelparchas(tool)}>Purchas</button>
                }
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Tools;