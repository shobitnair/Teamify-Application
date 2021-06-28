import React from "react";
import { useHistory } from "react-router-dom";
import { 
  Button,
} from '@material-ui/core'


const HomeButtons = () => {

  let history = useHistory();
  return (
    <>
      <Button 
      id="bt_default"
      onClick={() => {history.push("/join-room?host=true");}}
      >
        Host a Meeting
      </Button> 
      <br></br> 
      <Button 
      id="bt_default"
      onClick={() => {history.push("/join-room")}}
      >
        Join a Meeting
      </Button>
    </>
  );
};

export default HomeButtons;
