import React, { useEffect , useState } from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import { connect } from "react-redux";
import { setTwilioAccessToken } from "../store/actions";
import { getTokenFromTwilio } from "../utils/twilioUtils";
import Overlay from "./Overlay";
import {useHistory} from "react-router-dom"
import {
  Grid ,
  Hidden,
} from "@material-ui/core"

import "./RoomPage.css";


const RoomPage = (props) => {
  const { identity, setTwilioAccessTokenAction, roomId , showOverlay } = props;
  const history = useHistory();
  useEffect(() => {
    if(!identity || !roomId){
      history.push("/")
    }
    getTokenFromTwilio(setTwilioAccessTokenAction, identity);
  }, []);


  return (
    <>
    {showOverlay && <Overlay />}
      <Hidden smDown>
        <Grid container direction="row" spacing={2} id="page">
          <Grid item  id="room">
            <VideoSection />
          </Grid>
          <Grid item id="chat">
            <ChatSection />
            <ParticipantsSection/>
          </Grid>
        </Grid>
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
