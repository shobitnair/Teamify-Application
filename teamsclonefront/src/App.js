import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JoinRoomPage from "./JoinRoomPage/JoinRoomPage";
import RoomPage from "./RoomPage/RoomPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
import ChannelPage from "./ChannelPage/ChannelPage"
import { Fab } from "@material-ui/core";
import { LightTooltip } from "./RoomPage/VideoSection/VideoDock/Tooltip";


import "./resources/css/App.css";
import "./resources/css/ChatSection.css";
import "./resources/css/IntroductionPage.css";
import "./resources/css/JoinRoomPage.css";
import "./resources/css/Overlay.css";
import "./resources/css/RoomPage.css";
import "./resources/css/VideoSection.css";
import "./resources/css/ParticipantSection.css";
import "./resources/css/ChannelChat.css";
import "./resources/css/ChannelMessage.css";
import "./resources/css/ChannelSidebar.css";
import "./resources/css/ChannelSidebarContent.css";



function App() {
  //Theme states 
  const [theme, setTheme] = useState("theme_default");
  const handleChange = () => {
    if (theme === "theme_default") setTheme("theme_dark");
    else setTheme("theme_default");
  };

  return (
    <>
      {/**Global theme changing hover button */}
      <div className={theme} id="main">
        <LightTooltip title="Change Theme">
          <Fab onClick={handleChange} id="themer">
          </Fab>
        </LightTooltip>

        {/**All routing pages in the application */}
        <Router>
          <Switch>
            <Route path="/channel">
              <ChannelPage/>
            </Route>
            <Route path="/join-room">
              <JoinRoomPage />
            </Route>
            <Route path="/room">
              <RoomPage />
            </Route>
            <Route path="/">
              <IntroductionPage />
            </Route>
          </Switch>
        </Router>

      </div>
    </>
  );
}

export default App;
