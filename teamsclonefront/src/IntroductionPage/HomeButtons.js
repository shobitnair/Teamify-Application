import React from "react";
import { useHistory } from "react-router-dom";
import { 
  Button,
  Grid
} from '@material-ui/core'


// component containes three buttons to handle the initial event
// Either Host , Join or enter the Channel Section.


const HomeButtons = () => {

  let history = useHistory();

  // a single button grid item
  const Path = ({next , text}) =>{
    return(
      <Grid item>
        <Button 
        id="bt_default"
        onClick = {()=>history.push(next)}>
          {text}
        </Button>
      </Grid>
    )
  }
  
  return (
    <>
      <Grid 
      container 
      xs={12}
      alignItems="center"
      direction="column">
        <Path next="/channel" text="Channel"/> 
        <Path next="/join-room?host=true" text="Host a Meeting"/>
        <Path next="/join-room" text="Join a Meeting"/>
      </Grid>
    </>
  );
};

export default HomeButtons;
