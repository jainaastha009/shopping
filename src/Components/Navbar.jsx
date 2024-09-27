import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg'; // Import the profile icon
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearcart } from '../Features/Cart/CartSlice';
import { logoutUser, toggleTheme } from '../Features/Users/UserSlice';
import Navlinks from './Navlinks';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.UserState?.user || null);
  const numItemInCart = useSelector((state) => state.cartState.numItemInCart);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignInClick = () => {
    navigate('/login'); // Navigate to the sign-in page
  };

  const handleCreateAccountClick = () => {
    navigate('/register'); // Navigate to the sign-up page
  };

  const handleLogout = () => {
    navigate('/login');
    dispatch(clearcart());
    dispatch(logoutUser());
  };

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md bg-base-200">
      <div className="align-baseline navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
          <NavLink
            to="/"
            className="items-center hidden text-3xl lg:flex btn btn-primary"
          >
            C
          </NavLink>
          {/* DropDown for smaller screens */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <FaBarsStaggered className="w-6 h-6" />
            </label>
            <ul
              tabIndex={0}
              className="mt-3 menu menu-sm dropdown-content z-[10] p-2 shadow bg-base-200 w-44 rounded-xl text-center"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        {/* Navbar Center */}
        <div className="hidden navbar-center md:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>
        {/* Navbar End */}
        <div className="flex items-center navbar-end">
          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="w-4 h-4 swap-on" />
            <BsMoonFill className="w-4 h-4 swap-off" />
          </label>
          {/* Cart */}
          <NavLink to="/cart" className="ml-4 btn btn-ghost btn-circle btn-md">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemInCart}
              </span>
            </div>
          </NavLink>
          {/* User Dropdown */}
          <details
            className={`dropdown dropdown-end ${isOpen ? 'z-10' : 'z-auto'}`}
            onToggle={handleToggle}
          >
            <summary className="m-1 btn btn-ghost">
              <CgProfile className="text-2xl" />
            </summary>
            <ul className="p-2 shadow menu dropdown-content bg-base-100 text-neutral rounded-box w-52">
              {user ? (
                <>
                  <li className="text-lg font-bold text-[#e71313]">
                    {user.username}
                  </li>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <li className="hover:bg-blue-500 hover:rounded-lg hover:text-[#fff]">
                    <a onClick={handleSignInClick}>Sign in / Guest</a>
                  </li>
                  <li className="hover:bg-red-300 hover:rounded-lg hover:text-[#fff]">
                    <a onClick={handleCreateAccountClick}>Create an Account</a>
                  </li>
                </>
              )}
            </ul>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
