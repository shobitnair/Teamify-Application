import React, { Component } from "react";
import Participant from "./Participant";
import { setParticipants } from "../../../store/actions";
import { store } from "../../../store/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

//toast notify utility
toast.configure();
const notify = (str) =>{
  toast.dark(str , {
    position: "bottom-left",
    autoClose: 1700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

class TwilioRoom extends Component {
  constructor(props) {
    super(props);
    const remoteParticipants = Array.from(
      this.props.room.participants.values()
    );
    this.state = {
      remoteParticipants: remoteParticipants,
    };
    remoteParticipants.forEach((participant) => {
      this.addParticipantToStore(participant);
    });
  }

  // Define mount class of the participant.
  componentDidMount() {
    this.props.room.on("participantConnected", (participant) =>
      this.addParticipant(participant)
    );

    this.props.room.on("participantDisconnected", (participant) => {
      this.removeParticipant(participant);
    });
  }

  removeParticipantFromStore(participant) {
    // find and erase participant from state.
    const participants = store
      .getState()
      .participants.filter((p) => p.identity !== participant.identity);
    store.dispatch(setParticipants(participants));
  }

  removeParticipant(participant) {
    //Add Toast notification.
    //console.log(`${participant.identity} has left the room`);
    let name = `${participant.identity}`;
    name = name.slice(36,name.length);
    notify(name+" has left the room ");
    this.removeParticipantFromStore(participant);

    //Update participant state.
    this.setState({
      remoteParticipants: this.state.remoteParticipants.filter(
        (p) => p.identity !== participant.identity
      ),
    });
  }

  addParticipantToStore(participant) {
    const participants = store.getState().participants;
    //check if the participant already exists
    if (participants.find((p) => p.identity === participant.identity)) {
      return;
    } else {
      const newParticipants = [...participants];
      newParticipants.push({ identity: participant.identity });
      store.dispatch(setParticipants(newParticipants));
    }
  }

  addParticipant(participant) {
    //Add Toast Notification.
    //console.log(`${participant.identity} has joined the room`);
    let name = `${participant.identity}`;
    name = name.slice(36,name.length);
    notify(name+" has joined the room ");
    //Update participant state.
    this.addParticipantToStore(participant);
    this.setState({
      remoteParticipants: [...this.state.remoteParticipants, participant],
    });
  }

  // render an array of twilio data tracks. (Participants)

  render() {
    return (
      <>
        <Participant
          key={this.props.room.localParticipant.identity}
          localParticipant
          participant={this.props.room.localParticipant}
        />
        {this.state.remoteParticipants.map((participant) => {
          return (
            <Participant key={participant.identity} participant={participant} />
          );
        })}
      </>
    );
  }
}

export default TwilioRoom;
