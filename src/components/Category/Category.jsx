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
    minHeight: 310,
    maxHeight: 310,
    margin: "20px",
    padding: "10px",
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
  productTitle: {
    fontSize: "14px",
    width: "100%",
    height: "35px",
  },
});

const Category = ({ image, title, price, onClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography
            component="p"
            className={classes.productTitle}
            style={{ textAlign: "right" }}
          >
            <strong>{title}</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box component="div" className={classes.sliderbtn}>
        {price} &nbsp; تومان
      </Box>
    </Card>
  );
};
export default Category;
