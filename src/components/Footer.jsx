import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "../styles/index";
const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary" className={classes.footer}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021 Romina Farokhzad
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Footer;
