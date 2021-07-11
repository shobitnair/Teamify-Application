import React, { useEffect, useState } from "react";
import Message from "./Message";
import { db } from "../firebase";
import firebase from "firebase";
import { connect } from "react-redux";
import { useRef } from "react";
import { setPage } from "../../store/actions";
import { Grid, Button, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import FlipMove from "react-flip-move";

const Chat = (props) => {
	const { user, chatName, chatId, setPageAction } = props;
	const chatRef = useRef(null);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
  
	// on component mount fetch messages of selected room
	useEffect(() => {
		if (chatId) {
			db.collection("chats")
				.doc(chatId)
				.collection("messages")
				.orderBy("timestamp", "asc")
				.onSnapshot((snapshot) => {
					setMessages(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
          //scroll down when a new message pops in.
          var element = document.getElementById("chat__messages");
	        element.scrollTop = element.scrollHeight;
				});
		}
	}, [chatId]);

	const sendMessage = (e) => {
		// firebase operation - add message and info to firebase
		if (input === "") return;
		db.collection("chats").doc(chatId).collection("messages").add({
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			message: input,
			uid: user.uid,
			photo: user.photo,
			email: user.email,
			displayName: user.displayName,
		});
		// target the empty div to trigger chat scroll to last msg
    var element = document.getElementById("chat__messages");
    element.scrollTop = element.scrollHeight;
		setInput("");
	};

	const handleKeyPressed = (event) => {
		//handle enter key in computers
		if (event.key === "Enter") {
			event.preventDefault();
			sendMessage();
		}
	};

	return (
		<div className="chat">

      {/**Opens Host page in new window*/}
			<Link
				to="join-room?host=true"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button id="video_action">Host</Button>
			</Link>

      {/**Open Join Page in new window*/}
			<Link to="join-room" target="_blank" rel="noopener noreferrer">
				<Button id="join_action">Join</Button>
			</Link>

      {/** Back button only for mobile devices*/}
			<Hidden mdUp>
				<Button id="back_action" onClick={() => setPageAction(false)}>
					Back
				</Button>
			</Hidden>

			<div className="chat__header">
				<div id="header_text">
					Channel <br />{" "}
					<span className="chat__name">{chatName}</span>
				</div>
			</div>

      {/**Renders array of chat messages from all users in database*/}
			<div id="chat__messages">
				<FlipMove>
          {messages.map(({ id, data }) => (
            <div id={id}>
              <Message key={id} id={id} contents={data} />
            </div>
          ))}
        </FlipMove>
				<div ref={chatRef} />
			</div>


			<div>
				<Grid
					container
					xs={12}
					direction="row"
					id="message_input_block"
				>
          {/**Chat input block*/}
					<Grid item xs={10}>
						<textarea
							id="message_input"
							disabled={!chatId}
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKeyPressed}
							placeholder={
								!chatId
									? "Please select a Channel first"
									: "Type a new message"
							}
							type="text"
						/>
					</Grid>

          {/** Chat submit button*/}
					<Grid item xs={1}>
						<div id="message_util" onClick={sendMessage}>
							<i class="fas fa-paper-plane"></i>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPageAction: (page) => dispatch(setPage(page)),
	};
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Chat);
