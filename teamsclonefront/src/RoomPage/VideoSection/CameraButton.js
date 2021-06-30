/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import{Button} from "@material-ui/core"

const CameraButton = ({ room }) => {
  const [isLocalVideoTrackDisabled, setIsLocalVideoTrackDisabled] =
    useState(false);

  const handleCameraButtonPressed = () => {
    isLocalVideoTrackDisabled ? startVideo() : stopVideo();

    setIsLocalVideoTrackDisabled(!isLocalVideoTrackDisabled);
  };

  const startVideo = () => {
    // start sending back video stream to other users
    room.localParticipant.videoTracks.forEach((localVideoTrackPublication) => {
      localVideoTrackPublication.track.enable();
    });
  };

  const stopVideo = () => {
    // stop sending camera stream to other users
    room.localParticipant.videoTracks.forEach((localVideoTrackPublication) => {
      localVideoTrackPublication.track.disable();
    });
  };

  let cameraON = <i class="fas fa-video"></i> ;
  let cameraOFF = <i class="fas fa-video-slash"></i>;
  return (
    <Button
      onClick={handleCameraButtonPressed}>
      <div >
      {!isLocalVideoTrackDisabled ? cameraON : cameraOFF}
      </div>
    </Button>
  );
};

export default CameraButton;
