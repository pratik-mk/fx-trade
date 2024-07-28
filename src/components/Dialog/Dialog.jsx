import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./Dialog.module.css";

export default function Dialog({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modalBox}>
        <Typography id="modal-modal-description" className={styles.modalDescription}>
          Are you sure you want to logout?
        </Typography>
        <Box className={styles.modalActions}>
          <Button
            variant="contained"
            className={styles.buttonYes}
            onClick={handleClose}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            className={styles.buttonCancel}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
