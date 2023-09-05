import React, { useEffect, useState } from "react";
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

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const techs = [
  {
    img: "/images/Codeigniter.png",
    techId: "Backend",
    title: "Codeigniter",
  },
  {
    img: "/images/Figma.png",
    techId: "Design",
    title: "Figma",
  },
  {
    img: "/images/Cassandra.png",
    techId: "Backend",
    title: "Cassandra",
  },
  {
    img: "/images/Postgre_SQL.png",
    techId: "Database",
    title: "Postgre SQL",
  },
  {
    img: "/images/MySQL.png",
    techId: "Database",
    title: "MySQL",
  },
  {
    img: "/images/Protopie.png",
    techId: "Design",
    title: "Protopie",
  },
  {
    img: "/images/React.png",
    techId: "Frontend",
    title: "React",
  },
  {
    img: "/images/Balsamiq.png",
    techId: "Design",
    title: "Balsamiq",
  },
  {
    img: "/images/Next_Js.png",
    techId: "Frontend",
    title: "Next Js",
  },
  {
    img: "/images/Amazon_web_service.png",
    techId: "Cloud",
    title: "Amazon web service",
  },
  {
    img: "/images/PHP_Cupcake.png",
    techId: "Backend",
    title: "PHP Cupcake",
  },
  {
    img: "/images/Selenium.png",
    techId: "Testing",
    title: "Selenium",
  },
  {
    img: "/images/Appium.png",
    techId: "Testing",
    title: "Appium",
  },
  {
    img: "/images/JMeter_Apache.png",
    techId: "Testing",
    title: "JMeter Apache",
  },
  {
    img: "/images/Docker.png",
    techId: "Cloud",
    title: "Docker",
  },
  {
    img: "/images/Jenkins.png",
    techId: "Devops",
    title: "Jenkins",
  },
  {
    img: "/images/Kubernetes.png",
    techId: "Cloud",
    title: "Kubernetes",
  },
  {
    img: "/images/Java.png",
    techId: "Backend",
    title: "Java",
  },
  {
    img: "/images/Spring.png",
    techId: "Backend",
    title: "Spring",
  },
  {
    img: "/images/Laravel.png",
    techId: "Backend",
    title: "Laravel",
  },
  {
    img: "/images/Python.png",
    techId: "Backend",
    title: "Python",
  },
  {
    img: "/images/PHP.png",
    techId: "Backend",
    title: "PHP",
  },
  {
    img: "/images/Symfony.png",
    techId: "Backend",
    title: "Symfony",
  },
  {
    img: "/images/Photoshop.png",
    techId: "Design",
    title: "Photoshop",
  },
  {
    img: "/images/Illustrator.png",
    techId: "Design",
    title: "Illustrator",
  },
  {
    img: "/images/Flutter.png",
    techId: "Mobile App",
    title: "Flutter",
  },
  {
    img: "/images/Material_UI.png",
    techId: "Frontend",
    title: "Material UI",
  },
  {
    img: "/images/Swift.png",
    techId: "Mobile App",
    title: "Swift",
  },
];
const Services = ({ translations, lang, darkMode }) => {
  const [active, setActive] = useState(
    translations.companyTechnologiesWeUse.all
  );
  const [techList, setTechList] = useState(techs);
  const handleTech = (id) => {
    if (id === "All") {
      setTechList(techs);
    } else {
      setTechList(techs.filter((res) => res.techId === id));
    }
    setActive(id);
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
              {translations.pageTitles.servicespageTitle}
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
                {translations.pageTitles.servicespageTitle}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="section_style">
          <h2 className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}>
            {translations.services.title}
          </h2>
          <p className="text_body_small_regular fw400 center mb8">
            {translations.services.subtitle}
          </p>
          <div className="detail_text_container">
            <p
              className={`text_body_small_regular fw400 center mb50  ${
                darkMode ? "white" : "black2"
              }`}
            >
              {translations.services.details}
            </p>
          </div>
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
                        d="M24.7273 38.2727H7L7 17.8182M33.3636 38.2727H31.0909M7 17.8182L7 14.6364C7 12.6281 8.62806 11 10.6364 11H36.0909C38.0992 11 39.7273 12.6281 39.7273 14.6364V17.8182H7ZM39.7273 21.4545V23.2727"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M33.3638 32.1483V27.9378H38.4143L37.7749 26.1611C37.3486 24.9763 38.2265 23.7273 39.4857 23.7273H40.8782C42.1374 23.7273 43.0153 24.9763 42.589 26.1611L41.9496 27.9378H47.0001V32.1483L45.2363 31.6888C44.0845 31.3887 42.9597 32.258 42.9597 33.4483V34.2226C42.9597 35.5027 44.2474 36.382 45.4397 35.916L47.0001 35.3062V40.0431H41.9496L42.4326 41.2176C42.9247 42.4142 42.0449 43.7273 40.7511 43.7273H39.7879C38.5881 43.7273 37.7172 42.5855 38.0345 41.4284L38.4143 40.0431H33.3638V35.3062L34.3395 35.742C35.5422 36.2792 36.8991 35.399 36.8991 34.0819V33.5341C36.8991 32.3178 35.7279 31.4444 34.5621 31.7916L33.3638 32.1483Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="27.9091"
                        cy="38.2729"
                        r="0.909091"
                        fill="#113CFC"
                      />
                      <circle
                        cx="11.5453"
                        cy="14.6364"
                        r="0.909091"
                        fill="#113CFC"
                      />
                      <circle
                        cx="15.182"
                        cy="14.6364"
                        r="0.909091"
                        fill="#113CFC"
                      />
                      <circle
                        cx="18.8183"
                        cy="14.6364"
                        r="0.909091"
                        fill="#113CFC"
                      />
                      <mask id="path-7-inside-1_2074_6237" fill="white">
                        <rect
                          x="11"
                          y="23"
                          width="11"
                          height="11"
                          rx="1.81818"
                        />
                      </mask>
                      <rect
                        x="11"
                        y="23"
                        width="11"
                        height="11"
                        rx="1.81818"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="4"
                        stroke-linejoin="round"
                        mask="url(#path-7-inside-1_2074_6237)"
                      />
                      <path
                        d="M24.5 27H27.5"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M24.5 30H29.5"
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
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.homeService.card6.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400 text_overflow_ellipsis_line3"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.homeService.card6.details}
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
                    to={"/services/web-application-development"}
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
                        d="M20.9449 13.0327L17.7433 9.79808C15.9496 7.98576 13.0612 7.92235 11.1912 9.65424C9.20269 11.4959 9.13505 14.6409 11.0425 16.5681L30.2677 35.9921M30.2677 35.9921L36.3858 29.8107M30.2677 35.9921C29.9764 37.7582 31.0835 41.8202 37.8425 43.9396M36.3858 29.8107L30.7997 23.6294M36.3858 29.8107C37.7454 29.8107 40.8142 30.3406 42.2126 32.4599C43.611 34.5792 45.3202 42.3697 46 46L42.7953 45.117M30.7997 23.6294L24.1496 16.2706M30.7997 23.6294L26.6961 27.6234M36.9685 24.2181L43.0859 17.6739C45.1953 15.4173 45.1452 11.8747 42.9728 9.67994C40.7752 7.45955 37.2189 7.43737 34.9943 9.63018L27.063 17.448M15.7008 28.9277L11.9134 33.0486L9 43.9396L19.4882 41.5847L24.7323 36.5808"
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
                      {translations.homeService.card7.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400 text_overflow_ellipsis_line3"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.homeService.card7.details}
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
                    to={"/services/design"}
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
                        d="M34 10V8C34 5.79086 32.2091 4 30 4H10C7.79086 4 6 5.79086 6 8V45C6 47.2091 7.79086 49 10 49H31.5C32.8807 49 34 47.8807 34 46.5V46.5"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <circle cx="20.5" cy="9.5" r="1.5" fill="#113CFC" />
                      <path
                        d="M42.192 17.3071L34.2112 14.2706C33.7531 14.0963 33.2469 14.0963 32.7888 14.2706L22.3022 18.2605C21.5196 18.5582 21.0009 19.313 21.0342 20.1496C21.2517 25.6136 22.4362 30.0013 24.4137 33.4957C26.3845 36.9784 29.1584 39.6013 32.6043 41.5239C33.1607 41.8343 33.838 41.8344 34.3945 41.524C37.8486 39.5977 40.6275 36.9673 42.5994 33.4726C43.8079 31.3307 44.7191 28.8538 45.2929 26"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M32.3381 33.317L28.264 26.0078L31.6524 28.0178C32.3034 28.404 33.1167 28.3895 33.7536 27.9805L42.76 22.1961L32.3381 33.317Z"
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
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.homeService.card8.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400 text_overflow_ellipsis_line3"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.homeService.card8.details}
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
                    to={"/services/ekyc-verification-services"}
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
                      <mask id="path-1-inside-1_2074_5958" fill="white">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M26.5839 41.5074C28.6275 41.5074 30.5706 41.0773 32.3277 40.3028C32.9974 40.0075 33.7691 40.0395 34.4238 40.3666C35.8863 41.0974 37.5364 41.5086 39.2826 41.5086C45.294 41.5086 50.1672 36.6354 50.1672 30.624C50.1672 24.6126 45.294 19.7393 39.2826 19.7393C38.9277 19.7393 38.5935 19.5653 38.3945 19.2714C35.8319 15.4872 31.4983 13 26.5839 13C21.6695 13 17.3361 15.487 14.7734 19.2711C14.5743 19.5651 14.2398 19.7393 13.8846 19.7393C7.87322 19.7393 3 24.6126 3 30.624C3 36.6354 7.87322 41.5086 13.8846 41.5086C15.6309 41.5086 17.2811 41.0974 18.7437 40.3665C19.3984 40.0394 20.17 40.0074 20.8398 40.3027C22.5969 41.0773 24.5402 41.5074 26.5839 41.5074Z"
                        />
                      </mask>
                      <path
                        d="M18.7437 40.3665L19.6377 42.1556L18.7437 40.3665ZM20.8398 40.3027L20.033 42.1327L20.8398 40.3027ZM14.7734 19.2711L13.1174 18.1496L14.7734 19.2711ZM38.3945 19.2714L36.7385 20.3928L38.3945 19.2714ZM32.3277 40.3028L33.1345 42.1328L32.3277 40.3028ZM34.4238 40.3666L33.5298 42.1557L34.4238 40.3666ZM31.521 38.4727C30.0132 39.1373 28.3444 39.5074 26.5839 39.5074V43.5074C28.9105 43.5074 31.128 43.0173 33.1345 42.1328L31.521 38.4727ZM39.2826 39.5086C37.8537 39.5086 36.509 39.1728 35.3177 38.5776L33.5298 42.1557C35.2637 43.0221 37.2192 43.5086 39.2826 43.5086V39.5086ZM48.1672 30.624C48.1672 35.5308 44.1894 39.5086 39.2826 39.5086V43.5086C46.3986 43.5086 52.1672 37.74 52.1672 30.624H48.1672ZM39.2826 21.7393C44.1894 21.7393 48.1672 25.7171 48.1672 30.624H52.1672C52.1672 23.508 46.3986 17.7393 39.2826 17.7393V21.7393ZM26.5839 15C30.8069 15 34.5321 17.1346 36.7385 20.3928L40.0506 18.15C37.1318 13.8398 32.1898 11 26.5839 11V15ZM16.4294 20.3925C18.6359 17.1344 22.3609 15 26.5839 15V11C20.9781 11 16.0363 13.8396 13.1174 18.1496L16.4294 20.3925ZM5 30.624C5 25.7171 8.97779 21.7393 13.8846 21.7393V17.7393C6.76865 17.7393 1 23.508 1 30.624H5ZM13.8846 39.5086C8.97779 39.5086 5 35.5308 5 30.624H1C1 37.74 6.76865 43.5086 13.8846 43.5086V39.5086ZM17.8496 38.5775C16.6584 39.1728 15.3136 39.5086 13.8846 39.5086V43.5086C15.9481 43.5086 17.9037 43.0221 19.6377 42.1556L17.8496 38.5775ZM26.5839 39.5074C24.8232 39.5074 23.1544 39.1373 21.6465 38.4726L20.033 42.1327C22.0395 43.0173 24.2571 43.5074 26.5839 43.5074V39.5074ZM19.6377 42.1556C19.7846 42.0822 19.9328 42.0886 20.033 42.1327L21.6465 38.4726C20.4072 37.9263 19.0122 37.9965 17.8496 38.5775L19.6377 42.1556ZM13.1174 18.1496C13.2974 17.8839 13.5888 17.7393 13.8846 17.7393V21.7393C14.8908 21.7393 15.8512 21.2464 16.4294 20.3925L13.1174 18.1496ZM39.2826 17.7393C39.5787 17.7393 39.8705 17.8841 40.0506 18.15L36.7385 20.3928C37.3166 21.2465 38.2767 21.7393 39.2826 21.7393V17.7393ZM33.1345 42.1328C33.2346 42.0887 33.3829 42.0823 33.5298 42.1557L35.3177 38.5776C34.1552 37.9967 32.7603 37.9264 31.521 38.4727L33.1345 42.1328Z"
                        fill={darkMode ? "#1597e5" : "#113CFC"}
                        mask="url(#path-1-inside-1_2074_5958)"
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
                      {translations.homeService.card9.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400 text_overflow_ellipsis_line3"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.homeService.card9.details}
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
                    to={"/services/cloud-consultancy"}
                  >
                    {translations.buttonText.visitNowText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
