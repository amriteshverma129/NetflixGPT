import React, { useState } from "react";
import NetflixLogo from "../icons/NetflixLogo";
import InputField from "./InputField";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);

  return (
    <div className="h-[100vh] w-[100vw] relative">
      <img
        src="/images/Netflex-Background-Img.jpeg"
        alt="Background image"
        className="h-[100%] w-[100%]"
      />
      <div className="top-0 right-0 left-0 bottom-0 absolute bg-black bg-opacity-50 justify-center flex items-center ">
        <div className="absolute z-10 w-40 top-5 left-5 ">
          <NetflixLogo />
        </div>
        <div className="bg-black opacity-70 flex flex-col text-[white] p-14 rounded-sm w-4/12">
          <div className="font-semibold text-[36px] mb-6">
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </div>
          {isSignUpForm && (
            <InputField label="Full Name" type={"text"}></InputField>
          )}
          <InputField label={"Email or phone number"} type="text" />
          <InputField label={"Password"} type="password" />
          {isSignUpForm ? (
            <button className="w-[100%] my-2 p-3 text-[16px] font-medium bg-[red] rounded-md">
              Sign Up
            </button>
          ) : (
            <button className="w-[100%] my-2 p-3 text-[16px] font-medium bg-[red] rounded-md">
              Sign In
            </button>
          )}
          <div>
            <span>Remember me</span>
            <span>Need help?</span>
          </div>

          <div>
            {isSignUpForm ? (
              <div onClick={() => setIsSignUpForm(false)}>
                Already a member? <span>Sign In</span>
              </div>
            ) : (
              <div onClick={() => setIsSignUpForm(true)}>
                New to Netflix?<span>Sign up now</span>
              </div>
            )}
          </div>
          <div>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a>Learn more.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
