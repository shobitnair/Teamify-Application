import React from "react";
import { connect } from "react-redux";

//Obtain person Name from the unique identity string.
//utility function to help retreive person name from unique ID
const Person = ({ identity}) => {
  let Name = identity.slice(36, identity.length);
  return (
      <div id="participant_block">{Name}</div>
  );
};

const kapa =["Shobit" , "Vinay ", "Sony","Kpakane"];

//participant block with header , count and array of participants.
const Participants = ({ participants }) => {

  return (
    <>
      <div id="participant_count">
        Other Participants : {participants.length}
      </div>
      {participants.map((person) => {
        return (
          <Person
            key={person.identity}
            identity={person.identity}
          />
        );
      })}
    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(Participants);
