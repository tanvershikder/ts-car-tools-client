import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const Tools = () => {

    const { data:tools, isLoading ,refetch} = useQuery('tools', () => fetch('http://localhost:4000/products').then(res => res.json()))
    console.log(tools);

    if (isLoading) {
        return <Loading></Loading>
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
                    <div class="card-actions">
                      <button class="btn btn-primary">Purchas</button>
                    </div>
                  </div>
                </div>)  
                }
            </div>
        </div>
    );
};

export default Tools;