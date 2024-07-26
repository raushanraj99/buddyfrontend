import React, { useContext, useState } from 'react'
// import nodemailer from 'nodemailer';
import Otpverify from './OTP Verification/Otpverify'
import axios from 'axios';
import { context, server } from '../../main';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {

  const [email,setEmail] = useState(""); 

  const {isOtpSend,setIsOtpSend,otpValue,setOtpValue,loading, setLoading,setResetOtpEmail,resetOtpEmail} = useContext(context);


// to repir otp value 
// setIsOtpSend(true)

console.log("otp ",otpValue, " email : ",email);


  const emailSend=(e)=>{
      e.preventDefault();
      // console.log("value : ",e.target[0].value);
      setLoading(true);
      axios.post(`${server}/users/sendemail`,{
        email
      },{
        headers:{
          "Content-Type":"application/json",
        }
      }).then((res)=>{
        console.log("Mail Sent : ",res.config);
        
        setLoading(false);
        setIsOtpSend(true);
        setOtpValue(res?.data.otp);
        setResetOtpEmail(email);
        toast.success(res?.data.message);
      }).catch((error)=>{
        const msg = error.response?.data.message;
        console.log(error);
        toast.error(msg)
        setIsOtpSend(false);
        setOtpValue("");
        setResetOtpEmail("")
        setLoading(false);
        
      })
      
      
    }



  return (
    <>ForgetPassword

{
  isOtpSend?
  <Otpverify emails = {email} /> 
  :
<main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
    <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Remember your password?
            <a className="text-blue-600 decoration-2 hover:underline font-medium" href="/login">
              Login here
            </a>
          </p>
        </div>

        <div className="mt-5">
          <form onSubmit={emailSend}>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                <div className="relative">
                  <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} id="email" name="email" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>


}

  
  


    </>

  )
}

export default ForgetPassword