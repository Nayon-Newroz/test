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

const Career = ({ translations, lang, darkMode }) => {
  const [typeOpen, setTypeOpen] = useState(true);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [locationOpen, setLocationOpen] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  useEffect(() => {
    if (matches) {
      setTypeOpen(false);
      setLocationOpen(false);
    }
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
              <Grid item xs="auto" className="journeyText">
                {translations.pageTitles.careerpageTitle}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="section_style">
          <h2 className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}>
            {translations.careerTopSection.title}
          </h2>
          <p className="text_body_small_regular fw400 center mb50">
            {translations.careerTopSection.subtitle}
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
            <Grid container spacing={6} className="mb50">
              <Grid item xs={12} sm={12} md={12} lg={3}>
                <p
                  className="text_body_small_regular fw400"
                  style={{
                    color: darkMode ? "#C7C7C7" : "#525252",

                    borderBottom: darkMode
                      ? "1px solid #1C1C1C"
                      : "1px solid #fff",
                    paddingBottom: "10px",
                    position: "relative",
                  }}
                >
                  JOB TYPE{" "}
                  <IconButton
                    onClick={() => setTypeOpen(!typeOpen)}
                    style={{
                      position: "absolute",
                      right: 0,
                      top: -5,
                      color: darkMode ? "#C7C7C7" : "#525252",
                    }}
                  >
                    {typeOpen ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </p>
                <Collapse in={typeOpen}>
                  <FormControl
                    className={`radio_button mt10 ${
                      darkMode && "radio_button_dark"
                    }`}
                  >
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="All"
                      name="radio-buttons-group"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <FormControlLabel
                        value="All"
                        control={<Radio />}
                        label="All"
                      />
                      <FormControlLabel
                        value="ENGINEERING"
                        control={<Radio />}
                        label="ENGINEERING (6)"
                      />
                      <FormControlLabel
                        value="DESIGN"
                        control={<Radio />}
                        label="DESIGN (2)"
                      />
                      <FormControlLabel
                        value="FINTECH"
                        control={<Radio />}
                        label="FINTECH (3)"
                      />
                      <FormControlLabel
                        value="TESTING"
                        control={<Radio />}
                        label="TESTING (1)"
                      />
                      <FormControlLabel
                        value="DEVOPS"
                        control={<Radio />}
                        label="DEVOPS"
                      />
                      <FormControlLabel
                        value="FRONTEND DEVELOPER"
                        control={<Radio />}
                        label="FRONTEND DEVELOPER"
                      />
                    </RadioGroup>
                  </FormControl>
                </Collapse>
                <p
                  className="text_body_small_regular fw400 mt20"
                  style={{
                    color: darkMode ? "#C7C7C7" : "#525252",
                    borderBottom: darkMode
                      ? "1px solid #1C1C1C"
                      : "1px solid #fff",

                    paddingBottom: "10px",
                    position: "relative",
                  }}
                >
                  LOCATION{" "}
                  <IconButton
                    onClick={() => setLocationOpen(!locationOpen)}
                    style={{
                      position: "absolute",
                      right: 0,
                      top: -5,
                      color: darkMode ? "#C7C7C7" : "#525252",
                    }}
                  >
                    {locationOpen ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </p>
                <Collapse in={locationOpen}>
                  <FormControl
                    className={`radio_button mt10 ${
                      darkMode && "radio_button_dark"
                    }`}
                  >
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="All"
                      name="radio-buttons-group"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      <FormControlLabel
                        value="All"
                        control={<Radio />}
                        label="All"
                      />
                      <FormControlLabel
                        value="DHAKA"
                        control={<Radio />}
                        label="DHAKA"
                      />
                      <FormControlLabel
                        value="KURDISTAN"
                        control={<Radio />}
                        label="KURDISTAN"
                      />
                      <FormControlLabel
                        value="DUBAI"
                        control={<Radio />}
                        label="DUBAI"
                      />
                    </RadioGroup>
                  </FormControl>
                </Collapse>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={9}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    className={`card1_style mb16  ${
                      darkMode && "card1_style_for_dark"
                    }`}
                  >
                    <div>
                      <h4
                        className={`text_body_medium fw500 ${
                          darkMode && "white"
                        }`}
                        style={{
                          padding: "20px 20px 10px 20px",
                          borderBottom: darkMode
                            ? "1px solid #1c1c1c"
                            : "1px solid #fff",
                        }}
                      >
                        {translations.careerTopSection.card1.title}
                      </h4>
                      <div>
                        <p
                          className="text_body_small_regular fw400"
                          style={{
                            color: darkMode ? "#C7C7C7" : "#525252",
                            padding: "20px 20px 30px",
                          }}
                        >
                          {translations.careerTopSection.card1.details}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        // padding: "20px 20px 10px 20px",
                        borderTop: darkMode
                          ? "1px solid #1c1c1c"
                          : "1px solid #fff",
                      }}
                    >
                      <Button
                        className={`card_button card_button_for_rtl ${
                          darkMode && "card_button_dark"
                        } ${lang === "kr" && "card_button_for_rtl"}`}
                        component={Link}
                        to={"/career/details"}
                      >
                        {translations.buttonText.checkDetails}
                      </Button>
                    </div>
                  </div>
                ))}
              </Grid>
            </Grid>
            <p
              className={`title_semibold_small mb50 center ${
                darkMode && "lightBlue"
              }`}
            >
              {translations.careerTopSection.paginationText} &nbsp; &nbsp;
              <Button
                color="primary"
                variant="contained"
                className="next_button"
              >
                <WestIcon />
              </Button>
              &nbsp; &nbsp;
              <Button
                color="primary"
                variant="contained"
                className="next_button"
              >
                <EastIcon />
              </Button>
            </p>
          </div>
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
          <ol className={`ol_Style fw500 mb50 ${darkMode && "ol_Style_dark"}`}>
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
          <ol className={`ol_Style fw500 mb50 ${darkMode && "ol_Style_dark"}`}>
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
      </Container>
    </div>
  );
};

export default Career;
