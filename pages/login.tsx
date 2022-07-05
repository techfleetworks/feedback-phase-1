import React from "react";

type Props = {};

const login = (props: Props) => {
  return (
    <div className="grid grid-cols-8 grid-rows-4 h-screen w-100">
      <div className="grid col-span-4 row-span-2 col-start-3 row-start-2 items-center bg-slate-200 p-5 rounded-lg h-3/4 drop-shadow-lg">
        <form className="flex flex-col">
          <div className="text-center text-2xl mb-2">Login</div>
          <label className="mb-1 text-xl">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            className="border-2 mb-2 p-1"
          ></input>
          <label className="mb-1 text-xl">Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            className="border-2 mb-4 p-1"
          ></input>
          <div className="flex flex-row">
            <button
              type="submit"
              className="border-2 w-1/2 bg-cyan-300 p-1 rounded-md text-xl text-white"
            >
              Login
            </button>
            <button className="w-1/2 text-xl">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
