import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { context, server } from "../../main";
import { Link, redirect, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { setLoggedIn, setIsAuthenticated } = useContext(context);

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
      // setLoading(true)
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
          if (res?.status === 200) {
            setIsAuthenticated(true);
            setUserData(res.data.user);
            setLoggedIn(true);
            toast.success("Login successful", res?.data);
            redirect("/profile");
          } else {
            toast.error("Email password does match", res.data);
          }
        })
        .catch((err) => {
          const msg = err.response?.data?.message;
          if (err?.request.status == 401) {
            toast.error(msg);
          } else {
            toast.error(err.message);
          }
        });
    } else {
      // setLoading(false);
      toast.error("input field can't be blank");
    }
  };

  return (
    <>
      <form action="" method="POST" onSubmit={submithandler}>
        <div className="mx-auto my-36 flex h-[300px] w-[350px] flex-col border-2 bg-white text-black shadow-xl">
          <div className="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
            <div className="h-7 w-3 bg-[#3898b2]"></div>
            <div className="w-3 text-center font-sans text-xl font-bold">
              <h1>Login</h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <input
              className="my-2 w-72 border p-2"
              onChange={handleChange}
              name="email"
              value={user.email}
              type="email"
              autoComplete="username"
              id="email"
              placeholder="Email"
              required
            />
            <input
              className="my-2 w-72 border p-2"
              onChange={handleChange}
              name="password"
              value={user.password}
              type="password"
              autoComplete="current-password"
              id="password"
              placeholder="Password"
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
          <div className="mx-7 my-3 flex justify-between text-sm font-semibold">
            <div>
              <Link to="/forgetpassword">Forget Password</Link>
            </div>
            <div>
              <Link to="/register" className="underline underline-offset-2">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
