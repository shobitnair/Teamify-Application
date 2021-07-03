import React, { useState } from "react";
import { 
  Grid, 
  Button,
  makeStyles,
  withStyles,
  Tooltip 
} from "@material-ui/core";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: "0.9vw",
  },
}))(Tooltip);

export {LightTooltip}