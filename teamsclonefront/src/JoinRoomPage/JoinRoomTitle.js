import React from "react";

const JoinRoomTitle = ({ isRoomHost }) => {
  const titleText = isRoomHost ? "Host meeting" : "Join meeting";

  return <p className="join_room_title">{titleText}</p>;
};

export default JoinRoomTitle;
