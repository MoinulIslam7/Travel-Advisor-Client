import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateReview = () => {
    const storedReview = useLoaderData();

    const [reviewNew, setReviewNew] = useState(storedReview);
    const handleUpdate = (event) => {
        event.preventDefault();
        fetch(`https://travel-advisor-server.vercel.app/reviews/${storedReview._id}`, {
            method: "PUT",
            headers: {
            "content-type": "application/json",
        },
            body: JSON.stringify(reviewNew),
    })
      .then((res) => res.json())
    .then((data) => {
        if (data.acknowledged) {
            Swal.fire("Your Review Updated Successfully!!!");
            event.target.reset();
        }
    });
  };
const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const updateReview = { ...reviewNew };
    updateReview[field] = value;
    setReviewNew(updateReview);
};
return (
    <div className='m-20'>
        <form onSubmit={handleUpdate}>
            <input onChange={handleInputChange} defaultValue={storedReview.ratings} name='ratings' type="text" placeholder="ratings" className="input input-bordered w-full" />

            <textarea onChange={handleInputChange} defaultValue={storedReview.message} name='message' className="textarea textarea-bordered my-4 w-full h-40" placeholder="Your review" required></textarea>


            <button className="btn btn-wide bg-blue-600 mb-10 text-xl">Update Review </button>
        </form>
    </div>
);
};

export default UpdateReview;