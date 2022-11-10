import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const { image, ratings, price, title, details, _id } =  service;
    
    return (
        <div className="card card-compact w-96 shadow-xl p-3">
            <PhotoProvider >
                <PhotoView src={image}>
                   <img src={image} alt="place" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title justify-center">{title}</h2>
                <p className='text-2xl, text-orange-600 font-semibold'>Price: {price}</p>
                <p className='text-2xl, text-orange-600 font-semibold'>rating: {ratings}</p>
                <p className='text-justify'><span className='font-bold'>Description:</span> {details.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className='border-2 rounded bg-blue-600 text-white px-4 py-1'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;