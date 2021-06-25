import React from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import JoinRoom from './JoinRoom/JoinRoom'
import RoomPage from './RoomPage/RoomPage'
import HomePage from './HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/join-room">
          <JoinRoom/>
        </Route>

        <Route path="/room">
          <RoomPage/>
        </Route>

        <Route path="/">
          <HomePage/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
