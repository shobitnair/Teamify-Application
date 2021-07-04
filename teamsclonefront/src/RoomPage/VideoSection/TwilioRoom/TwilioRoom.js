import React, { Component } from "react";
import Participant from "./Participant";
import { setParticipants } from "../../../store/actions";
import { store } from "../../../store/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

var windowWidth =
  window.screen.width < window.outerWidth
    ? window.screen.width
    : window.outerWidth;
var isSmall = windowWidth <= 960;

//toast notify utility
toast.configure();
const notify = (str) => {
  toast.dark(str, {
    position: "bottom-left",
    autoClose: 1700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

// Methods follow as per the twilio API documentation

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

  //update state and notify if a person enters
  addParticipant(participant) {
    let name = `${participant.identity}`;
    name = name.slice(36, name.length);
    if (!isSmall) {
      notify(name + " has joined the room ");
    }
    this.addParticipantToStore(participant);
    this.setState({
      remoteParticipants: [...this.state.remoteParticipants, participant],
    });
  }

  removeParticipantFromStore(participant) {
    // find and erase participant from state.
    const participants = store
      .getState()
      .participants.filter((p) => p.identity !== participant.identity);
    store.dispatch(setParticipants(participants));
  }

  //update state and notify if a person leaves.
  removeParticipant(participant) {
    let name = `${participant.identity}`;
    name = name.slice(36, name.length);
    if (!isSmall) {
      notify(name + " has left the room ");
    }
    this.removeParticipantFromStore(participant);

    //Update participant state.
    this.setState({
      remoteParticipants: this.state.remoteParticipants.filter(
        (p) => p.identity !== participant.identity
      ),
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
          room={this.props.room}
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
