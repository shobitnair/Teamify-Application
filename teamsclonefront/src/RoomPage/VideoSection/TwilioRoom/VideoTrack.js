import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const VideoTrack = ({ track, name, count }) => {
  const [width, setwidth] = useState("49%");

  const trackRef = useRef();
  useEffect(() => {
    const child = track.attach();
    trackRef.current.classList.add(track.kind);
    trackRef.current.appendChild(child);
    const videosPortal = document.getElementById("videos_portal");
    if (!videosPortal.classList.contains("videos_portal_styles")) {
      videosPortal.classList.add("videos_portal_styles");
    }
  }, []);

  const handleExpand = () => {
    if (width === "49%") {
      setwidth("99%");
    } else if (width === "24%") {
      setwidth("49%");
    }
  };

  const handleContract = () => {
    if (width === "49%") {
      setwidth("24%");
    } else if (width === "99%") {
      setwidth("49%");
    }
  };

  return ReactDOM.createPortal(
    <>
      <div id="video_player" style={{ width: width, height: width }}>
        <p id="video_head">{name}</p>
        <div ref={trackRef}></div>
        <p onClick={handleExpand} id="video_expand">
          <i class="fas fa-expand"></i>
        </p>
        <p onClick={handleContract} id="video_contract">
          <i class="fas fa-compress"></i>
        </p>
      </div>
    </>,
    document.getElementById("videos_portal")
  );
};

export default VideoTrack;
