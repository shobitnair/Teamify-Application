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


const JoinRoomContent = (props) => {
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
  const [circleState , setCircleState] = useState('static')
  const history = useHistory();

  const handleJoinToRoom = async () => {
    setIdentityAction(nameValue);
    if (!isRoomHost) {
      setJoinClicked(true);
      setCircleState('indeterminate')
      const roomExists = await checkIfRoomExists(roomIdValue);
      setJoinClicked(false);
      setCircleState('static')
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
    <Grid xs={1} md={4} id="dummy">
    </Grid>
    <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
    <Grid xs={1} md={4} id="dummy"></Grid>
    <Grid xs={1} md={4} id="dummy"></Grid>
    <Grid xs={10} md={4}
    container
    direction="column"
    id="button_container"
    alignItems="center"
    justify="center"
    >
          <Grid item>
          </Grid>
          <Grid item>
          <LinearProgress hidden={!JoinClicked} />
          <p 
          hidden={!RoomError}
          id="error">Invalid Room ID !!</p>
          <Button id="bt1" onClick={handleJoinToRoom}>
          {isRoomHost ? "Host" : "Join"}
          </Button>
          </Grid>
          <Grid item>
          
          <Button
          id="bt2" 
          disabled={JoinClicked}
          onClick={() => history.push("/")}>
          Cancel
          </Button>
          </Grid>
    </Grid>
    <Grid xs={1} md={4} id="dummy">
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
