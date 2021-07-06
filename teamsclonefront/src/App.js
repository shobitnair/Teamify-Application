import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JoinRoomPage from "./JoinRoomPage/JoinRoomPage";
import RoomPage from "./RoomPage/RoomPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";

import "./App.css";
import "./resources/css/ChatSection.css"
import "./resources/css/IntroductionPage.css";
import "./resources/css/JoinRoomPage.css";
import "./resources/css/Overlay.css";
import "./resources/css/RoomPage.css";
import "./resources/css/VideoSection.css";
import "./resources/css/ParticipantSection.css"

function App() {
  return (
    <div className="theme_default_dark" id="main">
      <Router>
        <Switch>
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
  );
}

export default App;
