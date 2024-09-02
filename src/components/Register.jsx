import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useUserAuth} from "../context/UserAuthContext"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signUp}=useUserAuth();
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email,password)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Firebase Register</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 font-semibold text-lg"
        >
          Register
        </button>
        <hr className="mt-5 border-[1px]"/>
        <div className="mt-5">
          <p>Already have an account? <Link to={'/'} className="text-blue-600 font-semibold">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
