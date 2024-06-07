import React, { useState } from "react";
import axios from "axios";
import Input from "../components/assets/Input";
import Button from "../components/assets/Button";
import {useNavigate} from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signup",
        {
          firstname,
          lastname,
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      navigate("/signin")
    } catch (err) {
      setError("Error signing up");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-600 mt-2">Create your account</p>
        </div>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSignup}>
          <Input 
          label="First Name"
          name="firstname" 
          value={firstname} 
          onChange={(e) => setFirstname(e.target.value)} 
          Placeholder = "FirstName"
          />
          
          <Input 
          label="Last Name" 
          name="lastname" 
          value={lastname} 
          onChange={(e) => setLastname(e.target.value)} 
          Placeholder = "LastName"
          />

          <Input 
          label="Email"
          onChange={(e) => setEmail(e.target.value)} 
          Placeholder = "Email"
          />

          <Input 
          label="Password" 
          type="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          Placeholder = "*****"
          />
          <Button type="submit" value="Sign Up" />
        </form>
        <p className="text-gray-600 pt-2 text-center">
          Already have an account?{" "}
          <span className="underline cursor-pointer text-blue-400 "
            onClick={() => navigate("/signin")}
          >Sign In</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
