import React from "react";
import NetflixLogo from "../icons/NetflixLogo";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user.user);

  const handleSignOut = async () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div className="w-full flex justify-between p-6">
      <div className="z-10 w-40 ">
        <NetflixLogo />
      </div>
      <span
        className="cursor-pointer font-bold block"
        onClick={() => handleSignOut()}
      >
        Sign out
      </span>
    </div>
  );
};

export default Header;
