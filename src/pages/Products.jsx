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

const Products = ({ translations, lang, darkMode }) => {
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
  }, []);
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
              {translations.pageTitles.productspageTitle}
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
                {translations.pageTitles.productspageTitle}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="section_style">
          <h2 className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}>
            {translations.homeProduct.title}
          </h2>
          <p className="text_body_small_regular fw400 center mb50">
            {translations.homeProduct.subtitle}
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
            <div className="card_holder mb45">
              <div
                className={`card2_style  ${darkMode && "card1_style_for_dark"}`}
                // style={{ height: "245px" }}
              >
                <div className="card2_left">
                  <img
                    src="/images/FastPay.png"
                    alt="product image"
                    // width="100%"
                    // height="99%"
                    className="card2_image_style"
                  />
                </div>
                <div className="card2_right">
                  <div>
                    <div
                      className={`card_left_padding`}
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      <h4
                        className={`text_body_medium fw500 mb8 mt20 ${
                          darkMode && "white"
                        }`}
                      >
                        {translations.homeProduct.card1.title}
                      </h4>
                      <p
                        className="text_body_small_regular fw400 pt8 text_overflow_ellipsis_line4"
                        style={{
                          color: darkMode ? "#C7C7C7" : "#525252",
                          borderTop: darkMode
                            ? "1px solid #262626"
                            : "1px Solid #fff ",
                        }}
                      >
                        {translations.homeProduct.card1.details}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`card_button_holder mt20  ${
                      darkMode && "card_button_holder_dark"
                    } ${lang === "kr" && "card_button_holder_rtl"}`}
                  >
                    <Button
                      className={`card_button ${
                        darkMode && "card_button_dark"
                      } ${lang === "kr" && "card_button_for_rtl"}`}
                      component={Link}
                      to="/product/fastpay-ewallet"
                    >
                      {translations.buttonText.visitNowText}
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={`card2_style  ${darkMode && "card1_style_for_dark"}`}
                // style={{ height: "245px" }}
              >
                <div className="card2_left">
                  <img
                    src="/images/Dalkurd.png"
                    alt="product image"
                    // width="100%"
                    // height="99%"
                    className="card2_image_style"
                  />
                </div>
                <div className="card2_right">
                  <div>
                    <div
                      className={`card_left_padding`}
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      <h4
                        className={`text_body_medium fw500 mb8 mt20 ${
                          darkMode && "white"
                        }`}
                      >
                        {translations.homeProduct.card2.title}
                      </h4>
                      <p
                        className="text_body_small_regular fw400 pt8 text_overflow_ellipsis_line4"
                        style={{
                          color: darkMode ? "#C7C7C7" : "#525252",
                          borderTop: darkMode
                            ? "1px solid #262626"
                            : "1px Solid #fff ",
                        }}
                      >
                        {translations.homeProduct.card2.details}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`card_button_holder mt20  ${
                      darkMode && "card_button_holder_dark"
                    } ${lang === "kr" && "card_button_holder_rtl"}`}
                  >
                    <Button
                      className={`card_button ${
                        darkMode && "card_button_dark"
                      } ${lang === "kr" && "card_button_for_rtl"}`}
                      component={Link}
                      to="/product/dalkurd-football-association"
                    >
                      {translations.buttonText.visitNowText}
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={`card2_style  ${darkMode && "card1_style_for_dark"}`}
                // style={{ height: "245px" }}
              >
                <div className="card2_left">
                  <img
                    src="/images/Fast_Connect.png"
                    alt="product image"
                    // width="100%"
                    // height="99%"
                    className="card2_image_style"
                  />
                </div>
                <div className="card2_right">
                  <div>
                    <div
                      className={`card_left_padding`}
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      <h4
                        className={`text_body_medium fw500 mb8 mt20 ${
                          darkMode && "white"
                        }`}
                      >
                        {translations.homeProduct.card3.title}
                      </h4>
                      <p
                        className="text_body_small_regular fw400 pt8 text_overflow_ellipsis_line4"
                        style={{
                          color: darkMode ? "#C7C7C7" : "#525252",
                          borderTop: darkMode
                            ? "1px solid #262626"
                            : "1px Solid #fff ",
                        }}
                      >
                        {translations.homeProduct.card3.details}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`card_button_holder mt20  ${
                      darkMode && "card_button_holder_dark"
                    } ${lang === "kr" && "card_button_holder_rtl"}`}
                  >
                    <Button
                      className={`card_button ${
                        darkMode && "card_button_dark"
                      } ${lang === "kr" && "card_button_for_rtl"}`}
                      component={Link}
                      to="/product/fast-connect-pos"
                    >
                      {translations.buttonText.visitNowText}
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={`card2_style  ${darkMode && "card1_style_for_dark"}`}
                // style={{ height: "245px" }}
              >
                <div className="card2_left">
                  <img
                    src="/images/eKYC.png"
                    alt="product image"
                    // width="100%"
                    // height="99%"
                    className="card2_image_style"
                  />
                </div>
                <div className="card2_right">
                  <div>
                    <div
                      className={`card_left_padding`}
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      <h4
                        className={`text_body_medium fw500 mb8 mt20 ${
                          darkMode && "white"
                        }`}
                      >
                        {translations.homeProduct.card4.title}
                      </h4>
                      <p
                        className="text_body_small_regular fw400 pt8 text_overflow_ellipsis_line4"
                        style={{
                          color: darkMode ? "#C7C7C7" : "#525252",
                          borderTop: darkMode
                            ? "1px solid #262626"
                            : "1px Solid #fff ",
                        }}
                      >
                        {translations.homeProduct.card4.details}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`card_button_holder mt20  ${
                      darkMode && "card_button_holder_dark"
                    } ${lang === "kr" && "card_button_holder_rtl"}`}
                  >
                    <Button
                      className={`card_button ${
                        darkMode && "card_button_dark"
                      } ${lang === "kr" && "card_button_for_rtl"}`}
                      component={Link}
                      to="/product/e-kyc-solution"
                    >
                      {translations.buttonText.visitNowText}
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={`card2_style  ${darkMode && "card1_style_for_dark"}`}
                // style={{ height: "245px" }}
              >
                <div className="card2_left">
                  <img
                    src="/images/IQDX.png"
                    alt="product image"
                    // width="100%"
                    // height="99%"
                    className="card2_image_style"
                  />
                </div>
                <div className="card2_right">
                  <div>
                    <div
                      className={`card_left_padding`}
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      <h4
                        className={`text_body_medium fw500 mb8 mt20 ${
                          darkMode && "white"
                        }`}
                      >
                        {translations.homeProduct.card5.title}
                      </h4>
                      <p
                        className="text_body_small_regular fw400 pt8 text_overflow_ellipsis_line4"
                        style={{
                          color: darkMode ? "#C7C7C7" : "#525252",
                          borderTop: darkMode
                            ? "1px solid #262626"
                            : "1px Solid #fff ",
                        }}
                      >
                        {translations.homeProduct.card5.details}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`card_button_holder mt20  ${
                      darkMode && "card_button_holder_dark"
                    } ${lang === "kr" && "card_button_holder_rtl"}`}
                  >
                    <Button
                      className={`card_button ${
                        darkMode && "card_button_dark"
                      } ${lang === "kr" && "card_button_for_rtl"}`}
                    >
                      {translations.buttonText.visitNowText}
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={`card2_style  ${darkMode && "card1_style_for_dark"}`}
                // style={{ height: "245px" }}
              >
                <div className="card2_left">
                  <img
                    src="/images/Face_Recognition.png"
                    alt="product image"
                    // width="100%"
                    // height="99%"
                    className="card2_image_style"
                  />
                </div>
                <div className="card2_right">
                  <div>
                    <div
                      className={`card_left_padding`}
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      <h4
                        className={`text_body_medium fw500 mb8 mt20 ${
                          darkMode && "white"
                        }`}
                      >
                        {translations.homeProduct.card6.title}
                      </h4>
                      <p
                        className="text_body_small_regular fw400 pt8 text_overflow_ellipsis_line4"
                        style={{
                          color: darkMode ? "#C7C7C7" : "#525252",
                          borderTop: darkMode
                            ? "1px solid #262626"
                            : "1px Solid #fff ",
                        }}
                      >
                        {translations.homeProduct.card6.details}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`card_button_holder mt20  ${
                      darkMode && "card_button_holder_dark"
                    } ${lang === "kr" && "card_button_holder_rtl"}`}
                  >
                    <Button
                      className={`card_button ${
                        darkMode && "card_button_dark"
                      } ${lang === "kr" && "card_button_for_rtl"}`}
                      component={Link}
                      to="/product/face-recognition"
                    >
                      {translations.buttonText.visitNowText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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
        </div>
      </Container>
    </div>
  );
};

export default Products;
