import React, { useState } from "react";
import axios from "axios";
import {Button,Input} from "../components/index";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSignup = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Signing in...");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signin",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      toast.update(toastId, {
        render: "Signin successful!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000); 
    } catch (err) {
      toast.update(toastId, {
        render: err.response?.data?.message || "Error signing up",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-600 mt-2">Login to your account</p>
        </div>

      
        <form onSubmit={handleSignup}>
          <Input
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            Placeholder="Email"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            Placeholder="password"
          />
           <Button type="submit" value="Sign In" />
        </form>
        <p className="text-gray-600 pt-2 text-center">
          Don't have an account?{" "}
          <span className="underline cursor-pointer text-black "
            onClick={()=>{
              navigate("/signup")
            }} 
          >Sign Up</span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signin;
