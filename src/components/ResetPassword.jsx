import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
    const navigate=useNavigate()
  const { resetPassword } = useUserAuth();
  const [email, setEmail] = useState("");
  const handlePasswordReset = async () => {
    try {
      await resetPassword(email);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="min-w-[25vw] p-5 bg-white shadow-xl flex flex-col justify-center items-center gap-5">
        <input
          type="email"
          className="w-full outline-none border-b-[2px] border-blue-500 text-xl px-2 py-1"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          className="px-2 py-1 font-semibold bg-orange-600 text-white w-1/3 rounded-md"
          onClick={handlePasswordReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
