import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Amritesh I am in body");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const newUser = {
          userId: user.uid,
          email: user.email,
          displayName: user.displayName,
        };
        dispatch(addUser(newUser));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Body;
