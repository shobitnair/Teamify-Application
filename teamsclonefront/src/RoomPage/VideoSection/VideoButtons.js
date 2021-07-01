import React from "react";
import { connect } from "react-redux";
import MicButton from "./MicButton";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";
import ShareLinkButton from "./ShareLinkButton";
import { Grid, Button } from "@material-ui/core";



const VideoButtons = (props) => {
  const { roomId, room, connectOnlyWithAudio } = props;
  return (
    <>
      <Grid container md={12} direction="row" justify="center">
        <Grid item md={2}>
          <Grid container md={12} id="dock_bt">
            <MicButton room={room} />
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Grid container md={12} id="dock_bt">
            <CameraButton room={room} onlyaudio={connectOnlyWithAudio} />
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid container md={12} id="dock_bt">
            <LeaveRoomButton room={room} />
          </Grid>
        </Grid>
        <Grid item md={2}>
          <Grid container md={12} id="dock_bt">
            <SwitchToScreenSharingButton room={room} />
          </Grid>
        </Grid>
        <Grid item md={2} id="dock_bt">
          <Grid container md={12} id="dock_bt">
            <ShareLinkButton text={roomId} />
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
