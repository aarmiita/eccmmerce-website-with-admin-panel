import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Box } from "@material-ui/core";
import { useStyles } from "../styles";
const NotFound = () => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Box component="div" className={classes.notfound}>
      <Box component="div">
        <h1>{history.location.pathname} صفحه پیدا نشد</h1>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/")}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
