import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import { connect } from "react-redux";
import "./message.css";

const Message = forwardRef(({ user, id, contents: { timestamp, displayName, email, message, photo, uid } },ref) => {
  return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message__sender"}`}
      >
        <Avatar className="message__photo" src={photo} />
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
    );
  }
);

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps, null)(Message);
