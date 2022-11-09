import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/UserContext';
import MyReviewCard from '../MyReviews/MyReviewCard'

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

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


    return (
        <div className="overflow-x-auto w-full my-12">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>User Info</th>
                        <th>Title and Price</th>
                        <th>Message</th>
                        <td></td>
                    </tr>
                </thead>

                <tbody>
                    {
                        reviews.map(review => <MyReviewCard
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></MyReviewCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;