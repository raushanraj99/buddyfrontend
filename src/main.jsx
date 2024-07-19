import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

export const server = "http://localhost:4000";

export const context = createContext({ isAuthenticated: false });

const Contextwrapper =()=>{
    
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [userdata,setUserData] = useState({})
  const [loading,setLoading] = useState(false);
  const [loggedin,setLoggedIn] = useState(false);

  return(
    <context.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
      userdata,
      setUserData,
      loading, 
      setLoading,
      loggedin,
      setLoggedIn
    }}>
      <App />
    </context.Provider>
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
    <Contextwrapper/>
    </React.StrictMode>
  </BrowserRouter>
);
