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

//participant block with header , count and array of participants.
const Participants = ({ participants }) => {

  return (
    <div id="participant_container">
      <div 
      id="participant_block"
      style={{"height":'30px' , "textAlign":'center' , "fontWeight":'500'}}>
        Total Participants : {participants.length}
      </div>
      {participants.map((person) => {
        return (
          <Person
            key={person.identity}
            identity={person.identity}
          />
        );
      })}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(Participants);
