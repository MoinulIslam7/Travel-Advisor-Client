import React from 'react';
import quote from '../../../assets/img/quote.svg'
import people1 from '../../../assets/img/people1.png'
import people2 from '../../../assets/img/people2.png'
import people3 from '../../../assets/img/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Roberto Carlos",
            reviews: "It is a very good platform for resale clothing",
            location: "California",
            img: people1

        },
        {
            _id: 2,
            name: "Winson Herry",
            reviews: "This is a best platform for resale clothing",
            location: "Germany",
            img: people2

        },
        {
            _id: 3,
            name: "Hilary Clinton",
            reviews: "Awesome Plat from and best services",
            location: "New York",
            img: people3

        },
    ]
    return (
        <section className='my-16 '>
                <div className='text-center'>
                    <h4 className='text-4xl text-primary font-bold '>Testimonial</h4>
                    <h2 className='text-xl'>What Our Client Says</h2>
                </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                    
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;