import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../styles";
import SimpleTable from "../components/Table";
import { Button, Box } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const AdminPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDashboard}>
      <main className={classes.content}>
        <div className={classes.subContent} />
        <Box component="div" className={classes.tableDiv}>
          <h1>مدیریت کالا</h1>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            افرودن کالا
          </Button>
        </Box>
        <div>
          <SimpleTable />
        </div>
      </main>
    </div>
  );
};
export default AdminPage;
