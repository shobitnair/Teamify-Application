/*
This component contains the Button Click and Input events for joining / Hosting a Room.

*/

import React, { useState } from "react";
import { connect } from "react-redux";
import JoinRoomInputs from "./JoinRoomInputs";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { checkIfRoomExists } from "../utils/twilioUtils";
import {
  setConnectOnlyWithAudio,
  setIdentity,
  setRoomId,
} from "../store/actions";

import { 
  Button,
  LinearProgress,
  Grid 
} from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';


const JoinRoomContent = (props) => {

  //State definitions.
  const {
    isRoomHost,
    setConnectOnlyWithAudioAction,
    connectOnlyWithAudio,
    setRoomIdAction,
    setIdentityAction,
  } = props;
  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [RoomError, setRoomError] = useState(false);
  const [JoinClicked, setJoinClicked] = useState(false);
  const history = useHistory();

  //Function to handle Join/Host room event.
  const handleJoinToRoom = async () => {
    if(nameValue.length === 0){
      alert("Name feild cant be empty")
      return;
    }
    setIdentityAction(nameValue);
    if (!isRoomHost) {

      if(roomIdValue.length === 0){
        alert("Room ID cant be empty")
        return;
      }
      setJoinClicked(true);
      const roomExists = await checkIfRoomExists(roomIdValue);
      setJoinClicked(false);

      if (roomExists) {
        setRoomIdAction(roomIdValue);
        history.push("/room");
      } else {
        setRoomError(true);
      }
    } else {
      setRoomIdAction(uuidv4());
      history.push("/room");
    }
  };
  
  
  return (
    <>
    <Grid item xs={1} md={4}></Grid>
    <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
    />
    <Grid item xs={1} md={4} ></Grid>
    <Grid item xs={1} md={4} ></Grid>
    <Grid item xs={10} md={4}>
      <Grid xs={12} 
      container
      direction="column"
      id="button_container"
      alignItems="center"
      justify="center"
      >
        <Grid container xs={12}
        direction="column"
        alignItems="center">
          <Grid item xs={12} >
            <div hidden={!RoomError} >
              <Alert severity="error">
                <AlertTitle>Invalid Room ID </AlertTitle>
              </Alert>
            </div>
          </Grid>
          <Grid item xs={12}>
          <LinearProgress hidden={!JoinClicked} />
            <Button id="bt1" onClick={handleJoinToRoom}>
              {isRoomHost ? "Host" : "Join"}
            </Button>
          </Grid>
          <Grid item xs={12}>
          <Button
            id="bt2" 
            disabled={JoinClicked}
            onClick={() => history.push("/")}>
            Cancel
          </Button>
        </Grid>
        </Grid>
        
      </Grid>
    </Grid>
    <Grid item xs={1} md={4}>
    </Grid>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setConnectOnlyWithAudioAction: (onlyWithAudio) =>
      dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
    setIdentityAction: (identity) => dispatch(setIdentity(identity)),
    setRoomIdAction: (id) => dispatch(setRoomId(id)),
  };
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(JoinRoomContent);
