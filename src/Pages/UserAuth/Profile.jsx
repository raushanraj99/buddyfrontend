import React, { useContext } from 'react'
import { context } from '../../main';
import Loader from '../../Component/Loader';
import { Link } from 'react-router-dom';

function Profile() {

  const {setUserData,userdata,isAuthenticated,setIsAuthenticated,loading,setLoading } = useContext(context);


  return (
    
    <div>
     <p className='text-3xl text-[green] font-bold'>
      user profile 
     </p>

    <h3>
      {
        loading?<Loader/>:
        <div>
          Name : <span>{userdata?.name}</span> <br />
         User Id : <span>{userdata?._id}</span> <br />
         Email :  <span>{userdata?.email}</span> 
        </div>
      }
      <br />
      Reset Password : <a href={`/resetpassword/${userdata?._id}`} className='w-72 border text-white tracking-wider bg-[#3898b2] p-2 font-sans' type='submit'>Reset</a>


    </h3>

      <br />
      </div>
  )
}

export default Profile