import { useState } from 'react';
import { CgProfile } from 'react-icons/cg'; // Import the profile icon
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearcart } from '../Features/Cart/CartSlice';
import { logoutUser } from '../Features/Users/UserSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserState?state.UserState.user : null); 
  console.log(user);

  
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

  const handleLogout = () =>{
    navigate('/login')
    dispatch(clearcart());
    dispatch(logoutUser());
  }

  return (
    <div className="h-[0.5rem] navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        {/* Add your brand or logo here */}
      </div>
      <div className="flex-none">
        <details className={`dropdown dropdown-end ${isOpen ? 'z-10' : 'z-auto'}`} onToggle={handleToggle}>
          <summary className="m-1 btn btn-ghost">
            <CgProfile className="text-2xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content bg-base-100 text-neutral rounded-box w-52">
            {user ? (
              <>
              <li className="text-lg font-bold tex-[#e71313]">{user.username}</li>
              <button onClick={handleLogout}>Logout</button>
              </>
          
            ) : (
              <>
                <li className='hover:bg-blue-500 hover:rounded-lg hover:text-[#fff]'>
                  <a onClick={handleSignInClick}>Sign in / Guest</a>
                </li>
                <li className='hover:bg-red-300 hover:rounded-lg hover:text-[#fff]'>
                  <a onClick={handleCreateAccountClick}>Create an Account</a>
                </li>
              </>
            )}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
