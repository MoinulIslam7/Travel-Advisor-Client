import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log("Login user : ", user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("error : ", error);
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <h2 className="text-2xl font-bold ">Email</h2>
                                <input type="email" name='email' placeholder="email" className="input-bordered p-4 text-green-900 " required />
                            </div>
                            <div className="form-control">
                                <h2 className="text-2xl font-bold ">Password</h2>
                                <input type="password" name='password' placeholder="password" className="input-bordered p-4 text-green-900 " required />
                                <div className=" mt-3">
                                    <h6 className='text-xl'>Haven't any Account? <Link to='/register' className=" text-xl link link-hover font-bold">Register Here</Link></h6>
                                </div>
                            </div>
                            <label className="text-red-800 text-3xl">
                                {error}
                            </label>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;