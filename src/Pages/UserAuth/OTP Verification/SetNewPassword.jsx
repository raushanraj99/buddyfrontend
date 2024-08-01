import React, { useContext, useState } from "react";
import { context, server } from "../../../main";
import toast from "react-hot-toast";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function SetNewPassword(props) {
  const { resetOtpEmail, setIsOtpSend } = useContext(context);
  const navigation = useNavigate();

  const [user, setUser] = useState({
    newPassword: "",
    confirmNewpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      if (user.newPassword != user.confirmNewpassword) {
        toast.error("Confirm password does not matched");
      } else {
        // axios call put requirest
        await axios
          .put(`${server}/users/password_update`, {
            email: resetOtpEmail,
            newPassword: user.newPassword,
          })
          .then((res) => {
            console.log("Password is set : ", res);
            toast.success(res?.data.message);
            setIsOtpSend(false);
            navigation("/login");
          })
          .catch((error) => {
            // console.log("error message in set new password",error);
            toast.error("unable to set new password");
          });
      }
    } catch (err) {
      // console.log("set New password error");
      toast.error("Unable to set new password");
    }
  };

  return (
    <div>
      <form method="POST" onSubmit={submithandler}>
        <div className="mx-auto my-36 flex h-[320px] w-[350px] flex-col border-2 bg-white text-black shadow-xl">
          <div className="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
            <div className="h-7 w-3 bg-[#3898b2]"></div>
            <div className="w-30 text-center font-sans text-xl font-bold">
              <h1>Set New Password</h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <input
              className="my-2 w-72 border p-2"
              placeholder="Email"
              value={resetOtpEmail}
              type="email"
              id="email"
              autoComplete="username"
              required
              disabled
            />
            <input
              className="my-2 w-72 border p-2"
              onChange={handleChange}
              name="newPassword"
              value={user.newPassword}
              type="password"
              id="password"
              placeholder="New Password"
              autoComplete="current-password"
              required
            />
            <input
              className="my-2 w-72 border p-2"
              onChange={handleChange}
              name="confirmNewpassword"
              value={user.confirmNewpassword}
              type="password"
              id="confirmNewpassword"
              placeholder="confirm Password"
              autoComplete="current-password"
              required
            />
          </div>
          <div className="my-2 flex justify-center">
            <button
              type="submit"
              className="w-72 border text-white tracking-wider bg-[#3898b2] p-2 font-sans"
              value="submit"
            >
              Login
            </button>
          </div>
          <div className="mx-7 my-3 flex justify-between text-sm font-semibold"></div>
        </div>
      </form>
    </div>
  );
}

export default SetNewPassword;
