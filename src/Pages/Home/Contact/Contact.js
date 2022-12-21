import React from 'react';
import contact from "../../../assets/img/contact.jpeg"
const Contact = () => {
    return (
        <section style={{
            background: `url(${contact})`,
            height: "500px",
            backgroundSize: "cover"
        }}>
            <div className='grid justify-center  p-10'>
                <div>
                    <h5 className='text-xl text-primary font-bold text-center'>Contact Us</h5>
                    <h1 className="text-4xl font-bold text-white text-center">Stay Connected with Us</h1>
                </div>
                <div className='text-center'>
                    <input type="text" placeholder="Email Address" className="input mt-4 input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='text-center'>
                    <input type="text" placeholder="Subject" className="input mt-4 input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='text-center'>
                    <textarea className="textarea mt-4 input-bordered input-primary w-full max-w-xs" placeholder="Your Message"></textarea>
                </div>
                <div className='text-center mt-6'>
                <button className='btn btn-primary'>Submit</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;