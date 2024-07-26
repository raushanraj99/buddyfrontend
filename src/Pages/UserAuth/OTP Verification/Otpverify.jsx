import React, { useContext, useState } from "react";
import { context, server } from "../../../main";
import axios from "axios";
import SetNewPassword from "./SetNewPassword";
import { useNavigate } from "react-router-dom";

function Otpverify() {

  const [numberOne,setNumberOne] = useState();
  const [numberTwo,setNumberTwo] = useState();
  const [numberThree,setNumberThree] = useState();
  const [numberFour,setNumberFour] = useState();
  // const [passStatus,setPassStatus] = useState(false);
  const navigate = useNavigate();

const { otpValue,setOtpValue,setResetOtpEmail,resetOtpEmail} = useContext(context);

// setOtpValue(2342)
console.log("OTP value : ",otpValue);

const otpVerify = (e)=>{
  e.preventDefault();
  // console.log("verify otp value : ",e.target[2].value);
  var total = numberOne+""+numberTwo+""+numberThree+""+numberFour
  // console.log("total : ",total);
  total = parseInt(total);
  console.log("total : ",total," otpValue : ",otpValue);
  if(total===otpValue){
    console.log("set new password");
    console.log("email send : otp pagae ; ",resetOtpEmail);
    navigate('/setnewpassword')
    
  }
  else{
    console.log("OTP does match");
    
  }
}



  return (
    <div>
   
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email : b**k@gmail.com {resetOtpEmail} .</p>
              </div>
            </div>

            <div>
              <form action="" onSubmit={otpVerify}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-16 h-16 ">
                      <input
                        min='0' max='9'
                        maxLength="1"
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        onChange={e=>setNumberOne(e.target.value)}
                        value={numberOne}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                      min='0' max='9'
                        maxLength="1"
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        onChange={e=>setNumberTwo(e.target.value)}
                        value={numberTwo}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                      min='0' max='9'
                        maxLength="1"
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        onChange={e=>setNumberThree(e.target.value)}
                        value={numberThree}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                      min='0' max='9'
                        maxLength="1"
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        onChange={(e)=>setNumberFour(e.target.value)}
                        value={numberFour}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        Verify Account
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}  
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Otpverify;
