import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';
import { Moon, Sun } from 'lucide-react';
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

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className='bg-gray-100 dark:bg-gray-800 mx-auto'>
      <div className="px-2 lg:px-4 navbar bg-base-100 mx-auto shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><NavLink to='/'  className={({isActive})=>isActive? 'text-green-800 underline font-semibold':''}>Home</NavLink></li>
              <li><NavLink to='/allItems'  className={({isActive})=>isActive? 'text-green-800 underline font-semibold':''}>Lost & Found Items</NavLink></li>
            
              <li>
                <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                  {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              </li>
              <li>
                {user ? (
                  <div className="relative">
                    <img
                      className="w-10 h-10 rounded-full cursor-pointer"
                      src={user?.photoURL}
                      alt="User"
                        onMouseEnter={() => setHovering(true)}
                      onMouseLeave={() => setHovering(false)}
                      onClick={() => setShowDropdown(!showDropdown)}
                    />
                             {hovering && (
  <p className="absolute top-full mt-1 bg-white px-2 py-1 rounded shadow">
    {user?.displayName}
  </p>
)}


               {showDropdown && (
  <div className="absolute right-0 top-full  mt-2 w-48 bg-white shadow-md rounded-lg z-50 p-2 ">
    <li><NavLink to="/addItems" className={({isActive})=>isActive? 'text-green-800 underline font-semibold':''}>Add Lost & Found Item</NavLink></li>
   <li> <NavLink to="/recovered-items"  className={({isActive})=>isActive? 'text-green-800 underline font-semibold':''}>All Recovered Items</NavLink></li>
    <li><NavLink to={`/item/${user?.email}`} className={({isActive})=>isActive? 'text-green-800 underline font-semibold':' '} >Manage My Items</NavLink></li>
    <button onClick={handleLogOut} className="w-full text-left p-2 bg-red-100 hover:bg-red-200 rounded">Logout</button>
  </div>
)}
                  </div>
                  
                ) : (
                  <Link to="/auth/login" className="btn btn-secondary btn-outline px-4">Login</Link>
                )}
              </li>
            </ul>
          </div>
          <Link to="/" className="text-green-800 font-bold text-2xl">WhereIsIt</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/'  className={({isActive})=>isActive? 'text-green-800 underline font-semibold':''}>Home</NavLink></li>
            <li><NavLink to='/allItems'  className={({isActive})=>isActive? 'text-green-800 underline font-semibold':''}>Lost & Found Items</NavLink></li>
    
            <li>
              <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </li>
            <li>
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
  <p className="absolute top-full mt-1 bg-white px-2 py-1 rounded shadow">
    {user?.displayName}
  </p>
)}



               {showDropdown && (
  <div className="absolute right-0 top-full  mt-2 w-48 bg-white shadow-md rounded-lg z-50 p-2 ">
    <li><NavLink to="/addItems" className={({isActive})=>isActive? 'text-green-800 underline font-semibold':''}>Add Lost & Found Item</NavLink></li>
   <li> <NavLink to="/recovered-items"  className={({isActive})=>isActive? 'text-green-800 underline font-semibold':''}>All Recovered Items</NavLink></li>
    <li><NavLink to={`/item/${user?.email}`} className={({isActive})=>isActive? 'text-green-800 underline font-semibold':' '} >Manage My Items</NavLink></li>
    <button onClick={handleLogOut} className="w-full text-left p-2 bg-red-100 hover:bg-red-200 rounded">Logout</button>
  </div>
)}
                </div>
              ) : (
              <div>
                  <Link to="/auth/login" className="btn btn-secondary btn-outline px-4">Login</Link>
                <Link to="/auth/register" className="btn btn-secondary btn-outline px-4">Register</Link>
              </div>

               
              )}
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

