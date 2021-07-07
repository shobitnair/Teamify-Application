import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./login/Login";
import Sidebar from "./sidebar/Sidebar";
import Chat from "./chat/Chat";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const ChannelPage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // once component mount activate firebase listener and update redux store with user info
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
            rooms:[],
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  console.log(user);
  return (
    <div className="app">
      {user ? (
        <div style={{ display: "flex" }}>
          <Sidebar user={user} />
          <Chat user={user}/>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default ChannelPage;
