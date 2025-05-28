import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/US-en-20250519-TRIFECTA-perspective_63def194-12b8-4f06-8be7-454980a90dd1_small.jpg"
          alt="Background-image"
        />
      </div>
      <form className="relative p-12 bg-black w-3/12 m-auto top-48 left-0 right-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between text-gray-500">
          <div>
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          Need Help?
        </div>
        <p
          className="py-12  text-gray-500 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? (
            <span>
              New to Netflix?
              <span className="font-bold text-white"> Sign Up Now</span>
            </span>
          ) : (
            <span>
              Already An User?
              <span className="font-bold text-white"> Sign In Now</span>
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
