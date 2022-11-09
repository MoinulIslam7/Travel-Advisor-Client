import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const { image, price, title, details, _id } =  service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-3">
            <PhotoProvider >
                <PhotoView src="/1.jpg">
                    <figure><img src={image} alt="place" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl, text-orange-600 font-semibold'>Cost: {price}</p>
                <p className='text-justify'><span className='font-bold'>Description:</span> {details.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className='border-2 rounded bg-blue-600 text-white px-4 py-1'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;