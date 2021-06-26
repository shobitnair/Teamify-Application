import React from "react";

const SingleParticipant = ({ identity, lastItem }) => {
  const getParticipantName = (identity) => {
    return identity;
  };

  return (
    <>
      <p className="participants_paragraph">{getParticipantName(identity)}</p>
      {!lastItem && <span className="participants_separator_line"></span>}
    </>
  );
};

const participants = [
  {
    identity: "Marek",
  },
  {
    identity: "John",
  },
  {
    identity: "Anna",
  },
  {
    identity: "Kyle",
  },
];

const Participants = () => {
  return (
    <div className="participants_container">
      {participants.map((participant, index) => {
        return (
          <SingleParticipant
            key={participant.identity}
            identity={participant.identity}
            lastItem={participants.length === index + 1}
          />
        );
      })}
    </div>
  );
};

export default Participants;
