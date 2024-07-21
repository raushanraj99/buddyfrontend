import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { server } from "../../main";
import Headers from "../../Component/Headers";
import { Link, useNavigate } from "react-router-dom";
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

  const submithandler = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      await axios
        .post(
          `${server}/users/register`,
          {
            name,
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          // console.log("registration sucessful : ",res.data);
          toast.success("Registration successful", res.data);
          navigate("/login");
        })
        .catch((err) => {
          const error = err.response.data.message;
          // console.log("user registration Error ",err.response.data.message)
          toast.error(error);
        });
    } else {
      toast.error("input field is blank");
    }
  };

  return (
    <>
      <form
        method="POST"
        onSubmit={submithandler}
      >
        <div class="mx-auto my-20 flex h-[350px] w-[350px] flex-col border-2 bg-white text-black shadow-xl">
          <div class="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
            <div class="h-7 w-3 bg-[#3898b2]"></div>
            <div class="w-3 text-center font-sans text-xl font-bold">
              <h1>Register</h1>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <input
              class="my-2 w-72 border p-2"
              onChange={handleChange}
              type="text"
              name="name"
              value={user.name}
              id="name"
              placeholder="Your Name"
              required
            />
            <input
              class="my-2 w-72 border p-2"
              onChange={handleChange}
              name="email"
              value={user.email}
              type="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              class="my-2 w-72 border p-2"
              onChange={handleChange}
              name="password"
              value={user.password}
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div class="my-2 flex justify-center">
            <input
              class="w-72 border bg-[#3898b2] p-2 font-sans"
              type="submit"
              value="Submit"
            />
          </div>
          <div class="mx-7 my-3 flex justify-between text-sm font-semibold">
            <div>
              <h1>Already have an account </h1>
            </div>
            <div>
              <Link to='/login' class="underline underline-offset-2">SignIn</Link>
            </div>
          </div>
        </div>

       
      </form>
    </>
  );
}

export default Registration;
