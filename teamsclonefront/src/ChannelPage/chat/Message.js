import { Avatar } from "@material-ui/core";
import React, { forwardRef, useState } from "react";
import { connect } from "react-redux";
import { Grid , Collapse} from "@material-ui/core";

const Message = forwardRef(
  (
    {
      user,
      id,
      contents: { timestamp, displayName, email, message, photo, uid },
    },
    ref
  ) => {
    const [show, setShow] = useState(false);
    const showdetail = () => {
      setShow(!show);
    };
    const author = user.displayName === displayName ? "You" : displayName;
    
    if (author === "You") {
      // Message Block which are sent by the user.
      return (
        <div ref={ref} >
          <Grid container direction="row">
            <Grid item xs={4}></Grid>
            <Grid item xs={8}>
              <Grid container direction="column">
                <div id="message_bubble_A" onClick={showdetail}>
                  <div id="message_head_A">{author}</div>
                  {message}
                  <Collapse in={show} id="chat_info">
                    <br />
                    <Avatar className="message__photo" src={photo} />
                    <br />
                    {email}
                    <br />
                    {new Date(timestamp?.toDate()).toLocaleString()}
                    <br />
                  </Collapse>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    } 
    else {
      // Message Block which are recieved from other users.
      return (
        <div ref={ref} >
          <Grid container direction="row">
            <Grid item xs={8}>
              <Grid container direction="column">
                <div id="message_bubble_B" onClick={showdetail}>
                  <div id="message_head_B">{author}</div>
                  {message}
                  <div hidden={!show} id="chat_info">
                    <br />
                    <Avatar className="message__photo" src={photo} />
                    <br />
                    {email}
                    <br />
                    {new Date(timestamp?.toDate()).toLocaleString()}
                    <br />
                  </div>
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
