import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            name={"Email"}
            onChange={(e) => setEmail(e.target.value)} />
          <Input
            name={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button Type={"submit"} Value="Sign In" />
        </form>
        <p className="text-gray-600 pt-2 text-center">
          Don't have an account?{" "}
          <span className="underline cursor-pointer text-black ">Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
