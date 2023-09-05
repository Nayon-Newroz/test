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
const Contact = ({ translations, lang, darkMode }) => {
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
              {translations.pageTitles.contactpageTitle}
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
                {translations.pageTitles.contactpageTitle}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="section_style ">
          <div className="contact_form_container">
            <h2
              className={`title_large2 center mb5 ${darkMode && "lightBlue"}`}
            >
              {translations.homeContact.title}
            </h2>

            <p
              className={`text_body_medium fw400 mb40 center ${
                darkMode && "white"
              }`}
            >
              {translations.homeContact.details}
            </p>

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
              <Grid item xs={12} className="center">
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
          </div>
        </div>
        <div className="section_style">
          <h2 className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}>
            {translations.contactFindUs.title}
          </h2>
          <p className="text_body_small_regular fw400 center mb30">
            {translations.contactFindUs.subtitle}
          </p>

          <div
            className={`card_triangle_holder ${
              lang === "kr" && "card_triangle_holder_for_rtl"
            }`}
          ></div>
          <div className="upper_slide">
            <div
              style={{
                minHeight: "550px",
                // background: "red",
                backgroundImage: "url(/images/Map_Light.png)",
                height: "100%",

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div
                className="card_holder mb45"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <div
                  className={`card7_style  ${
                    darkMode && "card7_style_for_dark"
                  }`}
                >
                  <Grid container alignItems="center" columnSpacing={2}>
                    <Grid item xs="auto">
                      <img
                        src={
                          darkMode
                            ? "/images/kurdistan_flag_dark.png"
                            : "/images/kurdistan_flag_light.png"
                        }
                        alt="flag"
                        width="100px"
                      />
                    </Grid>
                    <Grid item xs="auto">
                      <h4
                        className={`text_body_medium fw500 mb8 ${
                          darkMode && "white"
                        }`}
                      >
                        {translations.contactFindUs.card1.title}
                      </h4>
                      <p
                        className="text_body_small_regular fw500 mb8"
                        style={{ color: darkMode ? "#fff" : "#2B2B2B" }}
                      >
                        {translations.contactFindUs.card1.address}
                      </p>
                      <p
                        className="text_body_small_regular fw500"
                        style={{ color: darkMode ? "#fff" : "#2B2B2B" }}
                      >
                        {translations.contactFindUs.card1.phone}
                      </p>
                    </Grid>
                  </Grid>
                </div>
                <div
                  className={`card7_style  ${
                    darkMode && "card7_style_for_dark"
                  }`}
                >
                  <Grid container alignItems="center" columnSpacing={2}>
                    <Grid item xs="auto">
                      <img
                        src={
                          darkMode
                            ? "/images/uae_flag_dark.png"
                            : "/images/uae_flag_light.png"
                        }
                        alt="flag"
                        width="100px"
                      />
                    </Grid>
                    <Grid item xs="auto">
                      <h4
                        className={`text_body_medium fw500 mb8 ${
                          darkMode && "white"
                        }`}
                      >
                        {translations.contactFindUs.card2.title}
                      </h4>
                      <p
                        className="text_body_small_regular fw500 mb8"
                        style={{ color: darkMode ? "#fff" : "#2B2B2B" }}
                      >
                        {translations.contactFindUs.card2.address}
                      </p>
                      <p
                        className="text_body_small_regular fw500"
                        style={{ color: darkMode ? "#fff" : "#2B2B2B" }}
                      >
                        {translations.contactFindUs.card2.phone}
                      </p>
                    </Grid>
                  </Grid>
                </div>
                <div
                  className={`card7_style  ${
                    darkMode && "card7_style_for_dark"
                  }`}
                >
                  <Grid container alignItems="center" columnSpacing={2}>
                    <Grid item xs="auto">
                      <img
                        src={
                          darkMode
                            ? "/images/bangladesh_flag_dark.png"
                            : "/images/bangladesh_flag_light.png"
                        }
                        alt="flag"
                        width="100px"
                      />
                    </Grid>
                    <Grid item xs="auto">
                      <h4
                        className={`text_body_medium fw500 mb8 ${
                          darkMode && "white"
                        }`}
                      >
                        {translations.contactFindUs.card3.title}
                      </h4>
                      <p
                        className="text_body_small_regular fw500 mb8"
                        style={{ color: darkMode ? "#fff" : "#2B2B2B" }}
                      >
                        {translations.contactFindUs.card3.address}
                      </p>
                      <p
                        className="text_body_small_regular fw500"
                        style={{ color: darkMode ? "#fff" : "#2B2B2B" }}
                      >
                        {translations.contactFindUs.card3.phone}
                      </p>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <h2 className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}>
            {translations.contactFollowUs.title}
          </h2>
          <p className="text_body_small_regular fw400 fw400 center mb30">
            {translations.contactFollowUs.subtitle}
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
                className={`card8_style  ${darkMode && "card1_style_for_dark"}`}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  columnSpacing={2}
                >
                  <Grid item xs="auto">
                    <div
                      className={`circle_img_holder ${
                        darkMode && "circle_img_holder_for_dark"
                      }`}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginBottom: "0px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M13.7661 28.2273V17.1761H10.0293V12.8692H13.7661V9.69302C13.7661 6.00707 16.0282 4 19.3321 4C20.9147 4 22.2748 4.11727 22.6712 4.16968V8.02171L20.3798 8.02275C18.5829 8.02275 18.235 8.8725 18.235 10.1195V12.8692H22.5203L21.9624 17.1761H18.235V28.2273H13.7661Z"
                          fill="#3B5998"
                        />
                      </svg>
                    </div>
                  </Grid>
                  <Grid item xs="auto">
                    <h4 className={`card_title fw500 ${darkMode && "white"}`}>
                      {translations.contactFollowUs.followUs}
                    </h4>
                  </Grid>
                </Grid>
              </div>
              <div
                className={`card8_style  ${darkMode && "card1_style_for_dark"}`}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  columnSpacing={2}
                >
                  <Grid item xs="auto">
                    <div
                      className={`circle_img_holder ${
                        darkMode && "circle_img_holder_for_dark"
                      }`}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginBottom: "0px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M26.6942 8.78344C25.8432 9.15987 24.9449 9.39513 23.9993 9.5363C24.9449 8.97165 25.7013 8.07763 26.0323 6.99539C25.134 7.51298 24.1411 7.88941 23.0537 8.12468C22.2026 7.23066 20.9734 6.66602 19.6495 6.66602C17.0964 6.66602 15.0161 8.73638 15.0161 11.2773C15.0161 11.6537 15.0634 11.9831 15.158 12.3125C11.3283 12.1243 7.87693 10.2892 5.56023 7.46593C5.18199 8.17174 4.94559 8.9246 4.94559 9.77157C4.94559 11.3714 5.74934 12.783 7.02589 13.63C6.26942 13.5829 5.56023 13.3947 4.89831 13.0653V13.1124C4.89831 15.371 6.50582 17.2531 8.6334 17.6766C8.25516 17.7707 7.82965 17.8178 7.40413 17.8178C7.12045 17.8178 6.7895 17.7707 6.50582 17.7237C7.12045 19.5588 8.82252 20.9233 10.8555 20.9233C9.24803 22.1467 7.26229 22.8996 5.08743 22.8996C4.70919 22.8996 4.33096 22.8996 4 22.8525C6.0803 24.17 8.49156 24.9229 11.1392 24.9229C19.6968 24.9229 24.3775 17.8648 24.3775 11.7478C24.3775 11.5596 24.3775 11.3243 24.3775 11.1361C25.2758 10.5244 26.0796 9.72451 26.6942 8.78344Z"
                          fill="#00ACEE"
                        />
                      </svg>
                    </div>
                  </Grid>
                  <Grid item xs="auto">
                    <h4 className={`card_title fw500 ${darkMode && "white"}`}>
                      {translations.contactFollowUs.followUs}
                    </h4>
                  </Grid>
                </Grid>
              </div>
              <div
                className={`card8_style  ${darkMode && "card1_style_for_dark"}`}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  columnSpacing={2}
                >
                  <Grid item xs="auto">
                    <div
                      className={`circle_img_holder ${
                        darkMode && "circle_img_holder_for_dark"
                      }`}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginBottom: "0px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M9.82686 7.44553C9.82654 8.0938 9.57196 8.71539 9.11913 9.17356C8.6663 9.63173 8.05231 9.88894 7.41223 9.88862C6.77214 9.88829 6.1584 9.63046 5.70602 9.17183C5.25364 8.71321 4.99968 8.09136 5 7.44309C5.00032 6.79482 5.2549 6.17323 5.70773 5.71506C6.16056 5.25689 6.77456 4.99968 7.41464 5C8.05472 5.00032 8.66846 5.25816 9.12084 5.71679C9.57322 6.17541 9.82718 6.79726 9.82686 7.44553ZM9.89927 11.6986H5.0724V27H9.89927V11.6986ZM17.5257 11.6986H12.723V27H17.4774V18.9704C17.4774 14.4974 23.2335 14.0818 23.2335 18.9704V27H28V17.3083C28 9.76762 19.4806 10.0487 17.4774 13.7518L17.5257 11.6986Z"
                          fill="#0072B1"
                        />
                      </svg>
                    </div>
                  </Grid>
                  <Grid item xs="auto">
                    <h4 className={`card_title fw500 ${darkMode && "white"}`}>
                      {translations.contactFollowUs.letsConnect}
                    </h4>
                  </Grid>
                </Grid>
              </div>
              <div
                className={`card8_style  ${darkMode && "card1_style_for_dark"}`}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  columnSpacing={2}
                >
                  <Grid item xs="auto">
                    <div
                      className={`circle_img_holder ${
                        darkMode && "circle_img_holder_for_dark"
                      }`}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginBottom: "0px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M13.3337 19.9993L20.2537 15.9993L13.3337 11.9993V19.9993ZM28.747 9.55935C28.9203 10.186 29.0403 11.026 29.1203 12.0927C29.2137 13.1593 29.2537 14.0793 29.2537 14.8793L29.3337 15.9993C29.3337 18.9193 29.1203 21.066 28.747 22.4393C28.4137 23.6393 27.6403 24.4127 26.4403 24.746C25.8137 24.9193 24.667 25.0393 22.907 25.1193C21.1737 25.2127 19.587 25.2527 18.1203 25.2527L16.0003 25.3327C10.4137 25.3327 6.93366 25.1193 5.56033 24.746C4.36033 24.4127 3.58699 23.6393 3.25366 22.4393C3.08033 21.8127 2.96033 20.9727 2.88033 19.906C2.78699 18.8393 2.74699 17.9193 2.74699 17.1193L2.66699 15.9993C2.66699 13.0793 2.88033 10.9327 3.25366 9.55935C3.58699 8.35935 4.36033 7.58602 5.56033 7.25268C6.18699 7.07935 7.33366 6.95935 9.09366 6.87935C10.827 6.78602 12.4137 6.74602 13.8803 6.74602L16.0003 6.66602C21.587 6.66602 25.067 6.87935 26.4403 7.25268C27.6403 7.58602 28.4137 8.35935 28.747 9.55935Z"
                          fill="#CD201F"
                        />
                      </svg>
                    </div>
                  </Grid>
                  <Grid item xs="auto">
                    <h4 className={`card_title fw500 ${darkMode && "white"}`}>
                      {translations.contactFollowUs.subscribe}
                    </h4>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
