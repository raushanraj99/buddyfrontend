import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { context, server } from '../../main';
import axios from 'axios';
import toast from 'react-hot-toast';

function ResetPassword() {

   const { userdata, setIsAuthenticated } =useContext(context);
  
   const navigate = useNavigate();

   const [user, setUser] = useState({
      email:userdata?.email,
      oldPassword: "",
      newPassword:""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };

    const submithandler=(e)=>{
      e.preventDefault();
      // console.log("submit : ",e.target[1].value)
      // console.log("submit : ",e.target[2].value)
      const {email,oldPassword,newPassword} = user;
      axios.post(`${server}/users/resetpassword/${userdata?._id}`,{
         email,oldPassword,newPassword
      },{
         headers:{
           "Content-Type": "application/json",
         },
         withCredentials:true
      }
   ).then((res)=>{
     
      toast.success(res.data.message)
      navigate('/profile');
   }).catch((error)=>{
      const msg = error.response.data.message;
      console.log("submit error :",error)
      toast.error(msg);
   })

    }



  return (
    <div>

      <form
        method="POST"
        onSubmit={submithandler}
        
      >
        <div className="mx-auto my-36 flex h-[340px] w-[350px] flex-col border-2 bg-white text-black shadow-xl">
        <div className="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
          <div className="h-7 w-3 bg-[#3898b2]"></div>
          <div className="w-30 text-center font-sans text-xl font-bold">
            <h1>Reset Password</h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="my-2 w-72 border p-2"
            onChange={handleChange}
            name="email"
            value={user.email}
            type="email"
            id="email"
            placeholder="Email"
            required
            disabled
          />
          <input
            className="my-2 w-72 border p-2"
            onChange={handleChange}
            name="oldPassword"
            value={user.oldPassword}
            type="password"
            id="oldpassword"
            placeholder="Old Password"
            required
          />
          <input
            className="my-2 w-72 border p-2"
            onChange={handleChange}
            name="newPassword"
            value={user.newPassword}
            type="password"
            id="newpassword"
            placeholder="New Password"
            required
          />
        </div>
        <div className="my-2 flex justify-center">
          <button type="submit" className="w-72 border text-white tracking-wider bg-[#3898b2] p-2 font-sans" value="submit">Login</button>
        </div>
        <div className="mx-7 my-3 flex justify-between text-sm font-semibold">
        </div>
      </div>


      </form>
      
      </div>
  )
}

export default ResetPassword