import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import useTitle from '../../Hooks/UseTitle';


const Register = () => {
    const [error, setError] = useState('');
    const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Travel advisor: Register')

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setError('');
                handleUserUpdateProfile(name, photoURL);
            })
            .catch((error) => {
                console.error("error : ", error);
                setError(error.message);
            })
    }
    const handleUserUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .then(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("error : ", error);
            })
    }
    return (
        <div className=''>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"> Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">

                                <h2 className=" text-2xl font-bold">Full Name</h2>
                                <input type="text" name='name' placeholder="Your Full Name" className="input-bordered p-4 " required />
                            </div>
                            <div className="form-control">
                                <h2 className=" text-2xl font-bold">Photo URL</h2>
                                <input type="text" name='photoURL' placeholder="Your Photo URL" className="input-bordered p-4 " required />
                            </div>
                            <div className="form-control">
                                <h2 className="text-2xl font-bold">Email</h2>
                                <input type="email" name='email' placeholder="Your email" className="input-bordered p-4 " required />
                            </div>
                            <div className="form-control">
                                <h2 className="text-2xl font-bold">Password</h2>
                                <input type="password" name='password' placeholder="password" className="input-bordered p-4 " required />
                                <div className=" mt-3">
                                    <h6 className='text-xl'>Already Have an Account? <Link to='/login' className=" text-xl link link-hover font-bold">Login Here</Link></h6>
                                </div>
                            </div>
                            <label className="text-red-800 text-3xl">
                                {error}
                            </label>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className='flex justify-center mb-3'>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success"> Sign in with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;