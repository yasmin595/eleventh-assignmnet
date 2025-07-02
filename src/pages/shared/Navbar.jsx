import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You Logged Out successfully");
        setShowDropdown(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-green-800 underline font-semibold' : ''}>Home</NavLink></li>
      <li><NavLink to='/allItems' className={({ isActive }) => isActive ? 'text-green-800 underline font-semibold' : ''}>Lost & Found Items</NavLink></li>
     

      {user && (
        <>
          <li><NavLink to='/addItems' className={({ isActive }) => isActive ? 'text-green-800 underline font-semibold' : ''}>Add Lost & Found Item</NavLink></li>
          <li><NavLink to={`/item/${user.email}`} className={({ isActive }) => isActive ? 'text-green-800 underline font-semibold' : ''}>Manage My Items</NavLink></li>
          <li><NavLink to={`/recover/${user.email}`} className={({ isActive }) => isActive ? 'text-green-800 underline font-semibold' : ''}>All Recovered Items</NavLink></li>
        </>
      )}
       <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-green-800 underline font-semibold' : ''}>Blog</NavLink></li>
      <li><NavLink to='/questionAndAnswer' className={({ isActive }) => isActive ? 'text-green-800 underline font-semibold' : ''}>FAQ</NavLink></li>
    </>
  );

  return (
    <div className='bg-gray-100 sticky top-0 z-50'>
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow w-52 z-[99]">
              {navLinks}
              <li>
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="btn bg-[#efeeb4] text-amber-700 hover:bg-amber-700 hover:text-white w-full"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/auth/login" className="btn bg-green-100 text-green-800 hover:bg-green-800 hover:text-white w-full mb-2">Login</Link>
                    <Link to="/auth/register" className="btn bg-[#efeeb4] text-amber-700 hover:bg-amber-700 hover:text-white w-full">Register</Link>
                  </>
                )}
              </li>
            </ul>
          </div>
          <Link to="/" className="text-green-800 font-bold text-2xl">WhereIsIt</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          {user ? (
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user.photoURL}
                alt="User"
                onClick={() => setShowDropdown(!showDropdown)}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              />
              {hovering && (
                <p className="absolute top-full mt-1 bg-white px-2 py-1 rounded shadow text-sm">
                  {user?.displayName}
                </p>
              )}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg z-50 p-2">
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left p-2 bg-[#efeeb4] text-amber-700 hover:bg-amber-700 hover:text-white rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/auth/login" className="btn bg-green-100 text-green-800 hover:bg-green-800 hover:text-white">Login</Link>
              <Link to="/auth/register" className="btn bg-[#efeeb4] text-amber-700 hover:bg-amber-700 hover:text-white">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
