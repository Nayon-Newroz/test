import React from "react";
import "./Test.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Grid, IconButton, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
const Test = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  return (
    <>
      <div
        style={{
          position: "relative",
          background: "green",
          zIndex: 10,
          height: "700px",
        }}
      >
        <div style={{ position: "absolute", zIndex: 1 }}>
          <div
            style={{
              position: "absolute",
              height: "50px",
              width: "50px",
              background: "red",
              zIndex: 2,
              // bottom:0
              top:"25px"
            }}
          >
            1
          </div>
          <div
            style={{
              position: "absolute",
              height: "50px",
              width: "50px",
              background: "blue",
              zIndex: 10,
            }}
          >
            2
          </div>
        </div>
        {/* <div style={{ position: "relative", zIndex: 10, background: "yellow" }}>
          Test a sdfa sd asd as df as d as df sad
        </div> */}
      </div>
    </>
  );
};

export default Test;
