import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MessageForm = () => {
  return (
    <div data-aos="zoom-in-up">
      {" "}
      <div className="section_style">
        <div className="message_box">
          <p className="title_semibold_medium center">
            Contact us to initiate a discussion
          </p>
          <p className="text_body_medium center mt10">
            Create an exceptional fintech product with TheQRPay.
          </p>

          <Grid container spacing={3} className="message_box_input_box_margin">
            <Grid item xs={12} sm={12} md={6}>
              <p className="text_body_medium">First name*</p>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                variant="outlined"
                className="message_form_input_style"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <p className="text_body_medium">Email Address*</p>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                variant="outlined"
                className="message_form_input_style"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <p className="text_body_medium message_box_title_margin">
                Phone*
              </p>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                variant="outlined"
                className="message_form_input_style"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <p className="text_body_medium message_box_title_margin">
                Company name*
              </p>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                variant="outlined"
                className="message_form_input_style"
              />
            </Grid>
            <Grid item xs={12}>
              <p className="text_body_medium message_box_title_margin">
                Message*
              </p>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                variant="outlined"
                className="message_form_textarea_style"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} className="center mt25">
              <Button
                variant="contained"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="contained_buttton message_button"
                disableElevation
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
