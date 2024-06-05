import React, { useState } from 'react';
import axios from "axios";
import Input from '../components/Input';
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState("");



  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          firstname,
          lastname,
          username,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    
    } catch (err) {
      setError("Error in sign up");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-600">
            Create your account
          </p>
        </div>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-sm text-black font-bold"
            >
              First Name
            </label>
           <Input/>
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-sm text-black font-bold"
            >
              Last Name
            </label>
            <Input/>
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm text-black font-bold"
            >
              Email
            </label>
            <Input/>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm text-black font-bold"
            >
              Password
            </label>
            <Input/>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 pt-2 text-center">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer"
           
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup