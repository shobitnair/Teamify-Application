import React, { useEffect } from "react";
import HomeButtons from "./HomeButtons";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import "../resources/css/IntroductionPage.css"
import home6 from "../resources/images/home6.svg"
import home5 from "../resources/images/home5.svg"
import home7 from "../resources/images/home7.svg"
import {
  Grid,
} from "@material-ui/core"



const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
  }, []);

  return (
    <>
      <Grid container id="whole">
        <Grid item xs={11} md={8} id="Grid1">
          <img src={home6} id="logo1"/>
        </Grid>
        <Grid item xs={1} md={4} id="Grid1">
        </Grid>
        <Grid item xs={1} md={4} id="Grid2"></Grid>
        <Grid item xs={10} md={4} id="Grid2">
          <HomeButtons/>
        </Grid>
        <Grid item xs={1} md={4} id="Grid2"></Grid>
        <Grid item xs={1} md={4} id="Grid1"></Grid>
        <Grid item xs={11} md={8} id="Grid1">
          <img src={home5} id="logo2"></img>
        </Grid>
      </Grid>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapDispatchToProps)(IntroductionPage);
