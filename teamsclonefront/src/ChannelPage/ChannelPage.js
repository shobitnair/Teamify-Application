import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "../store/actions";
import Login from "./login/Login";
import Sidebar from "./sidebar/Sidebar";
import Chat from "./chat/Chat";
import { auth } from "./firebase";
import {Grid} from "@material-ui/core"

const ChannelPage = (props) => {
  
  const { setUserAction, user } = props;
  useEffect(() => {
    // once component mount activate firebase listener and update redux store with user info
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUserAction(
          {
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
            rooms:[],
          }
        );
      } else {setUserAction("");
      }
    });
  }, []);

  return (
    <div >
      {user ? (
        <div >
          <Grid container direction="row" xs={12}>
          <Grid item style={{"width":"20%"}}>
            <Sidebar user={user} />
          </Grid>
          <Grid item style={{"width":"80%"}}>
            <Chat user={user}/>
          </Grid>
          </Grid>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};


const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserAction: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(ChannelPage);
