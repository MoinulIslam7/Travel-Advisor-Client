import React, { useContext, useEffect, useState } from 'react';

const ServiceReview = ({ review }) => {
    console.log(review);
    const { name, photoURL, message,ratings } = review;
    return (
        <div className="flex mb-7">
            <div>
                <img src={photoURL} alt="" className="rounded-circle w-20 h-20" />
                <h2>{name}</h2>
            </div>
            <div className="text-start ps-2 fs-6">
                <span className='mx-8'>Ratings:  {ratings}</span>
                <br />
                <span className='mx-8'>Comment: {message}</span>
            </div>
        </div>
    );
};

export default ServiceReview;