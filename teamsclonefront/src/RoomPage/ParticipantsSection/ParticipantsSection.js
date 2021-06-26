import React from "react";
import Participants from "./Participants";
import ParticipantsLabel from "./ParticipantsLabel";

const ParticipantsSection = () => {
  return (
    <div className="participants_section_container">
      <ParticipantsLabel />
      <Participants />
    </div>
  );
};

export default ParticipantsSection;
