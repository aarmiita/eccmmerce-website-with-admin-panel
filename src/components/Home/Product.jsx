import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 225,
    minHeight: 320,
    maxHeight: 320,
    margin: "5px",
  },
  media: {
    padding: 5,
    minHeight: 190,
    maxHeight: 190,
  },
  sliderbtn: {
    margin: "auto",
    textAlign: "center",
    background: "green",
    width: 200,
    padding: 5,
    color: "white",
  },
});

export default function ImgMediaCard({ image, title, price }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography component="p" style={{ textAlign: "right" }}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box component="div" className={classes.sliderbtn}>
        {price}
      </Box>
    </Card>
  );
}
