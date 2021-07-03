import React, { useState } from "react";
import VideoButtons from "./VideoDock/VideoButtons";
import Videos from "./Videos";
import { Grid } from "@material-ui/core";

const VideoSection = () => {
  const [room, setRoom] = useState(null);

  return (
    <>
      <Grid container direction="column">
        <Grid item md={12}>
          <div id="video_dock">
            <VideoButtons room={room} />
          </div>
        </Grid>
        <Grid item md={12}>
          <div id="video_container">
            <Videos room={room} setRoom={setRoom} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default VideoSection;
