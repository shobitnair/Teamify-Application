import React, { useState } from "react";
import VideoButtons from "./VideoButtons";
import Videos from "./Videos";
import {Grid} from "@material-ui/core"

const VideoSection = () => {
  const [room, setRoom] = useState(null);

  return (
    <>
    <div className="video_section_container">
      <Videos room={room} setRoom={setRoom} />
      <VideoButtons room={room} />
    </div>
  </>
  );
};

export default VideoSection;
