import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { server } from "../../main";
import Headers from "../../Component/Headers";
import { useNavigate } from "react-router-dom";
function Registration() {

  const navigate = useNavigate();

   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };
  
  const submithandler= async (e)=>{
    e.preventDefault();
    const {name,email,password} = user;
    if(name && email && password){
      await axios.post(`${server}/users/register`,{
        name,email,password
      },{
        withCredentials:true,
      })
      .then((res)=>{
        // console.log("registration sucessful : ",res.data); 
        toast.success("Registration successful",res.data)
        navigate('/login');
      }).catch((err)=>{
        const error = err.response.data.message;
        // console.log("user registration Error ",err.response.data.message)
        toast.error(error)

      })
    }else{
        toast.error("input field can't be blank")
    }
  }
  

 
  return (
    <>

    <h1 className='text-3xl text-[green] font-bold'>User Registration</h1>

<form action="" method="POST" onSubmit={submithandler} className="flex flex-col w-[30%] justify-items-stretch">
  <label htmlFor="name" className="text-[25px]">
    Name
  </label>
  <input
    className="border-2 border-black h-[40px]"
    onChange={handleChange}
    name="name"
    value={user.name}
    type="text"
    id="name"
  />
  <label htmlFor="email" className="text-[25px]">
    Email
  </label>
  <input
    className="border-2 border-black h-[40px]"
    onChange={handleChange}
    name="email"
    value={user.email}
    type="email"
    id="email"
  />
  <label htmlFor="password" className="text-[25px]">
    Password
  </label>
  <input
    className="border-2 border-black h-[40px]"
    onChange={handleChange}
    name="password"
    value={user.password}
    type="password"
    id="password"
  />

  <input
    type="submit"
    className="text-[25px] border border-green-700 w-[130px] text-white bg-green-800"
    value="Submit"
  />
</form>
      

    </>
  )
}

export default Registration