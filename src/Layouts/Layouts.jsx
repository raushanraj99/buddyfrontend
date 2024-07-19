import React, { useContext, useEffect } from 'react'
import Home from '../Pages/Home'
import Headers from '../Component/Headers'
import Routers from '../Router/Routers'
import { context, server } from '../main'
import axios from 'axios'
import Loader from '../Component/Loader'

function Layouts() {

  const {setUserData,setIsAuthenticated,loading,setLoading,loggedin } = useContext(context);

  useEffect(()=>{
    setLoading(true)
    console.log("working in layouts")
    axios.get(`${server}/users/userprofile`,{
      withCredentials:true
    }).then((res)=>{
      // console.log("resp : ",res.data)
      setUserData(res.data.user)
      setIsAuthenticated(true);
      setLoading(false);
    }).catch((err)=>{
      console.log("error in fetching data ",err);
      setIsAuthenticated(false);
      setLoading(false);
    })
   
  },[loggedin])

  return (
    <div>
      {/* header */}
      <Headers/>

      {/* main  */}
      {
        loading?<Loader/>:

        <Routers/>
        
      }
      
      {/* Footer  */}



    </div>
  )
}

export default Layouts