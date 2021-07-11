import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import CancelIcon from "@material-ui/icons/Cancel";
import Fade from "@material-ui/core/Fade";
import AddProducts from "./AddProducts";
import { useStyles } from "../styles";

const AddModal = ({ open, handleClose, closeModal }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalContent}>
            <CancelIcon
              className={classes.closeModalIcon}
              onClick={closeModal}
            />
            <AddProducts closeModal={closeModal} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default AddModal;
