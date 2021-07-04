import React, { useEffect, useState } from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import { Grid } from "@material-ui/core";

const RoomPageLarge = () => {
  return (
    <Grid container direction="row" id="page" style={{height: "100vh"}}>

      <Grid item style={{ width: "20%" }}>
        <div id="participant"><ParticipantsSection /></div>
      </Grid>

      <Grid item style={{ width: "59%" }}>
        <div id="room"><VideoSection /></div>
      </Grid>

      <Grid item style={{ width: "20%"}}>
        <div id="chat"> <ChatSection /></div>
      </Grid>
      
    </Grid>
  );
};

export default RoomPageLarge;
