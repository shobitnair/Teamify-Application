import React, { useState } from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import { Grid , Button } from "@material-ui/core";
import roomIcon from '@material-ui/icons/SettingsInputSvideo';
const RoomPageMobile = () => {
  const [page, setPage] = useState("video");

  return (
      <>
    <Grid container direction="row" id="page" style={{ height: "90vh" }}>

      <Grid item xs={12} hidden={page !== "participant"}>
        <div id="participant">
          <ParticipantsSection />
        </div>
      </Grid>

      <Grid item xs={12} hidden={page !== "video"}>
        <div id="room">
          <VideoSection />
        </div>
      </Grid>

      <Grid item xs={12} hidden={page !== "message"}>
        <div id="chat">
          <ChatSection />
        </div>
      </Grid>
    </Grid>
    
    
    </>
  );
};

export default RoomPageMobile;
