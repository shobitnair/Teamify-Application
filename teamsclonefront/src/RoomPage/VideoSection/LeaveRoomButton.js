import React from "react";

const LeaveRoomButton = ({ room }) => {
  const handleRoomDisconnection = () => {
    // handle disconnection with room
    const siteUrl = window.location.origin;
    window.location.href = siteUrl;
  };

  return (
    <div className="video_button_container">
      <button className="video_button_end" onClick={handleRoomDisconnection}>
        Leave Room
      </button>
    </div>
  );
};

export default LeaveRoomButton;
