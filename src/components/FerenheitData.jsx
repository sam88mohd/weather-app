import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  degree: {
    cursor: "pointer",
    margin: theme.spacing(1),
  },
}));

const FerenheitData = ({ temp, handleClick }) => {
  const classes = useStyles();

  return (
    <Typography variant="h3" component="span">
      {temp}
      <Typography
        variant="h4"
        component="span"
        color="secondary"
        className={classes.degree}
        onClick={handleClick}
      >
        &#8457;
      </Typography>
    </Typography>
  );
};

export default FerenheitData;
