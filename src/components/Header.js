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

  return (
    <div className="w-full h-20 flex justify-between p-6 bg-transparent absolute z-10">
      <div className="w-40 ">
        <NetflixLogo />
      </div>
      <div className="flex">
        <img
          src={user?.photoURL}
          alt="profilephoto"
          className="h-10 w-10"
        ></img>
        <span
          className="cursor-pointer font-bold block text-white"
          onClick={() => handleSignOut()}
        >
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Header;
