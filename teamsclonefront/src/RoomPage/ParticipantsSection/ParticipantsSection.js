import React from "react";
import Participants from "./Participants";
import { Grid } from "@material-ui/core";

const ParticipantsSection = () => {
  return (
    <>
      <Grid item xs={12} id="participant_header">
          PARTICIPANTS
      </Grid>
      <Grid item xs={12}>
        <Participants />
      </Grid>
    </>
  );
};

export default ParticipantsSection;
