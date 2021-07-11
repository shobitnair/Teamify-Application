import React, { useEffect } from "react";
import HomeButtons from "./HomeButtons";
import { connect } from "react-redux";
import { setIsRoomHost , setTwilioAccessToken , setRoomId , setIdentity} from "../store/actions";
import "../resources/css/IntroductionPage.css";
import home6 from "../resources/images/home6.svg";
import home5 from "../resources/images/home5.svg";
import home7 from "../resources/images/home7.svg";
import { Grid } from "@material-ui/core";

/* 
Basic Intro Page Grid layout with responsiveness handled for mobiles 
xs is for small devices , md for medium and above.
*/

const IntroductionPage = (props) => {
  useEffect(() => {
    //Reset user states when intropage is opened. afte refreshing.
    props.setIsRoomHostAction(false);
    props.setTwilioAccessTokenAction(null);
    props.setRoomIdAction(null);
    props.setIdentityAction(null);
  }, []);

  return (
    <>
      <Grid container id="whole">
        {/**row1 */}
        <Grid item xs={11} md={8} id="height40">
          <img src={home6} id="top_left_img" />
        </Grid>
        <Grid item xs={1} md={4} id="height40"/>
        {/**row2 */}
        <Grid item xs={1} md={4} id="height20"/>
        <Grid item xs={10} md={4} id="height20">
          <HomeButtons />
        </Grid>
        <Grid item xs={1} md={4} id="height20"/>
        {/**row3 */}
        <Grid item xs={1} md={4} id="height40"/>
        <Grid item xs={11} md={8} id="height40">
          <img src={home5} id="bottom_right_img"></img>
        </Grid>

      </Grid>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
    setTwilioAccessTokenAction: (accessToken) => dispatch(setTwilioAccessToken(accessToken)),
    setRoomIdAction:(room) => dispatch(setRoomId(room)),
    setIdentityAction:(identity)=>dispatch(setIdentity(identity)),
  };
};

export default connect(null, mapDispatchToProps)(IntroductionPage);
