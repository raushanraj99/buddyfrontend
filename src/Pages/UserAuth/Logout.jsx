import axios from "axios";
import React, { useContext } from "react";
import { context, server } from "../../main";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Logout() {

   const { isAuthenticated, setIsAuthenticated, setLoggedIn } =
    useContext(context);
    const navigate = useNavigate();

   const logouthandler = () => {
      axios
        .get(`${server}/users/logout`, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success("Logged out successful", res);
          setLoggedIn(false);
          setIsAuthenticated(false);
          navigate('/login');
        })
        .catch((err) => {
          console.log("Logout Error ", err);
        });
    };


  return (
    <div>
      <input
        type="submit"
        onClick={logouthandler}
        className="w-32 border bg-[#e60d0d] p-2 font-sans"
        value="Logout"
      />
    </div>
  );
}

export default Logout;
