import React, { useState } from "react";
import {Button} from "@material-ui/core"


const MicButton = ({ room }) => {

  //Mic states
  const [isMicMuted, setIsMicMuted] = useState(false);
  const handleMicButtonPressed = () => {
    isMicMuted ? unmute() : mute();
    setIsMicMuted(!isMicMuted);
  };

  //turn off the local audio track
  const mute = () => {
    room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
      localAudioTrackPublication.track.disable();
    });
  };

  //turn oon the local audio track
  const unmute = () => {
    room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
      localAudioTrackPublication.track.enable();
    });
  };

  //microphone icon state.
  let mic_class = isMicMuted?"fas fa-microphone-slash":"fas fa-microphone";
  return (
    <>
      <Button  
      onClick={handleMicButtonPressed}
      id="other_bt">
        <i class={mic_class}></i>
      </Button>
    </>
  );
};

export default MicButton;
