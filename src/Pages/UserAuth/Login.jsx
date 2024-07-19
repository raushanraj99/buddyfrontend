import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { context, server } from "../../main";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { userdata, setUserData,setLoggedIn, setIsAuthenticated } =
    useContext(context);

  const [user, setUser] = useState({
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

  const submithandler = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      await axios
        .post(
          `${server}/users/login`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log("response : ", res);
          if (res.status === 200) {
            toast.success("Login successful", res.data);
            setIsAuthenticated(true);
            setUserData(res.data.user)
            setLoggedIn(true);
            navigate("/");
          } else {
            toast.error("Email password does match", res.data);
          }
        })
        .catch((err) => {
          const msg = err.response.data.message;

          if (err.request.status == 401) {
            toast.error(msg);
          } else {
            toast.error("Unauthorized access");
            console.log("user registration Error (Unauthorized access) ", err);
          }
        });
    } else {
      toast.error("input field can't be blank");
    }
  };

  



  return (
    <>
      <h1 className="text-3xl text-[green] font-bold">User Login</h1>

      <form
        action=""
        method="POST"
        onSubmit={submithandler}
        className="flex flex-col w-[30%] justify-items-stretch"
      >
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
          value="Login"
        />
      </form>
    </>
  );
}

export default Login;
