import React, { useEffect, useState } from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import { connect } from "react-redux";
import { setTwilioAccessToken } from "../store/actions";
import { getTokenFromTwilio } from "../utils/twilioUtils";
import Overlay from "./Overlay";
import { useHistory } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles
} from "@material-ui/core"
import VideoLabelIcon from '@material-ui/icons/VideoLabel';

import "../resources/css/RoomPage.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height:"10vh",
  },
});



const RoomPage = (props) => {
  const { identity, setTwilioAccessTokenAction, roomId, showOverlay } = props;
  const history = useHistory();
  useEffect(() => {
    if (!identity || !roomId) {
      history.push("/");
    }
    getTokenFromTwilio(setTwilioAccessTokenAction, identity);
  }, []);

  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  return (
    <>
      {showOverlay && <Overlay />}

      <Hidden smDown>
        <Grid container direction="row" id="page">
          <Grid item style={{"width":"20%" , "height":"100vh"}}>
            <div id="participant"><ParticipantsSection /></div>
          </Grid>
          <Grid item style={{"width":"59%",  "height":"100vh"}}>
            <div id="room"><VideoSection /></div>
          </Grid>
          <Grid item style={{"width":"20%" , "height":"100vh"}}>
            <div id="chat"><ChatSection /></div>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid container direction="column" id="page">
        <Grid hidden={value!==0} item style={{"width":"100vw",  "height":"90vh"}}>
            <div id="participant"><ParticipantsSection/></div>
          </Grid>
          <Grid hidden={value!==1} item style={{"width":"100vw",  "height":"90vh"}}>
            <div id="room"><VideoSection /></div>
          </Grid>
          <Grid hidden={value!==2} item style={{"width":"100vw" , "height":"90vh"}}>
            <div id="chat"><ChatSection /></div>
          </Grid>
        </Grid>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
      <BottomNavigationAction label="Participants" />
      <BottomNavigationAction label="Video" icon={<VideoLabelIcon/>} />
      <BottomNavigationAction label="Messages" />
        </BottomNavigation>
      </Hidden>
    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setTwilioAccessTokenAction: (token) =>
      dispatch(setTwilioAccessToken(token)),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomPage);
