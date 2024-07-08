import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./style.css";

export default function Dialog({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-box">
        <Typography id="modal-modal-description" className="modal-description">
          Are you sure you want to logout?
        </Typography>
        <Box className="modal-actions">
          <Button
            variant="contained"
            className="button-yes"
            onClick={handleClose}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            className="button-cancel"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
