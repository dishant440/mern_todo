import React, { useState } from "react";
import axios from "axios";
import {Button,Input} from "../components/index";
import {useNavigate} from "react-router-dom";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
    } catch (err) {
      setError("Error signing in");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-600 mt-2">Create your account</p>
        </div>

        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSignup}>
          <Input
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button Type={"submit"} value="Sign In" />
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
    </div>
  );
}

export default Signup;
