import React  from "react";
import { Button } from "@material-ui/core";
import {LightTooltip} from "./Tooltip"


const LeaveRoomButton = ({ room }) => {

  const handleLeaveEvent = () => {
    room.disconnect();
    //disconnect and go to Home
    const siteUrl = window.location.origin;
    window.location.href = siteUrl;
  };

  return (
    <LightTooltip title="Leave Room">
      <Button onClick={handleLeaveEvent} id="leave_bt">
      <i class="fas fa-phone-slash"></i>
    </Button>
    </LightTooltip>
  );
};

export default LeaveRoomButton;
