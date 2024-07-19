import React, { useContext } from 'react'
import { context, server } from '../main'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function Headers() {

  const {isAuthenticated,setIsAuthenticated,setLoggedIn} = useContext(context);
  
 const logouthandler = async () => {
  await axios
    .get(
      `${server}/users/logout`,{
        withCredentials:true
      })
    .then((res) => {
      toast.success("Logged out successful", res);
      setLoggedIn(false)
      setIsAuthenticated(false)
    })
    .catch((err) => {
      console.log("Logout Error ", err);
    });
};
 


  return (
    <div>
      




      Headers <br />
      <div className="flex flex-row justify-center gap-5">
      <Link to="/" className='border-2 border-green-900 w-20 h-10 bg-green-700 text-white text-[22px] font-bold'>Home</Link>
      <Link to="/profile" className='border-2 border-green-900 w-20 h-10 bg-green-700 text-white text-[22px] font-bold'>profile</Link>

      </div>
      <br />
      <br />
      {
        isAuthenticated?

        <div>
          
        <input
        type="submit"
        onClick={logouthandler}
        className="text-[25px] border border-green-700 w-[130px] text-white bg-green-800 cursor-pointer"
        value="Logout"
        />
        </div>
        :
        <div>
          <Link to="/login" className='border-2 border-green-900 w-20 h-10 bg-green-700  text-white text-[22px] font-bold'>Login</Link> 
          <br />
          <br />
          <Link to="/register" className='border-2 border-green-900 w-20 h-10 bg-green-700  text-white text-[22px] font-bold'>register</Link>
        </div>

      }

    </div>
  )
}

export default Headers