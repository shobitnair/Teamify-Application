import React from "react";
import { connect } from "react-redux";
import FlipMove from "react-flip-move";

//Obtain person Name from the unique identity string.
//utility function to help retreive person name from unique ID
const Person = ({ identity }) => {
	let Name = identity.slice(36, identity.length);
	return <div id="participant_name">{Name}</div>;
};

//participant block with header , count and array of participants.
const Participants = ({ participants }) => {
	return (
		<>
			<div id="participant_count">
				Other Participants : {participants.length}
			</div>
			{participants.map((person, index) => {
				return (
					<FlipMove>
						<div id={index}>
							<Person
								key={person.identity}
								identity={person.identity}
							/>
						</div>
					</FlipMove>
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
