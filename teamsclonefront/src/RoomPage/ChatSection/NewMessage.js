import React, { useState } from "react";
import SendMessageButton from "../../resources/images/sendMessageButton.svg";
import { sendMessageUsingDataChannel } from "../../utils/twilioUtils";

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
    <div className="new_message_container">
      <input
        className="new_message_input"
        value={message}
        onChange={handleTextChange}
        placeholder="Type your message..."
        type="text"
        onKeyDown={handleKeyPressed}
      />
      <img
        className="new_message_button"
        src={SendMessageButton}
        onClick={sendMessage}
      />
    </div>
  );
};

export default NewMessage;
