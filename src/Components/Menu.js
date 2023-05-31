import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const ModelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#091033",
  boxShadow: 20,
  p: 4,
  color: "white",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModelStyle}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem>
                <ListItemButton sx={{ textAlign: "center" }} href="/">
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Modal>
    </div>
  );
}
