import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Registration from "../Pages/UserAuth/Registration";
import Profile from "../Pages/UserAuth/Profile";
import Login from "../Pages/UserAuth/Login";
import Home from "../Pages/Home";
import ResetPassword from "../Pages/UserAuth/ResetPassword";
import { context } from "../main";
import Logout from "../Pages/UserAuth/Logout";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import ForgetPassword from "../Pages/UserAuth/ForgetPassword";
import SetNewPassword from "../Pages/UserAuth/OTP Verification/SetNewPassword";

function Routers() {
  const { isAuthenticated, setIsAuthenticated } = useContext(context);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={isAuthenticated?<Profile />: <Navigate to='/login' replace />} />

        <Route path="/logout" element={<Logout />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} >
        </Route>
        <Route path="/setnewpassword" element={<SetNewPassword />} />
        <Route path="/resetpassword/:id" element={<ResetPassword />} />
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" replace />
            ) : (
              <Registration />
            )
          }
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
        />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Routers;
