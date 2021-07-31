import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddProducts from "./AddProducts";
import EditProduct from "./EditProduct";
import { useStyles } from "../styles";

const EditModal = ({ open, handleClose }) => {
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
            <EditProduct closeModal={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default EditModal;
