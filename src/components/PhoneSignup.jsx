import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

function PhoneSignup() {
  const [number, setNumber] = useState("");

  const getOtp=(e)=>{
    e.preventDefault();
    
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      <div className="w-1/2 flex justify-center items-center bg-white flex-col gap-14 p-5 shadow-xl">
        <h1 className="text-center text-4xl font-bold">Firebase Phone Auth</h1>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex justify-center">
          <form className="">
            <PhoneInput className="text-xl border-b-2 border-blue-600 focus:outline-none p-2"
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
          </form>
          </div>
          <div className="w-full flex justify-center gap-5 mt-7">
            <Link
              to={"/"}
              className="px-2 py-1 bg-gray-500 rounded-md font-semibold text-white"
            >
              Cancel
            </Link>
            <button className="px-2 py-1 rounded-md bg-blue-500 font-semibold text-white">
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneSignup;
