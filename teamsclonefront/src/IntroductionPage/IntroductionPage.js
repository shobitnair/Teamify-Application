import React, { useEffect } from "react";
import HomeButtons from "./HomeButtons";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import "./IntroductionPage.css"
import home1 from "../resources/images/home1.svg"
import home3 from "../resources/images/home3.svg"
import {
  Grid,
} from "@material-ui/core"



const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
  }, []);

  return (
    <>
      <Grid container spacing={2} id="whole">
        <Grid item xs={11} md={8} id="Grid1">
          <img src={home1} id="logo1"/>
        </Grid>
        <Grid item xs={1} md={4} id="Grid1"></Grid>
        <Grid item xs={1} md={4} id="Grid2"></Grid>
        <Grid item xs={10} md={4} id="Grid2">
          <HomeButtons/>
        </Grid>
        <Grid item xs={1} md={4} id="Grid2"></Grid>
        <Grid item xs={1} md={4} id="Grid1"></Grid>
        <Grid item xs={11} md={8} id="Grid1">
          <img src={home3} id="logo2"></img>
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
