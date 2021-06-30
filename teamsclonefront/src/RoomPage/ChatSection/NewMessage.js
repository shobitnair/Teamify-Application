import React, { useState } from "react";
import SendMessageButton from "../../resources/images/sendMessageButton.svg";
import { sendMessageUsingDataChannel } from "../../utils/twilioUtils";
import { Grid } from "@material-ui/core";



const NewMessage = () => {
  //current message input state
  const [message, setMessage] = useState("");

  const sendMessage = async() => {
    // send message to other user , true denotes (its send by me)
    await sendMessageUsingDataChannel(message, true);
    updateScroll();
    setMessage("");
    
  };

  const handleKeyPressed = (event) => {
    //handle enter key in computers
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  //function to immediately scroll the chatbox down.
  function updateScroll() {
    var element = document.getElementById("chat_bubble_block");
    element.scrollTop = element.scrollHeight;
  }

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <Grid container direction="row">
        <Grid item md={10}>
          <input
            id="chat_input"
            value={message}
            onChange={handleTextChange}
            placeholder="Type your message..."
            type="text"
            onKeyDown={handleKeyPressed}
          />
        </Grid>
        <Grid item md={2}>
          <Grid container 
          direction="column"
          alignItems="center">
            <Grid item md={12}>
              <div id="chat_util"
                src={SendMessageButton}
                onClick={sendMessage}
              >
                <i class="fas fa-paper-plane"></i>
              </div>
            </Grid>
            <Grid item md={12}>
              <div 
              onClick={updateScroll}
              id="chat_util">
                <i class="fas fa-arrow-down"></i>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewMessage;
