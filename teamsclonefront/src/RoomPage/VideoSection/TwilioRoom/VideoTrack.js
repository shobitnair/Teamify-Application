import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { LightTooltip } from "../VideoDock/Tooltip";

var windowWidth =
  window.screen.width < window.outerWidth
    ? window.screen.width
    : window.outerWidth;
var isSmall = windowWidth <= 960;

const VideoTrack = ({ track, name, count }) => {
  //nearly

  let large = isSmall ? 95 : 55; //video portal widths
  let medium = large / 2;
  let small = large / 4;

  //width and preview states for each video element.
  const [width, setwidth] = useState(medium);

  //twilio documented way to pass video streams into DOM.
  const trackRef = useRef();
  useEffect(() => {
    const child = track.attach();
    trackRef.current.classList.add(track.kind);
    trackRef.current.appendChild(child);
    const videosPortal = document.getElementById("videos_portal");
    if (isSmall) {
      if (!videosPortal.classList.contains("videos_mobile_portal_styles")) {
        videosPortal.classList.add("videos_mobile_portal_styles");
      }
    } else {
      if (!videosPortal.classList.contains("videos_portal_styles")) {
        videosPortal.classList.add("videos_portal_styles");
      }
    }
  }, []);

  console.log(windowWidth);
  const handleExpand = () => {
    if (width === medium) setwidth(large);
    else if (width === small) setwidth(medium);
  };

  const handleContract = () => {
    if (width === large) setwidth(medium);
    else if (!isSmall && width === medium) setwidth(small);
  };

  return ReactDOM.createPortal(
    <>
      <div
        id="video_player"
        style={{
          width: String(width) + "vw",
          height: String(width / 1.5) + "vw",
        }}
      >
        <div ref={trackRef}></div>
          <LightTooltip title={name}>
            <p id="video_head">{name}</p>
          </LightTooltip>
          <LightTooltip title="Expand Video">
            <p onClick={handleExpand} id="video_expand">
              <i class="fas fa-expand"></i>
            </p>
          </LightTooltip>
          <LightTooltip title="Contract Video">
            <p onClick={handleContract} id="video_contract">
              <i class="fas fa-compress"></i>
            </p>
          </LightTooltip>
      </div>
    </>,
    document.getElementById("videos_portal")
  );
};

export default VideoTrack;
