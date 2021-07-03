import React, { useState } from "react";
import {  
  Button,
} from "@material-ui/core";
import {LightTooltip} from "./Tooltip"


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

  //turn on the local audio track
  const unmute = () => {
    room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
      localAudioTrackPublication.track.enable();
    });
  };

  //microphone icon state.
  let mic_class = isMicMuted ? "fas fa-microphone-slash" : "fas fa-microphone";
  return (
    <LightTooltip title="Turn On/Off your microphone">
      <Button onClick={handleMicButtonPressed} id="other_bt">
        <i class={mic_class}></i>
      </Button>
    </LightTooltip>
  );
};

export default MicButton;
