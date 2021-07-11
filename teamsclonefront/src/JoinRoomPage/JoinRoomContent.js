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

const JoinRoomContent = (props) => {
	//State definitions.
	const { isRoomHost, setRoomIdAction, setIdentityAction } = props;

	const [roomIdValue, setRoomIdValue] = useState("");
	const [nameValue, setNameValue] = useState("");
	const [JoinClicked, setJoinClicked] = useState(false);
	const history = useHistory();

	//Function to handle Join/Host room input feild event.
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

	//Function to handle the button events
	const Buttons = () => {
		return (
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
						onClick={() => history.goBack()}
					>
						Cancel
					</Button>
				</Grid>
			</div>
		);
	};

	return (
		<>
			<Grid container xs={12} direction="row">
				<Grid item xs={1} md={4}></Grid>

				<Grid item xs={10} md={4} id="content">
					<JoinRoomInputs
						roomIdValue={roomIdValue}
						setRoomIdValue={setRoomIdValue}
						nameValue={nameValue}
						setNameValue={setNameValue}
						isRoomHost={isRoomHost}
					/>
				</Grid>

				<Grid item xs={1} md={4}></Grid>
				<Grid item xs={1} md={4}></Grid>

				<Grid
					item
					xs={10}
					md={4}
					id="content"
					style={{ borderRadius: "0px 0px 5px 5px" }}
				>
					<Grid
						container
						xs={12}
						direction="column"
						alignItems="center"
						justify="center"
					>
						<Buttons />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

// redux states to handle state changes in identity and roomid

const mapDispatchToProps = (dispatch) => {
	return {
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
