import React, { useState } from "react";
import { LocalVideoTrack } from "twilio-video";
import SwitchImg from "../../resources/images/switchToScreenSharing.svg";
import LocalScreenSharingPreview from "./LocalScreenSharingPreview";

const SwitchToScreenSharingButton = ({ room }) => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
  const [screenShareTrack, setScreenShareTrack] = useState(null);
  const [screenShareStream, setScreenShareStream] = useState(null);

  const handleScreenSharingEnabling = () => {
    // handle screen sharing
    if (!isScreenSharingActive) {
      navigator.mediaDevices
        .getDisplayMedia()
        .then((stream) => {
          setScreenShareStream(stream);
          setIsScreenSharingActive(true);
          const screenTrack = new LocalVideoTrack(stream.getVideoTracks()[0], {
            name: "screen-share-track",
          });

          room.localParticipant.publishTrack(screenTrack);
          setScreenShareTrack(screenTrack);
          //event listener for chrome based web browsers popup
          stream.getVideoTracks()[0].onended = () => {
            room.localParticipant.unpublishTrack(screenTrack);
            setScreenShareTrack(null);
            setIsScreenSharingActive(false);
          };
        })
        .catch((err) => {
          console.error("cound not get an access to share screen", err);
        });
    } else {
      screenShareTrack.stop();
      room.localParticipant.unpublishTrack(screenShareTrack);
      setScreenShareTrack(null);
      setIsScreenSharingActive(false);
    }
  };

  return (
    <>
      <div className="video_button_container">
        <img
          src={SwitchImg}
          onClick={handleScreenSharingEnabling}
          className="video_button_image"
        />
      </div>
      {isScreenSharingActive && (
        <LocalScreenSharingPreview stream={screenShareStream} />
      )}
    </>
  );
};

export default SwitchToScreenSharingButton;
