import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className="hero mt-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Subcribe!</h1>
                        <p className="py-6">Subscribe Me for more updates!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Your email" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>



    );
};

export default Subscribe;