import React from "react";
import { Grid } from "@material-ui/core";

const JoinRoomInputs = (props) => {
	const { nameValue, setNameValue, roomIdValue, setRoomIdValue, isRoomHost } =
		props;

	const handleRoomID = (event) => {
		setRoomIdValue(event.target.value);
	};

	const handleName = (event) => {
		setNameValue(event.target.value);
	};

	return (
		<>
			<Grid
				container
				id="input_container"
				alignItems="center"
				justify="center"
			>
				<form>
					{!isRoomHost && (
						<>
							<input
								id="room_input"
								placeholder="Meeting ID"
								value={roomIdValue}
								onChange={handleRoomID}
							/>
							<br />
						</>
					)}
					<input
						id="name_input"
						placeholder="Name"
						value={nameValue}
						onChange={handleName}
					/>
				</form>
			</Grid>
		</>
	);
};

export default JoinRoomInputs;
