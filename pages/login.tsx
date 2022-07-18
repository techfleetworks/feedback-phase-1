/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { NextPage } from "next";
import React, { FC, useState } from "react";

type Props = {};

const SignIn: FC = (props: Props) => {
  return (
    <div>
      <form action="submit" className="w-full flex flex-col items-start gap-2">
        <h3 className="w-full">Email</h3>
        <input
          className="h-10 bg-gray-300 rounded w-full"
          type="email"
          required
        />

        <h3>Password</h3>
        <input
          className="h-10 bg-gray-300 rounded w-full"
          type="password"
          required
        />

        <button type="button" className="self-end underline">
          Forgot password?
        </button>

        <button className="self-center h-10 bg-gray-300 w-full rounded-full mt-5">
          Log In
        </button>
        <span className="self-center">or</span>
        <button
          type="button"
          className="self-center h-10 bg-gray-300 w-full rounded-full"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
};

const SignUp: FC = (props: Props) => {
  return (
    <div>
      <form action="submit" className="w-full flex flex-col items-start gap-2">
        <h3 className="w-full">Full Name</h3>
        <input
          className="h-10 bg-gray-300 rounded w-full"
          type="email"
          required
        />

        <h3 className="w-full">Email</h3>
        <input
          className="h-10 bg-gray-300 rounded w-full"
          type="email"
          required
        />

        <h3>Password</h3>
        <input
          className="h-10 bg-gray-300 rounded w-full"
          type="password"
          required
        />

        <h3>Confirm Password</h3>
        <input
          className="h-10 bg-gray-300 rounded w-full"
          type="password"
          required
        />

        <button className="self-center h-10 bg-gray-300 w-full rounded-full mt-5">
          Register
        </button>
        <span className="self-center">or</span>
        <button
          type="button"
          className="self-center h-10 bg-gray-300 w-full rounded-full"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
};

const Login: NextPage = (props: Props) => {
  const [authChoice, setAuthChoice] = useState(true);
  return (
    <div className="w-screen h-screen flex">
      <div className="w-2/4 h-full flex justify-center flex-col px-[10vw]">
        <h1 className="w-full font-semibold text-4xl">
          {authChoice ? "Welcome Back" : "Welcome"}
        </h1>
        <p className="w-full mb-5">
          {authChoice
            ? "Welcome back! Please enter your details."
            : "Welcome! Please enter your details."}
        </p>
        {authChoice ? <SignIn /> : <SignUp />}
        {authChoice ? (
          <div className="self-center mt-2">
            Need an account?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => setAuthChoice((authChoice) => !authChoice)}
            >
              Sign Up
            </span>
          </div>
        ) : (
          <div className="self-center mt-2">
            Already have an account?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => setAuthChoice((authChoice) => !authChoice)}
            >
              Sign In
            </span>
          </div>
        )}
      </div>
      <div className="w-2/4 h-full bg-gray-300"></div>
    </div>
  );
};

export default Login;
