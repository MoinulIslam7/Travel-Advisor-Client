import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/UseTitle';
import ServiceCard from '../Home/Services/ServiceCard';

const AllServices = () => {

    const [services, setServices] = useState([]);
    useTitle('Travel advisor: All Services');

    useEffect(() => {
        fetch('https://travel-advisor-server.vercel.app/AllServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold m-3">All services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;