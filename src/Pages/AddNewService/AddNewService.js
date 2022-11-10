import React from 'react';
import Swal from 'sweetalert2';

const AddNewService = () => {
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const details = form.details.value;

        const addService = {
            title,
            image,
            details,
            price,
            ratings,
            
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire('Service Added successfully!!');
                    form.reset();
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <form onSubmit={handleAddService} className='border-2 rounded-xl p-5 shadow-2xl my-5'>
            <h2 className='text-4xl text-blue-600 text-center font-bold mb-4'>Add Tourist Place</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='title' type="text" placeholder="title" className="input input-bordered w-full" required />
                <input name='image' type="text" placeholder="Photo url" className="input input-bordered w-full" required />
                <input name='price' type="text" placeholder="Cost" className="input input-bordered w-full" required />
                <input name='ratings' type="text" placeholder="ratings" className="input input-bordered w-full" required />
            </div>
            <textarea name='details' className="textarea textarea-bordered my-4 w-full h-40" placeholder="description" required></textarea>
            <div className='flex justify-center mb-3'>
                <button className="btn btn-wide bg-blue-600 text-xl">Add New Service</button>
            </div>
        </form>
    );
};

export default AddNewService;