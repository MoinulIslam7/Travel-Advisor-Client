import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/UserContext';
import MyReviewCard from '../MyReviews/MyReviewCard'

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire("Deleted Successfully");
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    const handleEdit = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id);
                    const approving = reviews.find(rev => rev._id === id);
                    approving.status = 'Approved';
                    const newReview = [...remaining, approving];
                    setReviews(newReview);
                }
            })
    }


    return (
        <div className="overflow-x-auto w-full my-12">
            <div>
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>User Info</th>
                        <th>Title and rating</th>
                        <th>Message</th>
                        <td></td>
                    </tr>
                </thead>
                
                <tbody>
                    <div className='text-2xl text-center'>Total reviews: {reviews.length}</div>
                    {
                        reviews.map(review => <MyReviewCard
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        ></MyReviewCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;