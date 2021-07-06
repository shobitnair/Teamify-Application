import React, { useState } from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import { Grid, Button } from "@material-ui/core";

const RoomPageMobile = () => {
  //Page Display state
  const [page, setPage] = useState("video");

  return (
    <>
      <Grid container direction="row" id="page" style={{ height: "97vh" }}>
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

      <div id="navbar">
        <Button id="nav_bt" onClick={() => setPage("participant")}>
          <i class="fas fa-users"></i>
        </Button>
        <Button id="nav_bt" onClick={() => setPage("video")}>
        <i class="fas fa-ticket-alt"></i>
        </Button>
        <Button id="nav_bt" onClick={() => setPage("message")}>
          <i class="fas fa-comment-alt"></i>
        </Button>
        <Button id="nav_bt">
          <i class="fas fa-bars"></i>
        </Button>
      </div>
    </>
  );
};

export default RoomPageMobile;
