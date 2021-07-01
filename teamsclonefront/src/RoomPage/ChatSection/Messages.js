import React from "react";
import {connect} from "react-redux";
import { Grid } from "@material-ui/core";

//function to display an individual block of message.

const Message = ({ author, content, sameAuthor, messageCreatedByMe }) => {
  const authorText = messageCreatedByMe ? "You" : author;
  if(messageCreatedByMe)return (
    <>
      <Grid container direction="row">
        <Grid item md={4}></Grid>
        <Grid item md={8}>
          <Grid container direction="column">
            {!sameAuthor &&(
              <div id="chat_head_A">{authorText}</div>
            )}
            <div id="chat_bubble_A">
              {content}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
  else return(
    <>
      <Grid container direction="row">
        <Grid item md={8}>
          <Grid container direction="column">
            {!sameAuthor &&(
              <div id="chat_head_B">{author}</div>
            )}
            <div id="chat_bubble_B">
              {content}
            </div>
          </Grid>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </>
  )
};


//function to display and array of blocks
const Messages = ({messages , identity}) => {
  //console.log(messages);
  return (
    <div id="message_section">
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 && message.identity === messages[index - 1].identity;

        return (
          <Message
            key={index}
            author={message.identity}
            content={message.content}
            sameAuthor={sameAuthor}
            messageCreatedByMe={message.messageCreatedByMe}
          />
        );
      })}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return{
    ...state,
  }
}

const mapDispatchToProps = (dispatch) =>{

}


export default connect(mapStoreStateToProps,mapDispatchToProps)(Messages);
