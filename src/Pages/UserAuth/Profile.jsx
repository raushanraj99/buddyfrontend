import React, { useContext } from 'react'
import { context } from '../../main';
import Loader from '../../Component/Loader';

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
          <p>{userdata?.name}</p>
          <p>{userdata?.email}</p>
        </div>
      }
    </h3>

      <br />
      </div>
  )
}

export default Profile