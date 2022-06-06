import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProducts = () => {

    const [products,setProducts] = useState([])

    // const { data: products, isLoading, refetch } = useQuery('tools', () => fetch('https://vast-wave-21361.herokuapp.com/products', {
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json',
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()))

    
    useEffect(() => {
        const url = "https://vast-wave-21361.herokuapp.com/products";

        fetch(url, {
            method: 'GET',
            headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    
    const heldelDelete = (id) => {

        const procide = window.confirm("are you sure ? you want to delete ?")

        if (procide) {
            fetch(`https://vast-wave-21361.herokuapp.com/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        toast.success("product deletes success fully")
                        
                    }
                })
        }

    }

    return (
        <div>
            <h3 className="text-2xl text-primary">this manager products {products?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>price per pice</th>
                            <th>order Quantity</th>
                            <th>Manage</th>
                            <th>Update Product</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products?.map((product, index) => <tr key={product._id} className='bg-slate-400'>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button className='btn btn-xs btn-primary' onClick={() => heldelDelete(product._id)}>Delete</button>
                                    {/* {(appointment.price && !appointment.paid) && <Link to={`payment/${appointment._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>} */}
                                </td>
                                <td>
                                    <Link className='btn btn-outline' to={`/dashbord/updateproducts/${product._id}`}>Update Product</Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;