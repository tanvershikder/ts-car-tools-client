import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading';

const Tools = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const { data:products, isLoading ,refetch} = useQuery('tools', () => fetch('http://localhost:4000/products').then(res => res.json()))
    console.log(products);

    if (isLoading) {
        return <Loading></Loading>
    }

    const tools = products.slice(0,6)
    const quantity = Number

    const hendelparchas = tool =>{
      navigate(`/purchase/${tool._id}`)
      
      console.log(user);
    }
    return (
        <div>
            <h2 className="text-2xl text-secondary font-bold text-center py-5 ">Get Car Repair Tools </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                  tools?.map(tool=><div class="lg:max-w-lg bg-base-100 shadow-xl">
                  <figure class="px-10 pt-10">
                    <img src={tool.img} alt="Shoes" class="rounded-xl h-48" />
                  </figure>
                  <div class="card-body items-center text-center">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>{tool.decreption}</p>
                    <p>{tool.price}</p>
                    <p>{tool.quantity}</p>
                    {
                      Number(tool?.quantity) < Number(tool?.minimum)
                      &&
                      <p className='text-yellow-800 font-bold'>Out of stock</p>
                    }
                    <div class="card-actions">
                      {(Number(tool?.quantity) < Number(tool?.minimum))
                                ?
                                <button class="btn btn-primary" >Try Later</button>
                                :
                                <button class="btn btn-primary"  onClick={()=>hendelparchas(tool)}>Purchas</button> 
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