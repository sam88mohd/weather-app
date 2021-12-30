import { CssBaseline, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import DisplayData from "./components/DisplayData";
import useGetLocation from "./hooks/useGetLocation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minHeight: "100vh",
  },
}));
const App = () => {
  const classes = useStyles();
  const { latitude, longitude } = useGetLocation();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Typography variant="h2" gutterBottom align="center">
        Weather App
      </Typography>
      <DisplayData lat={latitude} lon={longitude} />
      <Typography variant="body2" color="textSecondary" align="center">
        Created by adminHTLSAM
      </Typography>
    </div>
  );
};

export default App;
