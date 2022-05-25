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
    fetch(`http://localhost:4000/products?page=${page}&size=${size}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [page, size])


  useEffect(() => {
    fetch("http://localhost:4000/productCount")
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
          tools?.map(tool => <div key={tool._id} className="lg:max-w-lg bg-base-100 shadow-xl">
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
                  <button className="btn btn-primary  font-bold" onClick={() => hendelparchas(tool)}>Purchas<span className='text-pink-500 font-bold m-2 text-2xl'><FiShoppingCart /></span></button>
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
        {/* <select className='sizepage' onChange={e => setSize(e.target.value)}>
          <option value="5" >6</option>
          <option value="3" selected>3</option>
        </select> */}
      </div>
    </div>
  );
};

export default Tools;