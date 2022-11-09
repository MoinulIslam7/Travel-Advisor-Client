import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const MyReviewCard = ({ review, handleDelete }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, email, price, message, service } = review;


    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])

    return (
        <tr>
            <th></th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-36 h-24">
                            {
                                reviewService?.image &&
                                <img src={reviewService.image} alt="Photos" />
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{email}</div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{message}</td>
            <th>
                <label>
                    <button className='btn btn-active btn-primary mx-3'>Edit</button>
                    <button onClick={() => handleDelete(_id)} className='btn btn-active btn-secondary'>Delete</button>
                </label>
            </th>
        </tr>
    );
};

export default MyReviewCard;