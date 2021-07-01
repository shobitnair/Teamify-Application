import React, { useState } from "react";
import { LocalVideoTrack } from "twilio-video";
import LocalScreenSharingPreview from "./ScreenSharePreview";
import { Button } from "@material-ui/core";

const SwitchToScreenSharingButton = ({ room }) => {
  //ScreenShare states
  const [isActive, setIsActive] = useState(false);
  const [screenShareTrack, setScreenShareTrack] = useState(null);
  const [screenShareStream, setScreenShareStream] = useState(null);

  const handleScreenShareEvent = () => {
    // handle screen sharing
    if (!isActive) {
      navigator.mediaDevices
        .getDisplayMedia()
        .then((stream) => {
          setScreenShareStream(stream);
          setIsActive(true);
          const screenTrack = new LocalVideoTrack(stream.getVideoTracks()[0], {
            name: "screen-share-track",
          });

          room.localParticipant.publishTrack(screenTrack);
          setScreenShareTrack(screenTrack);

          // Accept event from browser pop-up window.
          stream.getVideoTracks()[0].onended = () => {
            room.localParticipant.unpublishTrack(screenTrack);
            setScreenShareTrack(null);
            setIsActive(false);
          };
        })
        .catch((err) => {
          alert("cound not get an access to share screen");
          console.log(err);
        });
    } 
    else {
      screenShareTrack.stop();
      room.localParticipant.unpublishTrack(screenShareTrack);
      setScreenShareTrack(null);
      setIsActive(false);
    }
  };

  return (
    <>
      <Button onClick={handleScreenShareEvent} id="other_bt">
        <i class="fab fa-chromecast"></i>
      </Button>
      {isActive && <LocalScreenSharingPreview stream={screenShareStream} />}
    </>
  );
};

export default SwitchToScreenSharingButton;
