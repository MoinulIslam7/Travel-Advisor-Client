import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('Travel Advisor: Services');

    useEffect(() => {
        fetch('https://travel-advisor-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold m-3">My Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to='/AllServices' className='flex justify-center mb-5'><button className="btn btn-wide bg-blue-600 text-xl">See All</button></Link>
        </div>
    );
};

export default Services;