import React, { useEffect, useState } from "react";
import NetflixLogo from "../icons/NetflixLogo";
import InputField from "./InputField";
import {
  EMAIL_ID,
  FIRSTNAME_ID,
  LASTNAME_ID,
  PASSWORD_ID,
  validateChange,
} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [signInButton, setSignInButton] = useState({
    btnText: "Sign In",
    disabled: true,
  });
  const [signUpButton, setSignUpButton] = useState({
    btnText: "Sign Up",
    disabled: true,
  });
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    firstNameErrorMessage: "",
    lastNameErrorMessage: "",
    emailErrorMessage: "",
    passwordErrorMessage: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
    validateChange(name, value, setError, error);
  };

  useEffect(() => {
    if (isSignUpForm) {
      if (
        form.email &&
        form.password &&
        !error.emailErrorMessage &&
        !error.passwordErrorMessage
      ) {
        setSignUpButton({
          ...signUpButton,
          disabled: false,
        });
        return;
      }
      setSignUpButton({
        ...signUpButton,
        disabled: true,
      });
      return;
    }
    if (
      form.email &&
      form.password &&
      !error.emailErrorMessage &&
      !error.passwordErrorMessage
    ) {
      setSignInButton({
        ...signInButton,
        disabled: false,
      });
      return;
    }
    setSignInButton({
      ...signInButton,
      disabled: true,
    });
  }, [form]);

  const handleSignIn = async () => {
    try {
      setSuccessMessage("");
      setErrorMessage("");
      setSignInButton({ btnText: "Authenticating...", disabled: true });
      await signInWithEmailAndPassword(auth, form.email, form.password);
      setSuccessMessage("logged in");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setSignInButton({ btnText: "Login", disabled: false });
    }
  };
  const handleSignUp = async () => {
    try {
      setSuccessMessage("");
      setErrorMessage("");
      setSignUpButton({ btnText: "Creating Account...", disabled: true });
      const response = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      await updateProfile(response.user, {
        displayName: `${form.firstName} ${form.lastName}`,
        photoURL: "https://avatars.githubusercontent.com/u/81510482?v=4",
      });
      setSuccessMessage("SignUp is successful");
      setSignUpButton({ btnText: "Created Account", disabled: true });
    } catch (error) {
      setErrorMessage(error.message);
      setSignUpButton({ btnText: "Sign Up", disabled: false });
    }
  };

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
            <React.Fragment>
              <InputField
                type={"text"}
                id={FIRSTNAME_ID}
                name={FIRSTNAME_ID}
                value={form.firstName}
                placeholder={"Enter first name"}
                handleChange={(e) => handleChange(e)}
                errorMessage={error.firstNameErrorMessage}
              ></InputField>
              <InputField
                type={"text"}
                id={LASTNAME_ID}
                name={LASTNAME_ID}
                value={form.lastName}
                placeholder={"Enter last name"}
                handleChange={(e) => handleChange(e)}
                errorMessage={error.lastNameErrorMessage}
              ></InputField>
            </React.Fragment>
          )}
          <InputField
            type={"email"}
            id={EMAIL_ID}
            name={EMAIL_ID}
            value={form.email}
            placeholder={"Enter email"}
            handleChange={(e) => handleChange(e)}
            errorMessage={error.emailErrorMessage}
          />
          <InputField
            type={"password"}
            id={PASSWORD_ID}
            name={PASSWORD_ID}
            value={form.password}
            placeholder={"Enter password"}
            handleChange={(e) => handleChange(e)}
            errorMessage={error.passwordErrorMessage}
          />
          {isSignUpForm ? (
            <button
              disabled={signUpButton.disabled}
              className="w-[100%] my-2 p-3 text-[16px] font-medium bg-[red] rounded-md disabled:bg-slate-400"
              onClick={() => handleSignUp()}
            >
              {signUpButton.btnText}
            </button>
          ) : (
            <button
              disabled={signInButton.disabled}
              className="w-[100%] my-2 p-3 text-[16px] font-medium bg-[red] rounded-md disabled:bg-slate-400"
              onClick={() => handleSignIn()}
            >
              {signInButton.btnText}
            </button>
          )}
          {errorMessage && (
            <span className="text-red-700 font-semibold mb-2">
              {errorMessage}
            </span>
          )}
          {successMessage && (
            <span className="text-green-700 font-semibold mb-2">
              {successMessage}
            </span>
          )}

          <div>
            {isSignUpForm ? (
              <div>
                Already a member?{" "}
                <span
                  className="cursor-pointer font-bold"
                  onClick={() => setIsSignUpForm(false)}
                >
                  Sign In
                </span>
              </div>
            ) : (
              <div>
                New to Netflix?{" "}
                <span
                  className="cursor-pointer font-bold"
                  onClick={() => setIsSignUpForm(true)}
                >
                  Sign up
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
