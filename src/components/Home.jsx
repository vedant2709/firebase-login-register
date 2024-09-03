import React from "react";
import { useUserAuth } from "../context/UserAuthContext";

function Home() {
  const { user ,logOut} = useUserAuth();

  const handleLogout=async()=>{
    try {
      await logOut();
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="min-w-[25vw] p-5 bg-zinc-100 shadow-xl">
        <h1 className="text-2xl font-bold">
          Welcome! <span className="text-blue-500">{user && user.email}</span>
        </h1>
        <hr className="border-[1px] mt-5" />
        <div className="mt-5 flex justify-center">
          <button
            className="px-3 py-1 text-xl bg-red-500 text-zinc-200 font-semibold rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
