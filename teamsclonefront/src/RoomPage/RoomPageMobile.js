import React, { useState } from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import { Grid, Button } from "@material-ui/core";

//split the page into 3 sections for easy use in mobile
//added a bottom navbar

const RoomPageMobile = () => {
  //Page Display state
  const [page, setPage] = useState("video");

  const NavBar = () =>{
    return (<div id="navbar">
    <Button id="nav_bt" onClick={() => setPage("participant")}>
      <i class="fas fa-address-card"></i>
    </Button>
    <Button id="nav_bt" onClick={() => setPage("video")}>
      <i class="fas fa-border-all"></i>
    </Button>
    <Button id="nav_bt" onClick={() => setPage("message")}>
      <i class="fas fa-comment-alt"></i>
    </Button>
  </div>)
  }

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
            <ChatSection mobile={true} />
          </div>
        </Grid>
      </Grid>

      <NavBar />
      
    </>
  );
};

export default RoomPageMobile;
