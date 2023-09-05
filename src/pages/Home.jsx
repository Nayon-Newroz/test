import React, { useEffect } from "react";
// import "../App.css";
import { Button, Container, Grid, TextField } from "@mui/material";
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
// import "../compoments/MouseDown.css";
// import Lottie from "lottie-react";
// import splash from "../animations/splash.json";
// import UnlockThePower from "../animations/UnlockThePower.json";

const Home = ({ translations, lang, darkMode }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Container
        maxWidth="xl"
        className="container_style"
        style={{ position: "relative" }}
      >
        <Cloud
          lang={lang}
          color={darkMode && "#10214B"}
          myClass="top_cloud1 hide_for_tab_and_smaller_view"
          rtlClass="top_cloud1_for_rtl"
        />
        <Cloud
          lang={lang}
          color={darkMode && "#10214B"}
          myClass="top_cloud2 hide_for_tab_and_smaller_view"
          rtlClass="top_cloud2_for_rtl"
        />
        <Triangle
          lang={lang}
          color={darkMode ? "#FF7539" : "#FFC93C"}
          myClass="top_triangle1 hide_for_tab_and_smaller_view"
          rtlClass="top_triangle1_for_rtl"
        />
        <Triangle
          lang={lang}
          color={darkMode ? "#10214B" : "white"}
          myClass="top_triangle2 hide_for_tab_and_smaller_view"
          rtlClass="top_triangle2_for_rtl"
        />
        <GlowBG
          lang={lang}
          color={darkMode ? "#005DB2" : "#113CFC"}
          myClass="top_GlowBG1"
          rtlClass="top_GlowBG1_for_rtl"
        />
        <GlowBG
          lang={lang}
          color={darkMode && "#005DB2"}
          myClass="top_GlowBG2"
          rtlClass="top_GlowBG2_for_rtl"
        />
        <Grid
          container
          alignItems="center"
          className="home_main_section"
          style={{ position: "relative" }}
        >
          <Grid item xs={12} md={12} lg={8} xl={8}>
            <h2
              className={`title_large mb12 centerForTabProAndMobileViewOnly`}
              style={{ position: "relative" }}
            >
              <Cloud
                lang={lang}
                color={darkMode && "#10214B"}
                myClass="top_cloud3 hide_for_tab_and_smaller_view"
                rtlClass="top_cloud3_for_rtl"
              />
              <Star
                lang={lang}
                color={darkMode && "#FF7539"}
                myClass="Star1 hide_for_tab_and_smaller_view"
                rtlClass="star1_for_rtl"
              />
              <Star
                lang={lang}
                color={darkMode && "#FF7539"}
                myClass="star2 hide_for_tab_and_smaller_view"
                rtlClass="star2_for_rtl"
              />
              {translations.homeTopSetion.title}
            </h2>
            <h3
              className={`subtitle mb20 centerForTabProAndMobileViewOnly ${
                darkMode && "white"
              }`}
            >
              {translations.homeTopSetion.subtitle}
            </h3>

            <p
              className={`text_body_medium top_detail_text_container centerForTabProAndMobileViewOnly ${
                darkMode && "gray"
              }`}
            >
              {translations.homeTopSetion.details}
            </p>
            <div
              style={{ position: "relative" }}
              className="centerForTabProAndMobileViewOnly"
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={
                  <MagicWand
                    lang={lang}
                    color={darkMode && "#1C1C1C"}
                    myClass="Magicwand"
                    rtlClass="Magicwand_for_rtl"
                  />
                }
                className={`top_contained_buttton ${darkMode && "black"}`}
                disableElevation
                component={Link}
                to="/contact"
              >
                {translations.homeTopSetion.connectWithUs}
              </Button>
              &nbsp; &nbsp;
              {/* <Button
                color="primary"
                startIcon={
                  <img
                    src="/images/Play.svg"
                    alt="play icon"
                    className="play_icon"
                   
                  />
                }
                className={`play_button ${darkMode && "white"}`}
                disableElevation
              >
                &nbsp; {translations.homeTopSetion.howItWorks}
              </Button> */}
              <div
                className={
                  lang === "kr"
                    ? "curveline_and_plane_holder curveline_and_plane_holder_for_rtl hide_for_tab_and_smaller_view"
                    : "curveline_and_plane_holder hide_for_tab_and_smaller_view"
                }
              >
                <CurveLine
                  myClass={
                    lang === "kr" ? "curveline curveline_for_rtl" : "curveline"
                  }
                />
                <Plane lang={lang} myClass="plane" />
              </div>
              <div className="text_animation_holder hide_for_tab_and_smaller_view">
                <div
                  style={{
                    background: darkMode && "#4790E4",
                  }}
                  className={
                    lang === "kr"
                      ? "extend_div extend_div_for_rtl"
                      : "extend_div"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <circle cx="5" cy="5" r="5" fill="#39FF41" />
                  </svg>{" "}
                  &nbsp;&nbsp; {translations.homeTopSetion.animationText}
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={4}
            xl={4}
            className="hide_for_tab_and_smaller_view"
            style={{ position: "relative" }}
          >
            <GlowBG
              lang={lang}
              myClass="top_GlowBG3"
              color={darkMode && "#005DB2"}
            />
            <div
              // className="top_image_holder"
              className={`top_image_holder ${
                lang === "kr" && "top_image_holder_for_rtl"
              } ${darkMode && "top_image_holder_for_dark"}`}
              style={
                {
                  // background: darkMode && "#4790E4",
                  // boxShadow:
                  //   lang === "kr"
                  //     ? "rgba(161, 186, 234,.7) -32px 68px 79px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                  //     : "rgba(161, 186, 234,.7) 32px 68px 79px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }
              }
            >
              <img
                src="/images/man.png"
                alt="model image"
                className={
                  lang === "kr"
                    ? "model_image model_image_for_rtl"
                    : "model_image"
                }
              />
              <Pattern
                lang={lang}
                color={darkMode && "#4790E4"}
                myClass="pattern"
                rtlClass="pattern_for_rtl"
              />
            </div>
            {/* <Lottie animationData={splash} loop={true} /> */}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <div className="section_style">
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
          <div
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
          </div>
          <div className="upper_slide">
            <div className="card_holder mb45">
              <div
                className="card1_style mobile_view_center"
                style={{
                  borderTop: "none",
                  borderLeft: "none",
                  background: "none",
                  boxShadow: "none",
                  display: "block",
                }}
              >
                <h3 className={`title_large2 mb5 ${darkMode && "lightBlue"}`}>
                  {translations.homeService.title}
                </h3>
                <h4 className="text_body_small_regular fw400 mb8">
                  {translations.homeService.subtitle}
                </h4>
                <p
                  className={`text_body_medium fw400 mb16 ${
                    darkMode && "white"
                  }`}
                >
                  {translations.homeService.details}
                </p>
                {/* <Button
                  variant="contained"
                  color="primary"
                  startIcon={
                    <MagicWand
                      lang={lang}
                      color={darkMode && "#1C1C1C"}
                      myClass="Magicwand"
                      rtlClass="Magicwand_for_rtl"
                    />
                  }
                  className={`top_contained_buttton ${darkMode && "black"}`}
                  disableElevation
                >
                  {translations.buttonText.discoverMoreText}
                </Button> */}
              </div>
              <div
                className={`card1_style  ${darkMode && "card1_style_for_dark"}`}
              >
                <div>
                  <div
                    className={`square_img_holder ${
                      darkMode && "square_img_holder_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                    >
                      <rect
                        x="14"
                        y="5"
                        width="26"
                        height="43"
                        rx="3"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                      <path
                        d="M30 37L27 40L30 43"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-linecap="round"
                      />
                      <path
                        d="M34 43L37 40L34 37"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-linecap="round"
                      />
                      <circle
                        cx="27.5"
                        cy="9.5"
                        r="1.5"
                        fill={darkMode ? "#1597e5" : "#113CFC"}
                      />
                    </svg>
                  </div>
                  <div
                    className={`card_left_padding ${
                      lang === "kr" && "card_left_padding_for_rtl"
                    }`}
                  >
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.homeService.card1.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400 text_overflow_ellipsis_line3"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.homeService.card1.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card_button_holder mt20  ${
                    darkMode && "card_button_holder_dark"
                  } ${lang === "kr" && "card_button_holder_rtl"}`}
                >
                  <Button
                    className={`card_button ${darkMode && "card_button_dark"} ${
                      lang === "kr" && "card_button_for_rtl"
                    }`}
                    component={Link}
                    to={"/services/mobile-application-development"}
                  >
                    {translations.buttonText.visitNowText}
                  </Button>
                </div>
              </div>
              <div
                className={`card1_style  ${
                  darkMode && "card1_style_for_dark"
                } `}
              >
                <div>
                  <div
                    className={`square_img_holder ${
                      darkMode && "square_img_holder_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <path
                        d="M21.0349 1.92969H5.5C3.29086 1.92969 1.5 3.72054 1.5 5.92968V36.9995C1.5 39.2086 3.29086 40.9995 5.49999 40.9995H36.5698C38.7789 40.9995 40.5698 39.2075 40.5698 36.9983C40.5698 30.6556 40.5698 25.415 40.5698 20.0692"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.8721 22.5352C10.8721 21.9829 11.3198 21.5352 11.8721 21.5352H19.9651C20.5174 21.5352 20.9651 21.9829 20.9651 22.5352V31.6282H11.8721C11.3198 31.6282 10.8721 31.1805 10.8721 30.6282V22.5352Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                      <path
                        d="M10.8721 12.3008C10.8721 11.7485 11.3198 11.3008 11.8721 11.3008H19.9651C20.5174 11.3008 20.9651 11.7485 20.9651 12.3008V20.3938C20.9651 20.9461 20.5174 21.3938 19.9651 21.3938H10.8721V12.3008Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                      <rect
                        x="21.1045"
                        y="21.5352"
                        width="10.093"
                        height="10.093"
                        rx="1"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                      <rect
                        x="30.4067"
                        y="2"
                        width="10.093"
                        height="10.093"
                        rx="1"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div
                    className={`card_left_padding ${
                      lang === "kr" && "card_left_padding_for_rtl"
                    }`}
                  >
                    {/* <Triangle
                    lang={lang}
                    color={darkMode ? "#4790E4" : "#ABCCFE"}
                    myClass="card_triangle hide_for_tab_and_smaller_view"
                    rtlClass="card_triangle_for_rtl"
                  /> */}
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.homeService.card2.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400 text_overflow_ellipsis_line3"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.homeService.card2.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card_button_holder mt20  ${
                    darkMode && "card_button_holder_dark"
                  } ${lang === "kr" && "card_button_holder_rtl"}`}
                >
                  <Button
                    className={`card_button ${darkMode && "card_button_dark"} ${
                      lang === "kr" && "card_button_for_rtl"
                    }`}
                    component={Link}
                    to={"/services/custom-software-development"}
                  >
                    {translations.buttonText.visitNowText}
                  </Button>
                </div>
              </div>
              <div
                className={`card1_style   ${
                  darkMode && "card1_style_for_dark"
                } `}
              >
                <div>
                  <div
                    className={`square_img_holder ${
                      darkMode && "square_img_holder_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                    >
                      <path
                        d="M22.5 18C20.1131 16.2098 17.1128 15.4412 14.1591 15.8631C11.2054 16.2851 8.54026 17.8631 6.75005 20.25C4.95983 22.637 4.19116 25.6373 4.61311 28.591C5.03507 31.5447 6.6131 34.2098 9.00005 36M31.5 36C32.6819 36.8865 34.0269 37.5314 35.458 37.8981C36.8892 38.2647 38.3785 38.3459 39.841 38.137C41.3036 37.928 42.7106 37.4331 43.9819 36.6804C45.2531 35.9277 46.3636 34.9319 47.25 33.75C48.1365 32.5682 48.7814 31.2232 49.1481 29.7921C49.5147 28.3609 49.5959 26.8716 49.387 25.4091C49.178 23.9465 48.6831 22.5395 47.9304 21.2682C47.1777 19.997 46.1819 18.8865 45 18M15.75 38.25C21.9623 38.25 23.625 33.75 27 27C30.375 20.25 32.0378 15.75 38.25 15.75"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div
                    className={`card_left_padding ${
                      lang === "kr" && "card_left_padding_for_rtl"
                    }`}
                  >
                    {/* <Triangle
                      lang={lang}
                      color={darkMode ? "#FF7539" : "#FFC93C"}
                      myClass="card_triangle2 hide_for_tab_and_smaller_view"
                      rtlClass="card_triangle2_for_rtl"
                    /> */}
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.homeService.card3.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400 text_overflow_ellipsis_line3"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.homeService.card3.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card_button_holder mt20  ${
                    darkMode && "card_button_holder_dark"
                  } ${lang === "kr" && "card_button_holder_rtl"}`}
                >
                  <Button
                    className={`card_button ${darkMode && "card_button_dark"} ${
                      lang === "kr" && "card_button_for_rtl"
                    }`}
                    component={Link}
                    to={"/services/devops-services"}
                  >
                    {translations.buttonText.visitNowText}
                  </Button>
                </div>
              </div>
              <div
                className={`card1_style  ${
                  darkMode && "card1_style_for_dark"
                } `}
              >
                <div>
                  <div
                    className={`square_img_holder ${
                      darkMode && "square_img_holder_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                    >
                      <path
                        d="M27.0002 47.8164C28.1947 47.8164 29.3403 47.342 30.185 46.4974L46.4964 30.186C47.3377 29.3395 47.8099 28.1946 47.8099 27.0011C47.8099 25.8077 47.3377 24.6627 46.4964 23.8163L30.185 7.50489C29.3386 6.6636 28.1936 6.19141 27.0002 6.19141C25.8067 6.19141 24.6618 6.6636 23.8153 7.50489L7.50392 23.8163C6.66263 24.6627 6.19043 25.8077 6.19043 27.0011C6.19043 28.1946 6.66263 29.3395 7.50392 30.186L23.8153 46.4974C24.66 47.342 25.8056 47.8164 27.0002 47.8164ZM27.0002 47.8164V27.0011M27.0002 27.0011L11.4077 19.9125M27.0002 27.0011L42.5927 19.9125"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className={`card_left_padding ${
                      lang === "kr" && "card_left_padding_for_rtl"
                    }`}
                  >
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.homeService.card4.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400 text_overflow_ellipsis_line3"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.homeService.card4.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card_button_holder mt20  ${
                    darkMode && "card_button_holder_dark"
                  } ${lang === "kr" && "card_button_holder_rtl"}`}
                >
                  <Button
                    className={`card_button ${darkMode && "card_button_dark"} ${
                      lang === "kr" && "card_button_for_rtl"
                    }`}
                    component={Link}
                    to={"/services/blockchain"}
                  >
                    {translations.buttonText.visitNowText}
                  </Button>
                </div>
              </div>
              <div
                className={`card1_style  ${
                  darkMode && "card1_style_for_dark"
                } `}
              >
                <div>
                  <div
                    className={`square_img_holder ${
                      darkMode && "square_img_holder_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                    >
                      <path
                        d="M5.3999 37.8016V23.4016C5.3999 21.492 6.15847 19.6607 7.50873 18.3104C8.859 16.9601 10.6903 16.2016 12.5999 16.2016C14.5095 16.2016 16.3408 16.9601 17.6911 18.3104C19.0413 19.6607 19.7999 21.492 19.7999 23.4016V37.8016M5.3999 30.6016H19.7999M43.1999 27.0016H34.1999M43.1999 27.0016C44.6321 27.0016 46.0056 26.4326 47.0183 25.4199C48.031 24.4072 48.5999 23.0337 48.5999 21.6016C48.5999 20.1694 48.031 18.7959 47.0183 17.7832C46.0056 16.7705 44.6321 16.2016 43.1999 16.2016H34.1999V27.0016M43.1999 27.0016C44.6321 27.0016 46.0056 27.5705 47.0183 28.5832C48.031 29.5959 48.5999 30.9694 48.5999 32.4016C48.5999 33.8337 48.031 35.2072 47.0183 36.2199C46.0056 37.2326 44.6321 37.8016 43.1999 37.8016H34.1999V27.0016M26.9999 3.60156V50.4016"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className={`card_left_padding ${
                      lang === "kr" && "card_left_padding_for_rtl"
                    }`}
                  >
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.homeService.card5.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400 text_overflow_ellipsis_line3"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.homeService.card5.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card_button_holder mt20  ${
                    darkMode && "card_button_holder_dark"
                  } ${lang === "kr" && "card_button_holder_rtl"}`}
                >
                  <Button
                    className={`card_button  ${
                      darkMode && "card_button_dark"
                    } ${lang === "kr" && "card_button_for_rtl"}`}
                    component={Link}
                    to={"/services/software-testing"}
                  >
                    {translations.buttonText.visitNowText}
                  </Button>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={
                  <MagicWand
                    lang={lang}
                    color={darkMode && "#1C1C1C"}
                    myClass="Magicwand"
                    rtlClass="Magicwand_for_rtl"
                  />
                }
                className={`top_contained_buttton ${darkMode && "black"}`}
                disableElevation
                component={Link}
                to="/services"
              >
                {translations.buttonText.discoverMoreText}
              </Button>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div className={`section_right_glow_holder`}>
            <GlowBG
              lang={lang}
              color={darkMode ? "#005DB2" : "#113CFC"}
              myClass="section_glow"
              // rtlClass="top_GlowBG1_for_rtl"
            />
          </div>
          <div className={`section_left_glow_holder`}>
            <GlowBG
              lang={lang}
              myClass="section_glow"
              color={darkMode && "#005DB2"}
            />
          </div>
          <Grid container alignItems="center" className="upper_slide">
            <Grid item xs={12} sm={5}>
              <img
                src={
                  darkMode
                    ? "/images/Have_any_Idea_dark.png"
                    : "/images/Have_any_Idea_light.png"
                }
                alt="Have Any Idea"
                className="image_style"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              md={7}
              lg={6}
              xl={5}
              className="mobile_view_center"
            >
              <p className={`title_large2 ${darkMode && "lightBlue"}`}>
                <CommaIcon
                  lang={lang}
                  color={darkMode && "#FF7539"}
                  myClass="comma_left"
                  rtlClass="comma_left_for_rtl"
                />
                {translations.homeIdea.title1}
              </p>
              <p className={`title_large2 mb40 ${darkMode && "lightBlue"}`}>
                {translations.homeIdea.title2}{" "}
                <CommaIcon
                  lang={lang}
                  color={darkMode && "#FF7539"}
                  myClass="comma_right"
                  rtlClass="comma_right_for_rtl"
                />
              </p>
              <p className="text_body_small_regular fw400 mb5">
                {translations.homeIdea.subtitle}
              </p>
              <p
                className={`text_body_medium fw400 mb40 ${darkMode && "white"}`}
              >
                {translations.homeIdea.details}
              </p>
              <Grid
                container
                justifyContent={{
                  xs: "center",
                  sm: lang === "kr" ? "right" : "left",
                }}
                className="mb60"
                style={{ gap: "14px" }}
              >
                <div className={`chip_style ${darkMode && "chip_style_dark"}`}>
                  {translations.homeIdea.productName1}
                </div>
                <div className={`chip_style ${darkMode && "chip_style_dark"}`}>
                  {translations.homeIdea.productName2}
                </div>
                <div className={`chip_style ${darkMode && "chip_style_dark"}`}>
                  {translations.homeIdea.productName3}
                </div>
                <div className={`chip_style ${darkMode && "chip_style_dark"}`}>
                  {translations.homeIdea.productName4}
                </div>
                <div className={`chip_style ${darkMode && "chip_style_dark"}`}>
                  {translations.homeIdea.productName5}
                </div>
                <div className={`chip_style ${darkMode && "chip_style_dark"}`}>
                  {translations.homeIdea.productName6}
                </div>
                <div className={`chip_style ${darkMode && "chip_style_dark"}`}>
                  {translations.homeIdea.productName7}
                </div>
                <div className={`chip_style ${darkMode && "chip_style_dark"}`}>
                  {translations.homeIdea.productName8}
                </div>
              </Grid>
              {/* <Button
                variant="contained"
                color="primary"
                startIcon={
                  <BusinessIcon
                    lang={lang}
                    color={darkMode && "#1C1C1C"}
                    color2={darkMode && "#FF7539"}
                    myClass="businessIcon"
                    rtlClass="Magicwand_for_rtl"
                  />
                }
                className={`top_contained_buttton ${darkMode && "black"}`}
                disableElevation
              >
                {translations.buttonText.anyBusynessIdea}
              </Button> */}
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <div className="upper_slide">
            <h2
              className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}
            >
              {translations.homeProduct.title}
            </h2>
            <p className="text_body_small_regular fw400 center mb50">
              {translations.homeProduct.subtitle}
            </p>
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
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={
                  <MagicWand
                    lang={lang}
                    color={darkMode && "#1C1C1C"}
                    myClass="Magicwand"
                    rtlClass="Magicwand_for_rtl"
                  />
                }
                component={Link}
                to="/products"
                className={`top_contained_buttton ${darkMode && "black"}`}
                disableElevation
              >
                {translations.buttonText.discoverMoreText}
              </Button>
            </div>
          </div>
        </div>
        <div className="section_style">
          <Grid container alignItems="center">
            <Grid
              item
              xs={12}
              sm={6}
              className="centerForTabProAndMobileViewOnly"
            >
              <p className={`title_large2 ${darkMode && "lightBlue"}`}>
                {translations.homeAccreditation.title1}
              </p>
              <p className={`title_large2 mb5 ${darkMode && "lightBlue"}`}>
                {translations.homeAccreditation.title2}{" "}
              </p>
              <p className="text_body_small_regular fw400 mb5">
                {translations.homeAccreditation.subtitle}
              </p>
              <p
                className={`text_body_medium fw400 mb40 text_width ${
                  darkMode && "white"
                }`}
              >
                {translations.homeAccreditation.details}
              </p>
            </Grid>

            <Grid item xs={12} sm={6} className="hide_for_tab_and_smaller_view">
              <Grid container alignItems="center">
                <Grid item xs={12} sm={6}>
                  <div className={`card8  ${darkMode && "card8_for_dark"}`}>
                    <img
                      src="/images/ISO_9001_light.png"
                      alt=""
                      style={{
                        width: "60%",
                        display: "block",
                        margin: "auto",
                      }}
                      className="mb24"
                    />

                    <p
                      className={`text_body_small_regular fw400 center`}
                      style={{
                        color: darkMode ? "#C7C7C7" : "#2B2B2B",
                      }}
                    >
                      {translations.homeAccreditation.card1.details}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={`card8 mb24 ${darkMode && "card8_for_dark"}`}>
                    <img
                      src="/images/basis_light.png"
                      alt=""
                      style={{
                        width: "60%",
                        display: "block",
                        margin: "auto",
                      }}
                      className="mb45"
                    />

                    <p
                      className={`text_body_small_regular fw400 center`}
                      style={{
                        color: darkMode ? "#C7C7C7" : "#2B2B2B",
                      }}
                    >
                      {translations.homeAccreditation.card2.details}
                    </p>
                  </div>

                  <div className={`card8  ${darkMode && "card8_for_dark"}`}>
                    <img
                      src="/images/ISO_27001 _light.png"
                      alt=""
                      style={{
                        width: "60%",
                        display: "block",
                        margin: "auto",
                      }}
                      className="mb24"
                    />

                    <p
                      className={`text_body_small_regular fw400 center`}
                      style={{
                        color: darkMode ? "#C7C7C7" : "#2B2B2B",
                      }}
                    >
                      {translations.homeAccreditation.card3.details}
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              className="showForTabAndMobileViewOnly"
            >
              <Grid container alignItems="center" spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={6}>
                  <div
                    className={`card8 card8_height_for_tab_view  ${
                      darkMode && "card8_for_dark"
                    }`}
                  >
                    <img
                      src="/images/ISO_9001_light.png"
                      alt=""
                      style={{
                        width: "60%",
                        display: "block",
                        margin: "auto",
                      }}
                      className="mb24"
                    />

                    <p
                      className={`text_body_small_regular fw400 center`}
                      style={{
                        color: darkMode ? "#C7C7C7" : "#2B2B2B",
                      }}
                    >
                      {translations.homeAccreditation.card1.details}
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={6}
                  className="showForTabAndMobileViewOnly"
                >
                  <div
                    className={`card8 card8_height_for_tab_view ${
                      darkMode && "card8_for_dark"
                    }`}
                  >
                    <img
                      src="/images/basis_light.png"
                      alt=""
                      style={{
                        width: "60%",
                        display: "block",
                        margin: "auto",
                      }}
                      className="mb45"
                    />

                    <p
                      className={`text_body_small_regular fw400 center`}
                      style={{
                        color: darkMode ? "#C7C7C7" : "#2B2B2B",
                      }}
                    >
                      {translations.homeAccreditation.card2.details}
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={6}
                  className="showForTabAndMobileViewOnly"
                >
                  <div
                    className={`card8 card8_height_for_tab_view ${
                      darkMode && "card8_for_dark"
                    }`}
                  >
                    <img
                      src="/images/ISO_27001 _light.png"
                      alt=""
                      style={{
                        width: "60%",
                        display: "block",
                        margin: "auto",
                      }}
                      className="mb24"
                    />

                    <p
                      className={`text_body_small_regular fw400 center`}
                      style={{
                        color: darkMode ? "#C7C7C7" : "#2B2B2B",
                      }}
                    >
                      {translations.homeAccreditation.card3.details}
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <h2 className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}>
            {translations.homeCaseStudies.title}
          </h2>
          <p className="text_body_small_regular fw400 center mb50">
            {translations.homeCaseStudies.subtitle}
          </p>
          <div className="card_holder mb45">
            <div
              className={`card2_style  ${darkMode && "card1_style_for_dark"}`}
              style={{ display: "block", overflow: "hidden" }}
            >
              <img
                src="/images/img1.png"
                alt="product image"
                width="100%"
                // height="100%"
              />

              <div style={{ padding: "14px 24px" }}>
                <h4
                  className={`text_body_medium fw500 mb8 ${
                    darkMode && "white"
                  }`}
                >
                  {translations.homeCaseStudies.card1.title}
                </h4>
                <p
                  className="text_body_small_regular fw400 text_overflow_ellipsis_line4"
                  style={{
                    color: darkMode ? "#C7C7C7" : "#525252",
                  }}
                >
                  {translations.homeCaseStudies.card1.details}
                </p>
              </div>

              {/* <div
                className={`card_button_holder   ${
                  darkMode && "card_button_holder_dark"
                } ${lang === "kr" && "card_button_holder_rtl"}`}
              >
                <Button
                  className={`card_button ${darkMode && "card_button_dark"} ${
                    lang === "kr" && "card_button_for_rtl"
                  }`}
                >
                  {translations.buttonText.checkDetails}
                </Button>
              </div> */}
            </div>
            <div
              className={`card2_style  ${darkMode && "card1_style_for_dark"}`}
              style={{ display: "block", overflow: "hidden" }}
            >
              <img
                src="/images/img2.png"
                alt="product image"
                width="100%"
                // height="100%"
              />

              <div style={{ padding: "14px 24px" }}>
                <h4
                  className={`text_body_medium fw500 mb8 ${
                    darkMode && "white"
                  }`}
                >
                  {translations.homeCaseStudies.card2.title}
                </h4>
                <p
                  className="text_body_small_regular fw400 text_overflow_ellipsis_line4"
                  style={{
                    color: darkMode ? "#C7C7C7" : "#525252",
                  }}
                >
                  {translations.homeCaseStudies.card2.details}
                </p>
              </div>

              {/* <div
                className={`card_button_holder   ${
                  darkMode && "card_button_holder_dark"
                } ${lang === "kr" && "card_button_holder_rtl"}`}
              >
                <Button
                  className={`card_button ${darkMode && "card_button_dark"} ${
                    lang === "kr" && "card_button_for_rtl"
                  }`}
                >
                  {translations.buttonText.checkDetails}
                </Button>
              </div> */}
            </div>
            <div
              className={`card2_style  ${darkMode && "card1_style_for_dark"}`}
              style={{ display: "block", overflow: "hidden" }}
            >
              <img
                src="/images/img3.png"
                alt="product image"
                width="100%"
                // height="100%"
              />

              <div style={{ padding: "14px 24px" }}>
                <h4
                  className={`text_body_medium fw500 mb8 ${
                    darkMode && "white"
                  }`}
                >
                  {translations.homeCaseStudies.card3.title}
                </h4>
                <p
                  className="text_body_small_regular fw400 text_overflow_ellipsis_line4"
                  style={{
                    color: darkMode ? "#C7C7C7" : "#525252",
                  }}
                >
                  {translations.homeCaseStudies.card3.details}
                </p>
              </div>

              {/* <div
                className={`card_button_holder   ${
                  darkMode && "card_button_holder_dark"
                } ${lang === "kr" && "card_button_holder_rtl"}`}
              >
                <Button
                  className={`card_button ${darkMode && "card_button_dark"} ${
                    lang === "kr" && "card_button_for_rtl"
                  }`}
                >
                  {translations.buttonText.checkDetails}
                </Button>
              </div> */}
            </div>
            <div
              className={`card2_style  ${darkMode && "card1_style_for_dark"}`}
              style={{ display: "block", overflow: "hidden" }}
            >
              <img
                src="/images/img4.png"
                alt="product image"
                width="100%"
                // height="100%"
              />

              <div style={{ padding: "14px 24px" }}>
                <h4
                  className={`text_body_medium fw500 mb8 ${
                    darkMode && "white"
                  }`}
                >
                  {translations.homeCaseStudies.card4.title}
                </h4>
                <p
                  className="text_body_small_regular fw400 text_overflow_ellipsis_line4"
                  style={{
                    color: darkMode ? "#C7C7C7" : "#525252",
                  }}
                >
                  {translations.homeCaseStudies.card4.details}
                </p>
              </div>

              {/* <div
                className={`card_button_holder   ${
                  darkMode && "card_button_holder_dark"
                } ${lang === "kr" && "card_button_holder_rtl"}`}
              >
                <Button
                  className={`card_button ${darkMode && "card_button_dark"} ${
                    lang === "kr" && "card_button_for_rtl"
                  }`}
                >
                  {translations.buttonText.checkDetails}
                </Button>
              </div> */}
            </div>
          </div>
          {/* <div style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={
                <MagicWand
                  lang={lang}
                  color={darkMode && "#1C1C1C"}
                  myClass="Magicwand"
                  rtlClass="Magicwand_for_rtl"
                />
              }
              className={`top_contained_buttton ${darkMode && "black"}`}
              disableElevation
            >
              {translations.buttonText.discoverMoreText}
            </Button>
          </div> */}
        </div>
        <div className="section_style">
          <h2 className={`title_large2 mb5 ${darkMode && "lightBlue"}`}>
            {translations.homeContact.title}
          </h2>

          <p
            className={`text_body_medium fw400 mb40 text_width ${
              darkMode && "white"
            }`}
          >
            {translations.homeContact.details}
          </p>
          <Grid container alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              xl={6}
              // className="mobile_view_center"
            >
              <address>
                <Grid container>
                  <Grid item xs={12} className="mb60">
                    <Grid container spacing={2}>
                      <Grid item xs={2}>
                        <img
                          src={
                            darkMode
                              ? "/images/mobile_icon_dark.png"
                              : "/images/mobile_icon_light.png"
                          }
                          alt="Have Any Idea"
                          // width="100%"
                          // style={{ width: "20px" }}
                          className="image_style2"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <h4
                          style={{ color: "#D23F00" }}
                          className={`title_semibold_medium fw400 mb10`}
                        >
                          {translations.homeContact.contactTitle}
                        </h4>

                        <Link
                          to="mailto:contact@newroztech.com"
                          style={{ textDecoration: "none", display: "block" }}
                          className={`text_body_medium fw500 mb6 ${
                            darkMode && "white"
                          }`}
                        >
                          {translations.homeContact.email}
                        </Link>

                        <p
                          className={`text_body_medium fw500 mb6 ${
                            darkMode && "white"
                          }`}
                        >
                          {translations.homeContact.usNumber}
                        </p>
                        <p
                          className={`text_body_medium fw500 mb6 ${
                            darkMode && "white"
                          }`}
                        >
                          {translations.homeContact.bdNumber}
                        </p>
                        <p
                          className={`text_body_medium fw500 mb6 ${
                            darkMode && "white"
                          }`}
                        >
                          {translations.homeContact.iqNumber}
                        </p>
                        <p
                          className={`text_body_medium fw500 mb6 ${
                            darkMode && "white"
                          }`}
                        >
                          {translations.homeContact.uaeNumber}
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={2}>
                        <img
                          src={
                            darkMode
                              ? "/images/time_icon_dark.png"
                              : "/images/time_icon_light.png"
                          }
                          alt="Have Any Idea"
                          // width="100%"
                          // style={{ width: "20px" }}
                          className="image_style2"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <h4
                          style={{ color: "#D23F00" }}
                          className={`title_semibold_medium fw400 mb10`}
                        >
                          {translations.homeContact.workingHourTitle}
                        </h4>

                        <p
                          className={`text_body_medium fw500 mb6 ${
                            darkMode && "white"
                          }`}
                        >
                          {translations.homeContact.workingHour}
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </address>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6}>
              <Grid
                container
                spacing={3}
                className="message_box_input_box_margin"
              >
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    placeholder={translations.homeContact.formTextYourName}
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    // className="message_form_input_style"
                    className={`message_form_input_style ${
                      darkMode && "message_form_input_style_dark"
                    }`}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    placeholder={translations.homeContact.formTextEmail}
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    className={`message_form_input_style ${
                      darkMode && "message_form_input_style_dark"
                    }`}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    placeholder={translations.homeContact.formTextPhone}
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    className={`message_form_input_style ${
                      darkMode && "message_form_input_style_dark"
                    }`}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    placeholder={translations.homeContact.formTextYourMassage}
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    className={`message_form_input_style ${
                      darkMode && "message_form_input_style_dark"
                    }`}
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} className="">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={
                      <SendIcon
                        lang={lang}
                        color={darkMode && "#1C1C1C"}
                        // myClass="Magicwand"
                        rtlClass="send_icon_for_rtl"
                      />
                    }
                    className={`top_contained_buttton ${darkMode && "black"}`}
                    disableElevation
                  >
                    {translations.buttonText.submitNow}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Home;
