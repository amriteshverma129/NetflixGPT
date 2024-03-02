import React from "react";
import NetflixLogo from "../icons/NetflixLogo";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const user = useSelector((store) => store.user.user);
  const location = useLocation();
  const { t, i18n } = useTranslation("common");

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
        <Link to="/browser">
          <NetflixLogo />
          <div className="text-white">{t("hello")}</div>
        </Link>
      </div>
      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en-US">English</option>
        <option value="es-ES">Spanish</option>
      </select>
      <div className="flex">
        {location.pathname !== "/GPTSearch" && (
          <Link to="/GPTSearch">
            <button className="px-4 py-2 text-white rounded-md bg-slate-500 mr-3">
              GPT Search
            </button>
          </Link>
        )}
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
