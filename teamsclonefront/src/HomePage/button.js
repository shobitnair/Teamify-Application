import React from "react";


const EventButton = ({
  createRoomButton = false,
  buttonText,
  onClickHandler,
}) => {
  const buttonType = createRoomButton ? "create_room_button" : "join_room_button";
  return (
      <button className={buttonType} onClick={onClickHandler}> 
        {buttonText} 
      </button>
  )
};

export default EventButton;