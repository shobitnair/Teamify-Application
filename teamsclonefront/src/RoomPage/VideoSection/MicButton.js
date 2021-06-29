import React, { useState } from "react";
import {Button} from "@material-ui/core"


const MicButton = ({ room }) => {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const handleMicButtonPressed = () => {
    isMicMuted ? unmute() : mute();
    setIsMicMuted(!isMicMuted);
  };

  const mute = () => {
    // mute our microphone so other users will be not able to hear us
    room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
      localAudioTrackPublication.track.disable();
    });
  };

  const unmute = () => {
    // turn on mic back
    room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
      localAudioTrackPublication.track.enable();
    });
  };

  let mic_class = 
    isMicMuted?"fas fa-microphone-slash":"fas fa-microphone";
  return (
    <>
      <Button 
      id="button_mute"
      onClick={handleMicButtonPressed}>
        <i class={mic_class}></i> 
      </Button>
    </>
  );
};

export default MicButton;
