import React from "react";
import { connect } from "react-redux";
import MicButton from "./MicButton";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";
import ShareLinkButton from "./ShareLinkButton";
import {
  Grid,
} from "@material-ui/core";

//Omit screenshare feature for mobile devices.
var windowWidth =
  window.screen.width < window.outerWidth
    ? window.screen.width
    : window.outerWidth;
var isSmall = windowWidth <= 960;

const VideoButtons = (props) => {
  const { roomId, room} = props;
  //console.log("a",roomId);
  return (
    <>
      <Grid container xs={12}  direction="row" justify="space-evenly">
        <Grid item>
          <Grid container xs={12} id="dock_bt">
            <MicButton room={room} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container xs={12} id="dock_bt">
            <CameraButton room={room}/>
          </Grid>
        </Grid>
        <Grid item hidden={isSmall}>
          <Grid container xs={12} id="dock_bt">
            <SwitchToScreenSharingButton room={room} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container xs={12} id="dock_bt">
            <ShareLinkButton roomId={roomId} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container xs={12} id="dock_bt">
            <LeaveRoomButton room={room} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(VideoButtons);
