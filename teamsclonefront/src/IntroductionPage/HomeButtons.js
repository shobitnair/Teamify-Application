import React from "react";
import { useHistory } from "react-router-dom";
import { 
  Button,
  Grid
} from '@material-ui/core'


const HomeButtons = () => {

  let history = useHistory();
  return (
    <>
      <Grid 
      container 
      xs={12}
      alignItems="center"
      direction="column">
        <Grid item>
          <Button 
          id="bt_default"
          onClick={() => {history.push("/join-room?host=true");}}
          >
            Host a Meeting
          </Button> 
        </Grid>
        <Grid item>
          <Button 
          id="bt_default"
          onClick={() => {history.push("/join-room")}}
          >
            Join a Meeting
          </Button>
        </Grid>
        <Grid item>
          <Button 
          id="bt_default"
          href="/channel"
          >
            Channel
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeButtons;
