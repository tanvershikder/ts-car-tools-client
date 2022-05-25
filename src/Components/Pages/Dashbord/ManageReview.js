import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const ManageReview = () => {
    const { data: review, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:4000/getreviews', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    // console.log(review);

    const heldelDelete = (id) => {

        const procide = window.confirm("are you sure ? you want to delete ?")

        if (procide) {
            fetch(`http://localhost:4000/review/${id}`, {
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
                        refetch()
                    }
                })
        }


    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review?.map((review, index) => <tr key={review._id}>
                                <th>{index + 1}</th>
                                <td>{review.name}</td>
                                <td>{review.email}</td>
                                <td>
                                    <button className='btn btn-xs btn-primary' onClick={() => heldelDelete(review._id)}>Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageReview;