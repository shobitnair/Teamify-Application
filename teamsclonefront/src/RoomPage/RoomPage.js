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

/*
<div className="room_container">
        <ParticipantsSection />
        <VideoSection />
        <ChatSection />
        {showOverlay && <Overlay />}
        </div>
*/

  return (
    <><div className="room_container">
    <VideoSection />
    {showOverlay && <Overlay />}
    </div>
      <Hidden smDown>
        <Grid container spacing={2} id="whole">
          <Grid item id="participant">
            <ParticipantsSection/>
          </Grid>
          <Grid item id="room">
          </Grid>
          <Grid item id="chat">
            <ChatSection />
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
