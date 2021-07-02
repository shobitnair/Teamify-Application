import React, { useState ,useRef, useEffect } from "react";
import ReactDOM from "react-dom";



const VideoTrack = ({ track , name }) => {

  const [width , setwidth] = useState("49%")
  const [height,setheight] = useState("49%")
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

  
  const handleClick=()=>{
    console.log(width , height);
    if(width==="99%"){
      setwidth("49%");
      setheight("49%");
    }
    else
    {
      setwidth("99%");
      setheight("99%");
    }
  }
  
  return ReactDOM.createPortal(
    <>
      <div id="video_player" 
      onCLick={handleClick}
      style={{"width":width , "height":height}}>
        <p id="video_head">{name}</p>
        <div ref={trackRef}>
        </div>
      </div>
    </>,
    document.getElementById("videos_portal")
  );
};

export default VideoTrack;
