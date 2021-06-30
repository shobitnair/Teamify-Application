import React, { useState } from "react";
import VideoButtons from "./VideoButtons";
import Videos from "./Videos";
import {Grid} from "@material-ui/core"

/*<div className="video_section_container">
      <Videos room={room} setRoom={setRoom} />
      <VideoButtons room={room} />
    </div>
*/

const VideoSection = () => {
  const [room, setRoom] = useState(null);

  return (
    
    <Grid container direction="column">
      <Grid md={12} id="video_container"></Grid>
    </Grid>
  );
};

export default VideoSection;
