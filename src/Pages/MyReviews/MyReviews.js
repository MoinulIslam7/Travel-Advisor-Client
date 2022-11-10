import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/UserContext';
import useTitle from '../../Hooks/UseTitle';
import MyReviewCard from '../MyReviews/MyReviewCard'

const MyReviews = () => {
    const { user, signOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('Travel advisor: MyReviews');
    console.log(reviews)

    useEffect(() => {
        fetch(`https://travel-advisor-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('travel-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return signOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, signOut])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Do you want to Delete the review?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://travel-advisor-server.vercel.app/reviews/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            const remaining = reviews.filter(rev => rev._id !== id);
                            setReviews(remaining);
                        }
                    })
                Swal.fire("Deleted Successfully");
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    return (
        <div className="overflow-x-auto w-full my-12">
            <div>
                {
                    reviews.length > 0 ? <>
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
                                    ></MyReviewCard>)
                                }
                            </tbody>
                        </table>
                    </>
                        :
                        <h2 className='text-3xl text-center h-96 w-full mb-8 mt-8'>Empty!! No Reviews Were Added</h2>
                }
            </div>

        </div>
    );
};

export default MyReviews;