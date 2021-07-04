import React, { useEffect, useState } from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import RoomPageMobile from "./RoomPageMobile";
import RoomPageLarge from "./RoomPageLarge";
import { connect } from "react-redux";
import { setTwilioAccessToken } from "../store/actions";
import { getTokenFromTwilio } from "../utils/twilioUtils";
import Overlay from "./Overlay";
import { useHistory } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";

import "../resources/css/RoomPage.css";

const RoomPage = (props) => {
  const { identity, setTwilioAccessTokenAction, roomId, showOverlay } = props;
  const history = useHistory();
  useEffect(() => {
    if (!identity || !roomId) {
      history.push("/");
    }
    getTokenFromTwilio(setTwilioAccessTokenAction, identity);
  }, []);

  return (
    <>
      {showOverlay && <Overlay />}
      <Hidden smDown>
        <RoomPageLarge />
      </Hidden>
      <Hidden mdUp>
        <RoomPageMobile />
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
