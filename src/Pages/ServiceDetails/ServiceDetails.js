import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/UserContext';
import ServiceReview from '../ServiceReview/ServiceReview';

const ServiceDetails = () => {
    const { _id, image, title, price, ratings, details } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`
        )
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [])

    const handleReview = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const photoURL = user?.photoURL || '';
        const ratings = form.ratings.value;
        const message = form.message.value;
        console.log('service id form service details', _id)

        const review = {
            service: _id,
            title,
            name,
            email,
            photoURL,
            ratings,
            message
    }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    Swal.fire('Review Added Successfully')
                }
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl my-12">
                <figure><img src={image} alt="place" /></figure>
                <div className="card-body mx-6">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p className='font-bold text-orange-400'>Cost: {price}</p>
                    <p className='font-bold text-orange-400'>Ratings: {ratings}</p>
                    <p className='text-justify'><span className='font-bold'>Description:</span> {details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-3xl text-center'>All reviews for this services: </h2>
                {
                    reviews.map((review) => <ServiceReview key={review._id} review={review}></ServiceReview>)
                }

            </div>

            <form onSubmit={handleReview} className='border-2 rounded-xl p-5 shadow-2xl mb-5'>
                <h2 className='text-4xl text-center font-bold mb-4'>Reviews on this Service</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                    <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                    <input name='photoURL' type="text" placeholder="Your Photo" defaultValue={user?.photoURL} className="input input-bordered w-full" readOnly />
                    <input name='ratings' type="text" placeholder="ratings" className="input input-bordered w-full" />
                </div>
                <textarea name='message' className="textarea textarea-bordered my-4 w-full h-40" placeholder="Your review" required></textarea>
                <button className="btn btn-wide bg-blue-600 text-xl">Add Review</button>
            </form>

        </div>
    );
};

export default ServiceDetails;