import React, { useState } from "react";
import SendMessageButton from "../../resources/images/sendMessageButton.svg";
import { sendMessageUsingDataChannel } from "../../utils/twilioUtils";
import {
  Button,
} from "@material-ui/core"
const NewMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    // send message to other user , true denotes (it send by me)
    sendMessageUsingDataChannel(message , true); 
    setMessage("");
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      //sendMessage To other user
      sendMessage();
    }
  };

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <input
        className="new_message_input"
        value={message}
        onChange={handleTextChange}
        placeholder="Type your message..."
        type="text"
        onKeyDown={handleKeyPressed}
      />
      <Button
        className="new_message_button"
        src={SendMessageButton}
        onClick={sendMessage}
      > X </Button>
    </div>
  );
};

export default NewMessage;
