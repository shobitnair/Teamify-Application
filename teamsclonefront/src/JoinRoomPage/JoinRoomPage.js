import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import { useLocation } from "react-router-dom";
import JoinRoomContent from "./JoinRoomContent";
import {Grid , Hidden} from "@material-ui/core" 
import "./JoinRoomPage.css";
import chat from "../resources/images/chat.svg"
import chat2 from "../resources/images/chat2.svg"

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
    <div style={{"backgroundColor":'#BDBDE6'}}>
      <Hidden smDown>
      <img src={chat} id="img1"></img>
      <img src={chat2} id="img2"></img>
      </Hidden>
      <Grid container >
        <Grid xs={1} md={4} ></Grid>
        <Grid xs={10} md={4} id="title_container">
          <p id="title">{titleText}</p>
        </Grid>
        <Grid xs={1} md={4}></Grid>
        <JoinRoomContent />
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
