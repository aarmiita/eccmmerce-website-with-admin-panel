import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../styles";
import SimpleTable from "../components/Table";
import { Button, Box } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddModal from "../components/AddModal";
const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleAdd = () => {
    handleOpen();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.mainDashboard}>
      <main className={classes.content}>
        <div className={classes.subContent} />
        <Box component="div" className={classes.tableDiv}>
          <h1>مدیریت کالا</h1>
          <Button
            onClick={() => handleAdd()}
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            افرودن کالا
          </Button>
        </Box>
        <div>
          <AddModal
            open={open}
            handleClose={handleClose}
            closeModal={handleClose}
          />

          <SimpleTable />
        </div>
      </main>
    </div>
  );
};
export default AdminPage;
