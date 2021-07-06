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

import { Button, LinearProgress, Grid } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const JoinRoomContent = (props) => {
  //State definitions.
  const {
    isRoomHost,
    //setConnectOnlyWithAudioAction,
    //connectOnlyWithAudio,
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
    if (nameValue.length === 0) {
      alert("Name feild cant be empty");
      return;
    }
    setIdentityAction(nameValue);
    if (!isRoomHost) {
      if (roomIdValue.length === 0) {
        alert("Room ID cant be empty");
        return;
      }
      setJoinClicked(true);
      const roomExists = await checkIfRoomExists(roomIdValue);
      setJoinClicked(false);

      if (roomExists) {
        setRoomIdAction(roomIdValue);
        history.push("/room");
      } else {
        alert("Invalid Room ID , Try again with a proper one");
      }
    } else {
      setRoomIdAction(uuidv4());
      history.push("/room");
    }
  };

  return (
    <>
      <Grid container xs={12} direction="row">
        <Grid item xs={1} md={4}></Grid>
        <Grid item xs={10} md={4}>
          <Grid item xs={12} id="content">
            <JoinRoomInputs
              roomIdValue={roomIdValue}
              setRoomIdValue={setRoomIdValue}
              nameValue={nameValue}
              setNameValue={setNameValue}
              isRoomHost={isRoomHost}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} md={4}></Grid>
        <Grid item xs={1} md={4}></Grid>
        <Grid item xs={10} md={4} 
        id="content"
        style={{"borderRadius":"0px 0px 5px 5px"}}>
          <Grid
            container
            xs={12}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <div id="button_container">
              <Grid item xs={12}>
                <LinearProgress hidden={!JoinClicked} />
                <Button id="bt1" onClick={handleJoinToRoom}>
                  {isRoomHost ? "Host" : "Join"}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  id="bt2"
                  disabled={JoinClicked}
                  onClick={() => history.push("/")}
                >
                  Cancel
                </Button>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={1} md={4}></Grid>
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
