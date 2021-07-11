import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import FlipMove from "react-flip-move";

//function to display an individual block of message.
const Message = ({ author, content, sameAuthor, messageCreatedByMe }) => {
	const authorText = messageCreatedByMe ? "You" : author;

	// Sets bubble style for user message and recieved message.
	const MessageBubble = ({ type }) => {
		return (
			<Grid container direction="row">
				<Grid item xs={4} hidden={type === "B"} />
				<Grid item xs={8}>
					<Grid container direction="column">
						{!sameAuthor && (
							<div id={"chat_head_" + type}>{authorText}</div>
						)}
						<div id={"chat_bubble_" + type}>{content}</div>
					</Grid>
				</Grid>
				<Grid item xs={4} hidden={type === "A"} />
			</Grid>
		);
	};

	if (messageCreatedByMe) return <MessageBubble type="A" />;
	else return <MessageBubble type="B" />;
};

//function to display and array of message blocks
const Messages = ({ messages, identity }) => {
	//update scroll whenever a new message is recieved or made.
	useEffect(() => {
		var element = document.getElementById("chat_bubble_block");
		element.scrollTop = element.scrollHeight;
	});
	return (
		<FlipMove>
			{messages.map((message, index) => {
				const sameAuthor =
					index > 0 &&
					message.identity === messages[index - 1].identity;
				return (
					<div id={index}>
						<Message
							key={index}
							author={message.identity}
							content={message.content}
							sameAuthor={sameAuthor}
							messageCreatedByMe={message.messageCreatedByMe}
						/>
					</div>
				);
			})}
		</FlipMove>
	);
};

const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Messages);
