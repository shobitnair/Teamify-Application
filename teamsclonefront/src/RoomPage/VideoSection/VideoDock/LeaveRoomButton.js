import React  from "react";
import { Button } from "@material-ui/core";



const LeaveRoomButton = ({ room }) => {

  const handleLeaveEvent = () => {
    room.disconnect();
    //disconnect and go to Home
    const siteUrl = window.location.origin;
    window.location.href = siteUrl;
  };

  
  return (
    <Button onClick={handleLeaveEvent} id="leave_bt">
      Leave Room
    </Button>
  );
};

export default LeaveRoomButton;
