/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { LightTooltip } from "./Tooltip";

const CameraButton = ({ room }) => {
  // Camera states and event handler
  const [isCameraOff, setisCameraOff] = useState(false);
  const handleCameraEvent = () => {
    isCameraOff ? startVideo() : stopVideo();
    setisCameraOff(!isCameraOff);
  };

  const startVideo = () => {
    // start sending back video stream to other users
    room.localParticipant.videoTracks.forEach((stream) => {
      stream.track.enable();
    });
  };

  const stopVideo = () => {
    // stop sending camera stream to other users

    room.localParticipant.videoTracks.forEach((stream) => {
      //console.log(stream.track.name);
      //Delete user video streams that are videos.
      if (stream.track.name !== "screen-share-track") {
        stream.track.disable();
      }
    });
  };

  //Camera icon states
  let cameraON = <i class="fas fa-video"></i>;
  let cameraOFF = <i class="fas fa-video-slash"></i>;
  return (
    <LightTooltip title="Turn On/Off your Camera">
      <Button id="other_bt" onClick={handleCameraEvent}>
        {!isCameraOff ? cameraON : cameraOFF}
      </Button>
    </LightTooltip>
  );
};

export default CameraButton;
