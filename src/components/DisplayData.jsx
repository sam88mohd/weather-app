import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import CelciusData from "./CelciusData";
import FerenheitData from "./FerenheitData";

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
});

const DisplayData = ({ lat, lon }) => {
  const classes = useStyles();
  const { data } = useFetchData(lat, lon);
  const [toggleCel, setToggleCel] = useState(true);
  const [ferenheit, setFerenheit] = useState(0);

  const handleClick = () => {
    setToggleCel(!toggleCel);
    if (toggleCel) {
      setFerenheit(((data.main.temp * 9) / 5 + 32).toFixed(0));
    }
  };

  console.log(data);

  return (
    <Box className={classes.root}>
      {data && (
        <React.Fragment>
          <Typography variant="h5" component="h1" gutterBottom>
            {data.name}, {data.sys.country}
          </Typography>
          {toggleCel ? (
            <CelciusData temp={data.main.temp} handleClick={handleClick} />
          ) : (
            <FerenheitData temp={ferenheit} handleClick={handleClick} />
          )}
          <div>
            <img
              className={classes.image}
              src={data.weather[0].icon}
              alt={data.weather[0].description}
            />
          </div>
        </React.Fragment>
      )}
    </Box>
  );
};

export default DisplayData;
