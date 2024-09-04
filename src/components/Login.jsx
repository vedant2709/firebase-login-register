import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Alert from "./Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError("Email or Password Incorrect");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError("Unable to signin using google");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {error && <Alert error={error} setError={setError} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Firebase Login</h2>
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
          Login
        </button>
        <div className="text-xs mt-2 font-semibold">
          <Link to={"/reset"}>Forgot Password?</Link>
        </div>
        <hr className="mt-5 border-[1px]" />
        <div className="w-full mt-5 flex justify-center">
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <div className="mt-3 flex justify-center">
          <h1 className="text-xl font-semibold">OR</h1>
        </div>
        <div className="w-full mt-3 flex justify-center">
          <Link
            to={"/phonesignup"}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 font-semibold text-lg flex justify-center"
          >
            Sign in with Phone
          </Link>
        </div>
        <div className="mt-5">
          <p>
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-600 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
