import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import { useLocation } from "react-router-dom";
import JoinRoomContent from "./JoinRoomContent";
import {Grid , Hidden} from "@material-ui/core" 
import "../resources/css/JoinRoomPage.css";
import chat from "../resources/images/chat.svg"
import chat2 from "../resources/images/chat2.svg"
import home4 from "../resources/images/home4.svg"

const JoinRoomPage = (props) => {
  
  const { setIsRoomHostAction, isRoomHost } = props;
  const search = useLocation().search;

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    if (isRoomHost) {
      setIsRoomHostAction(true);
    }
  }, []);

  const titleText = isRoomHost ? "Host meeting" : "Join meeting";

  return (
    <div id="join-room-page">
      <Hidden smDown>
      <img src={chat} id="img1"></img>
      <img src={home4} id="img2"></img>
      </Hidden>
      <Hidden mdUp>
        <img src={home4} id="img_mobile"></img>
      </Hidden>
      <Grid container >
        <Grid item xs={1} md={4} ></Grid>
        <Grid item xs={10} md={4} id="title_container">
          <p id="title">{titleText}</p>
        </Grid>
        <Grid item xs={1} md={4}></Grid>
        <Grid item xs={12}>
          <JoinRoomContent />
        </Grid>
      </Grid>
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
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoomPage);
