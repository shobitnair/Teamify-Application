import React from "react";
import Messages from "./Messages";
import NewMessage from "./NewMessage";
import { Grid } from "@material-ui/core";

const ChatSection = (props) => {
	let wid = props.mobile ? "100vw" : "20vw";
	return (
		<>
			<Grid item xs={12} id="chat_header">
				Messages
			</Grid>
			<Grid item xs={12} id="chat_bubble_block">
				<Messages />
			</Grid>
			<Grid item xs={12} id="chat_input_block" style={{ width: wid }}>
				<NewMessage />
			</Grid>
		</>
	);
};

export default ChatSection;
