import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from "../../assets/logo.svg"

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className="navbar bg-blue-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-400 rounded-box w-52">

                        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                        <div className='w-52'>
                            {
                                user?.uid
                                    ?
                                    <>
                                        <Link className="btn btn-ghost normal-case text-xl" to='/MyReviews'>My Reviews</Link>
                                        <Link className="btn btn-ghost normal-case text-xl" to='/AddNewService'>Add Service</Link>
                                        <Link onClick={handleSignOut} className="btn btn-ghost normal-case text-xl mt-0">Sign Out</Link>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>
                                            <button className='btn btn-ghost normal-case text-xl'>Log In</button>
                                        </Link>
                                        <Link to='/register'>
                                            <button className='btn btn-ghost normal-case text-xl'>Register</button>
                                        </Link>
                                    </>
                            }
                        </div>
                    </ul>
                </div>
                <div className='flex roundedCircle'>
                    <img className='h-8 w-8 mt-2 ' src={logo} alt="images" />
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">Travel Advisor</Link>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                    {
                        user?.uid
                            ?
                            <>
                                <Link className="btn btn-ghost normal-case text-xl" to='/MyReviews'>My Reviews</Link>
                                <Link className="btn btn-ghost normal-case text-xl" to='/AddNewService'>Add Service</Link>
                                <button onClick={handleSignOut} className="btn btn-ghost normal-case text-xl mt-0">Sign Out</button>
                            </>
                            :
                            <>
                                <Link to='/login'>
                                    <button className='btn btn-ghost normal-case text-xl'>Log In</button>
                                </Link>
                                <Link to='/register'>
                                    <button className='btn btn-ghost normal-case text-xl'>Register</button>
                                </Link>
                            </>
                    }
                    <div className='flex justify-between'>
                        {
                            user?.photoURL ?
                                <>
                                    {user?.photoURL && <img className='w-8 h-8 mx-2 mt-2 rounded-full' title={user.displayName} src={user?.photoURL} alt="" />
                                    }
                                </>
                                :
                                <>
                                    {user?.email && <p className='text-2xl'>welcome, {user.email}</p>}
                                </>

                        }
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="swap swap-rotate">
                    End
                </button>
            </div>
        </div>
    );
};

export default Header;