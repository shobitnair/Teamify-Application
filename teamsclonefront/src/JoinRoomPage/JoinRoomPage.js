import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import { useLocation } from "react-router-dom";
import JoinRoomContent from "./JoinRoomContent";
import { Grid, Hidden } from "@material-ui/core";
import "../resources/css/JoinRoomPage.css";
import chat from "../resources/images/chat.svg";
import join3 from "../resources/images/join3.svg";
import join4 from "../resources/images/join4.svg";

const JoinRoomPage = (props) => {
  // extract isRoomHost detail from the website url suffix
  const { setIsRoomHostAction, isRoomHost } = props;
  const search = useLocation().search;

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    console.log(isRoomHost);
    if (isRoomHost) {
      setIsRoomHostAction(true);
    }
  }, []);

  // render Join Host Page based on user choice.
  const titleText = isRoomHost ? "Host meeting" : "Join meeting";

  const Images = () => {
    return (
      <>
        <Hidden smDown>
          <img src={chat} id="img1"></img>
          <img src={join4} id="img2"></img>
        </Hidden>
        <Hidden mdUp>
          <img src={join3} id="img_mobile"></img>
        </Hidden>
      </>
    );
  };

  const Content = () =>{
    return(
      <Grid container>
      <Grid item xs={1} md={4}></Grid>
      <Grid item xs={10} md={4} id="title_container">
        <div id="title">{titleText}</div>
      </Grid>
      <Grid item xs={1} md={4}></Grid>
      <Grid item xs={12}>
        <JoinRoomContent />
      </Grid>
    </Grid>
    )
  }

  return (
    <div id="join-room-page">
      <Images/>
      <Content/>
    </div>
  );
};


// REDUX to update the isRoomHost state.
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
