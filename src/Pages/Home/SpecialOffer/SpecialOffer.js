import React from 'react';
import { Link } from 'react-router-dom';

const SpecialOffer = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg?1?w=360" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Get Special Offer!</h1>
                        <p className="py-6">You Can get special offer in every services from myself using coupon code. The coupon code is "sohojSimpleAssignmentNiyeHajir"</p>
                        <Link to='/AllServices'><button className="btn btn-primary">View all Services</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;