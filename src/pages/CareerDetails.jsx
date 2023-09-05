import React, { useEffect, useState } from "react";
// import "../App.css";
import { Button, Container, Grid, IconButton, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MagicWand from "../svg-icons/MagicWand";
import Pattern from "../svg-icons/Pattern";
import CurveLine from "../svg-icons/CurveLine";
import Plane from "../svg-icons/Plane";
import Star from "../svg-icons/Star";
import Cloud from "../svg-icons/Cloud";
import Triangle from "../svg-icons/Triangle";
import GlowBG from "../svg-icons/GlowBG";
import { Circle, DarkMode, Transform } from "@mui/icons-material";
import BusinessIcon from "../svg-icons/BusinessIcon";
import CommaIcon from "../svg-icons/CommaIcon";
import SendIcon from "../svg-icons/SendIcon";
import { Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Collapse from "@mui/material/Collapse";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import OkIcon from "../svg-icons/OkIcon";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ApplyForm from "./ApplyForm";
import ClearIcon from "@mui/icons-material/Clear";
const CareerDetails = ({ translations, lang, darkMode }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className="journey_holder upper_slide "
        >
          <Grid item sm={12} md={4} className="hideForTabAndMobileViewOnly">
            <h3 className={`subtitle mb20 ${darkMode && "white"}`}>
              {translations.pageTitles.careerpageTitle}
            </h3>
          </Grid>
          <Grid item sm={12} md={8}>
            <Grid
              container
              justifyContent={{ md: "start", lg: "end" }}
              alignItems="center"
            >
              <Grid
                item
                xs="auto"
                className="journeyText"
                component={Link}
                to={"/"}
              >
                {translations.pageTitles.HomepageTitle}
              </Grid>
              <Grid item xs="auto">
                &nbsp; &nbsp;{" "}
                <KeyboardArrowRightIcon
                  style={{ color: "#2B2B2B", fontSize: "15px" }}
                />{" "}
                &nbsp; &nbsp;
              </Grid>
              <Grid
                item
                xs="auto"
                className="journeyText"
                component={Link}
                to={"/career"}
              >
                {translations.pageTitles.careerpageTitle}
              </Grid>
              <Grid item xs="auto">
                &nbsp; &nbsp;{" "}
                <KeyboardArrowRightIcon
                  style={{ color: "#2B2B2B", fontSize: "15px" }}
                />{" "}
                &nbsp; &nbsp;
              </Grid>
              <Grid item xs="auto" className="journeyText">
                {translations.pageTitles.details}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="section_style">
          <h2 className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}>
            {translations.careerDetails.title}
          </h2>
          <p className="text_body_small_regular fw400 center mb50">
            {translations.careerDetails.subtitle}
          </p>

          <div
            className={`card_triangle_holder ${
              lang === "kr" && "card_triangle_holder_for_rtl"
            }`}
          >
            <Triangle
              lang={lang}
              color={darkMode ? "#4790E4" : "#ABCCFE"}
              myClass="card_triangle hide_for_tab_and_smaller_view"
              // rtlClass="card_triangle_for_rtl"
            />
          </div>
          {/* <div
            className={`card_triangle2_holder ${
              lang === "kr" && "card_triangle2_holder_for_rtl"
            }`}
          >
            <Triangle
              lang={lang}
              color={darkMode ? "#FF7539" : "#FFC93C"}
              myClass="card_triangle2 hide_for_tab_and_smaller_view"
              // rtlClass="card_triangle2_for_rtl"
            />
          </div> */}
          <div className="upper_slide">
            <p
              className={`title_semibold_small mb8 ${darkMode && "lightBlue"}`}
            >
              {translations.careerJobBrief.title}
            </p>
            <p
              className="text_body_small_regular mb50"
              style={{
                color: darkMode ? "#fff" : "#2b2b2b",
              }}
            >
              {translations.careerJobBrief.subtitle}
            </p>
            <p
              className={`title_semibold_small fw400 mb8 ${
                darkMode && "lightBlue"
              }`}
            >
              {translations.careerResponsibilities.title}
            </p>
            <ul
              className={`ol_Style fw400 mb50 ${darkMode && "ol_Style_dark"}`}
              style={{ paddingLeft: "30px" }}
            >
              <li>{translations.careerResponsibilities.details1}</li>
              <li>{translations.careerResponsibilities.details2}</li>
              <li>{translations.careerResponsibilities.details3}</li>
              <li>{translations.careerResponsibilities.details4}</li>
              <li>{translations.careerResponsibilities.details5}</li>
              <li>{translations.careerResponsibilities.details6}</li>
              <li>{translations.careerResponsibilities.details7}</li>
            </ul>
            <p
              className={`title_semibold_small fw400 mb8 ${
                darkMode && "lightBlue"
              }`}
            >
              {translations.careerRequirementsAndSkills.title}
            </p>
            <ul
              className={`ol_Style fw400 mb50 ${darkMode && "ol_Style_dark"}`}
              style={{ paddingLeft: "30px" }}
            >
              <li>{translations.careerRequirementsAndSkills.details1}</li>
              <li>{translations.careerRequirementsAndSkills.details2}</li>
              <li>{translations.careerRequirementsAndSkills.details3}</li>
              <li>{translations.careerRequirementsAndSkills.details4}</li>
              <li>{translations.careerRequirementsAndSkills.details5}</li>
              <li>{translations.careerRequirementsAndSkills.details6}</li>
              <li>{translations.careerRequirementsAndSkills.details7}</li>
              <li>{translations.careerRequirementsAndSkills.details8}</li>
              <li>{translations.careerRequirementsAndSkills.details9}</li>
              <li>{translations.careerRequirementsAndSkills.details10}</li>
              <li>{translations.careerRequirementsAndSkills.details11}</li>
            </ul>
            <Button
              variant="contained"
              color="primary"
              startIcon={
                <OkIcon
                  lang={lang}
                  color={darkMode && "#1C1C1C"}
                  rtlClass="send_icon_for_rtl"
                />
              }
              className={`top_contained_buttton mb16 ${darkMode && "black"}`}
              disableElevation
              onClick={handleClickOpen}
            >
              {translations.buttonText.applyNow}
            </Button>
            <p
              className="text_body_small_regular fw500 mb50"
              style={{
                color: darkMode ? "#fff" : "#2b2b2b",
              }}
            >
              {lang === "kr"
                ? "أو أرسل بريدًا إلكترونيًا مباشرةً إلى"
                : " Or email directly"}
              :-
              <a href="hr@newrozetech.com"> hr@newrozetech.com</a>
            </p>
            <p
              className={`title_semibold_small fw500 mb8 ${
                darkMode && "lightBlue"
              }`}
            >
              {translations.careerHowToApply.title}
            </p>
            <p
              className="text_body_small_regular fw500 mb16"
              style={{
                color: darkMode ? "#fff" : "#2b2b2b",
              }}
            >
              {translations.careerHowToApply.subtitle}
            </p>
            <ol
              className={`ol_Style fw500 mb50 ${darkMode && "ol_Style_dark"}`}
            >
              <li>{translations.careerHowToApply.details1}</li>
              <li>{translations.careerHowToApply.details2}</li>
              <li>{translations.careerHowToApply.details3}</li>
              <li>{translations.careerHowToApply.details4}</li>
            </ol>
            <p
              className={`title_semibold_small fw500 mb8 ${
                darkMode && "lightBlue"
              }`}
            >
              {translations.careerTheRecruitmentProcess.title}
            </p>
            <p
              className="text_body_small_regular fw500 mb16"
              style={{
                color: darkMode ? "#fff" : "#2b2b2b",
              }}
            >
              {translations.careerTheRecruitmentProcess.subtitle}
            </p>
            <ol
              className={`ol_Style fw500 mb50 ${darkMode && "ol_Style_dark"}`}
            >
              <li>{translations.careerTheRecruitmentProcess.details1}</li>
              <li>{translations.careerTheRecruitmentProcess.details2}</li>
              <li>{translations.careerTheRecruitmentProcess.details3}</li>
              <li>{translations.careerTheRecruitmentProcess.details4}</li>
              <li>{translations.careerTheRecruitmentProcess.details5}</li>
              <li>{translations.careerTheRecruitmentProcess.details6}</li>
            </ol>
            <p
              className={`title_semibold_small fw500 mb16 ${
                darkMode && "lightBlue"
              }`}
            >
              {translations.careerEmbraceTheFuture.title}
            </p>
            <p
              className="text_body_small_regular fw500 mb16"
              style={{
                color: darkMode ? "#fff" : "#2b2b2b",
                fontSize: "14px",
              }}
            >
              {translations.careerEmbraceTheFuture.details1}
            </p>
            <p
              className="text_body_small_regular fw500 mb16"
              style={{
                color: darkMode ? "#fff" : "#2b2b2b",
                fontSize: "14px",
              }}
            >
              {translations.careerEmbraceTheFuture.details2}
            </p>
          </div>
        </div>
      </Container>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
      >
        {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <IconButton
            onClick={handleClose}
            style={{ display: "block", marginLeft: "auto" }}
          >
            <ClearIcon />
          </IconButton>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="apply_form_padding"
          >
            <ApplyForm open={open} />
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default CareerDetails;
