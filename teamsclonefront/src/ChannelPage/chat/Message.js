import { Avatar } from "@material-ui/core";
import React, { forwardRef, useState } from "react";
import { connect } from "react-redux";
import { Grid, Collapse, Button } from "@material-ui/core";
import { db } from "../firebase";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Message = forwardRef(
	(
		{
			user,
			id,
			chatId,
			contents: { timestamp, displayName, email, message, photo, uid },
		},
		ref
	) => {
		const [show, setShow] = useState(false);
		const showdetail = () => {
			setShow(!show);
		};
		const author = user.displayName === displayName ? "You" : displayName;

		const messageDelete = () => {
			let temp = { timestamp, displayName, email, message, photo, uid };
			temp.message = "Message Deleted";
			db.collection("chats")
				.doc(chatId)
				.collection("messages")
				.doc(id)
				.update(temp);
		};

		let hiddenDetails = (
			<Collapse in={show && message !== "Message Deleted"} id="chat_info">
				<hr />
				<Avatar className="message__photo" src={photo} />
				<br />
				{email}
				<br />
				{new Date(timestamp?.toDate()).toLocaleString()}
				<hr/>
				<div hidden={author !== "You"}>
					<Button onClick={messageDelete}>
						<i class="far fa-trash-alt"></i>Delete
					</Button>
				</div>
				<CopyToClipboard text={String(message)}>
					<Button onClick={() => alert("Message copied to Clipboard")}>
						<i class="far fa-copy"></i> Copy
					</Button>
				</CopyToClipboard>
			</Collapse>
		);

		if (author === "You") {
			// Message Block which are sent by the user.
			return (
				<div ref={ref}>
					<Grid container direction="row">
						<Grid item xs={4}></Grid>
						<Grid item xs={8}>
							<Grid container direction="column">
								<div id="message_bubble_A" onClick={showdetail}>
									<div id="message_head_A">{author}</div>
									{message}
									{hiddenDetails}
								</div>
							</Grid>
						</Grid>
					</Grid>
				</div>
			);
		} else {
			// Message Block which are recieved from other users.
			return (
				<div ref={ref}>
					<Grid container direction="row">
						<Grid item xs={8}>
							<Grid container direction="column">
								<div id="message_bubble_B" onClick={showdetail}>
									<div id="message_head_B">{author}</div>
									{message}
									{hiddenDetails}
								</div>
							</Grid>
						</Grid>
						<Grid item xs={4}></Grid>
					</Grid>
				</div>
			);
		}
	}
);

const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStoreStateToProps, null)(Message);
