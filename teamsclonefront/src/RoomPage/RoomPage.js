import React, { useEffect} from "react";
import RoomPageMobile from "./RoomPageMobile";
import RoomPageLarge from "./RoomPageLarge";
import { connect } from "react-redux";
import { setTwilioAccessToken } from "../store/actions";
import { getTokenFromTwilio } from "../utils/twilioUtils";
import Overlay from "./Overlay";
import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";


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


// Obtain and update twilio API states in redux.
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
