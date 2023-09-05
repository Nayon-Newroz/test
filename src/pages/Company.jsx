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
const Company = ({ translations, lang, darkMode }) => {
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
              {translations.pageTitles.companypageTitle}
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
                {translations.pageTitles.companypageTitle}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="section_style">
          <Grid container alignItems="center">
            <Grid
              item
              sm={12}
              md={6}
              lg={6}
              className="mobile_view_center right_order_maintain"
            >
              <h4
                style={{ color: "#D23F00" }}
                className={`title_semibold_medium mb10 orange`}
              >
                {translations.companyTopSection.title}
              </h4>
              <p className={`text_body_medium  mb6 ${darkMode && "white"}`}>
                {translations.companyTopSection.details}
              </p>
            </Grid>
            <Grid item sm={12} md={6} lg={6} className="left_order_maintain">
              <img
                src={
                  darkMode ? "/images/Top_Dark.png" : "/images/Top_Light.png"
                }
                alt="our company"
                className={`right_image_style ${
                  lang === "kr" && "left_image_style"
                }`}
              />
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <Grid container alignItems="center">
            <Grid item sm={12} md={6} lg={6}>
              <img
                src={
                  darkMode
                    ? "/images/Together_We_Are_Dark.png"
                    : "/images/Together_We_Are_Light.png"
                }
                alt="our company"
                className={`left_image_style ${
                  lang === "kr" && "right_image_style"
                }`}
              />
            </Grid>
            <Grid item sm={12} md={6} lg={6} className="mobile_view_center">
              <h3 className={`title_large2 mb5 ${darkMode && "lightBlue"}`}>
                {translations.companyWhoYouAreSection.title}
              </h3>
              <h4 className="text_body_small_regular fw400 mb8">
                {translations.companyWhoYouAreSection.subtitle}
              </h4>
              <p
                className={`text_body_medium fw400 mb8 ${darkMode && "white"}`}
              >
                {translations.companyWhoYouAreSection.details1}
              </p>
              <p
                className={`text_body_medium fw400 mb8 ${darkMode && "white"}`}
              >
                {translations.companyWhoYouAreSection.details2}
              </p>
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <Grid container alignItems="center" spacing={4}>
            <Grid item md={12} lg={4} className="mobile_view_center">
              <h3 className={`title_large2 mb5 ${darkMode && "lightBlue"}`}>
                {translations.companyWhatWeBelieve.title}
              </h3>
              <h4 className="text_body_small_regular fw400 mb8">
                {translations.companyWhatWeBelieve.subtitle}
              </h4>
              <p
                className={`text_body_medium fw400 mb60 ${darkMode && "white"}`}
              >
                {translations.companyWhatWeBelieve.details}
              </p>

              <Button
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
              </Button>
            </Grid>
            <Grid item md={12} lg={8}>
              <div className="card_holder">
                <div
                  className={`card3_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  <div>
                    <img
                      src={
                        darkMode
                          ? "/images/Customer_Commitment_Dark.png"
                          : "/images/Customer_Commitment_Light.png"
                      }
                      alt="Customer Commitment"
                      className={`card3_img ${
                        lang === "kr" && "card3_img_rtl"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.companyWhatWeBelieve.card1.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.companyWhatWeBelieve.card1.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card3_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  <div>
                    <img
                      src={
                        darkMode
                          ? "/images/Quality_Dark.png"
                          : "/images/Quality_Light.png"
                      }
                      alt="Customer Commitment"
                      className={`card3_img ${
                        lang === "kr" && "card3_img_rtl"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.companyWhatWeBelieve.card2.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.companyWhatWeBelieve.card2.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card3_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  <div>
                    <img
                      src={
                        darkMode
                          ? "/images/Teamwork_Dark.png"
                          : "/images/Teamwork_Light.png"
                      }
                      alt="Customer Commitment"
                      className={`card3_img ${
                        lang === "kr" && "card3_img_rtl"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.companyWhatWeBelieve.card3.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.companyWhatWeBelieve.card3.details}
                    </p>
                  </div>
                </div>
                <div
                  className={`card3_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  <div>
                    <img
                      src={
                        darkMode
                          ? "/images/Integrity_Dark.png"
                          : "/images/Integrity_light.png"
                      }
                      alt="Customer Commitment"
                      className={`card3_img ${
                        lang === "kr" && "card3_img_rtl"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.companyWhatWeBelieve.card4.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.companyWhatWeBelieve.card4.details}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <Grid container alignItems="center">
            <Grid item sm={12} md={6} lg={6}>
              <img
                src={
                  darkMode ? "/images/CEO_Dark.png" : "/images/CEO_Light.png"
                }
                alt="ceo"
                className={`left_image_style ${
                  lang === "kr" && "right_image_style"
                }`}
              />
            </Grid>
            <Grid item sm={12} md={6} lg={6} className="mobile_view_center">
              <h3 className={`title_large2 mb5 ${darkMode && "lightBlue"}`}>
                <CommaIcon
                  lang={lang}
                  color={darkMode && "#FF7539"}
                  myClass="comma_left"
                  rtlClass="comma_left_for_rtl"
                />
                {translations.companyCEOSection.title}
              </h3>
              <h4 className="text_body_small_regular fw400 mb8">
                {translations.companyCEOSection.subtitle}
              </h4>
              <p
                className={`text_body_medium fw400 mb8 ${darkMode && "white"}`}
              >
                {translations.companyCEOSection.details1}
              </p>
              <p
                className={`text_body_medium fw400 mb8 ${darkMode && "white"}`}
              >
                {translations.companyCEOSection.details2}
              </p>
              <p
                className={`text_body_medium fw400 mb8 ${darkMode && "white"}`}
              >
                {translations.companyCEOSection.details3}
                <CommaIcon
                  lang={lang}
                  color={darkMode && "#FF7539"}
                  myClass="comma_right"
                  rtlClass="comma_right_for_rtl"
                />
              </p>
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <div className="upper_slide">
            <h2
              className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}
            >
              {translations.compantBrainBehindNewrozSection.title}
            </h2>
            <p className="text_body_small_regular fw400 center mb50">
              {translations.compantBrainBehindNewrozSection.subtitle}
            </p>

            <img
              src={
                darkMode ? "/images/Brain_Dark.png" : "/images/Brain_Light.png"
              }
              alt="brain behind newroz"
              width="100%"
            />
          </div>
        </div>
        <div className="section_style">
          <div className="upper_slide">
            <h2
              className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}
            >
              {translations.compantRoadmapSection.title}
            </h2>
            <p className="text_body_small_regular fw400 center mb50">
              {translations.compantRoadmapSection.subtitle}
            </p>

            <Grid container justifyContent="center">
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <div
                  className={`card4_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  <img src="/images/link.png" className="join_style" />
                  <div
                    className={`card4_text_holder orange  ${
                      darkMode && "card3_style_for_dark"
                    } `}
                  >
                    {translations.compantRoadmapSection.card1.year}
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.compantRoadmapSection.card1.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.compantRoadmapSection.card1.details}
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <div
                  className={`card4_style card2_margin ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  <img src="/images/link.png" className="join_style" />
                  <div
                    className={`card4_text_holder deepBlue  ${
                      darkMode && "card3_style_for_dark lightBlue"
                    } `}
                  >
                    {translations.compantRoadmapSection.card2.year}
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.compantRoadmapSection.card2.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.compantRoadmapSection.card2.details}
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <div
                  className={`card4_style card3_margin ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  <img src="/images/link.png" className="join_style" />
                  <div
                    className={`card4_text_holder orange  ${
                      darkMode && "card3_style_for_dark"
                    } `}
                  >
                    {translations.compantRoadmapSection.card3.year}
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.compantRoadmapSection.card3.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.compantRoadmapSection.card3.details}
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <div
                  className={`card4_style card4_margin ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  <div
                    className={`card4_text_holder deepBlue  ${
                      darkMode && "card3_style_for_dark lightBlue"
                    } `}
                  >
                    {translations.compantRoadmapSection.card4.year}
                  </div>
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 ${
                        darkMode && "white"
                      }`}
                    >
                      {translations.compantRoadmapSection.card4.title}
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {translations.compantRoadmapSection.card4.details}
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="section_style">
          <div className="upper_slide">
            <h2
              className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}
            >
              {translations.companyOurMissionAndOurVisionSection.title}
            </h2>
            <p className="text_body_small_regular fw400 center mb50">
              {translations.companyOurMissionAndOurVisionSection.subtitle}
            </p>

            <Grid container alignItems="center">
              <Grid item sm={12} md={6} lg={6}>
                <img
                  src={
                    darkMode
                      ? "/images/Target_Dark.png"
                      : "/images/Target_Light.png"
                  }
                  alt="ceo"
                  className={`left_image_style ${
                    lang === "kr" && "right_image_style"
                  }`}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={6} className="mobile_view_center">
                <div
                  className={`card5_style mb24 ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  <span className={`card5_text_holder ${darkMode && "white"} `}>
                    {
                      translations.companyOurMissionAndOurVisionSection.card1
                        .title
                    }
                  </span>
                  <p
                    className={`text_body_medium fw400 mt10 ${
                      darkMode && "white"
                    }`}
                  >
                    {
                      translations.companyOurMissionAndOurVisionSection.card1
                        .details
                    }
                  </p>
                </div>
                <div
                  className={`card5_style ${
                    darkMode && "card3_style_for_dark"
                  } `}
                >
                  <span
                    className={`card5_text_holder ${darkMode && "white"} `}
                    style={{
                      border: darkMode
                        ? "1px solid #113CFC"
                        : "1px solid #1597E5",
                    }}
                  >
                    {
                      translations.companyOurMissionAndOurVisionSection.card2
                        .title
                    }
                  </span>
                  <p
                    className={`text_body_medium fw400 mt10 ${
                      darkMode && "white"
                    }`}
                  >
                    {
                      translations.companyOurMissionAndOurVisionSection.card2
                        .details
                    }
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="section_style">
          <div className="upper_slide">
            <h2
              className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}
            >
              {translations.companyAtAGlanceSection.title}
            </h2>
            <p className="text_body_small_regular fw400 center mb50">
              {translations.companyAtAGlanceSection.subtitle}
            </p>

            <div className="card_holder">
              <div
                className={`card6_style  ${
                  darkMode && "card3_style_for_dark"
                } `}
              >
                <img
                  src="/images/world.png"
                  alt="world icon"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <img
                  src="/images/world.png"
                  alt="world icon"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "rotate(180deg)",
                  }}
                />
                <div
                  className={`circle_img_holder ${
                    darkMode && "circle_img_holder_for_dark"
                  }`}
                >
                  <img src="/images/Team_members.svg" alt="Team members" />
                </div>
                <p
                  className={`card_no center deepBlue ${
                    darkMode && "lightBlue"
                  }`}
                >
                  {" "}
                  {translations.companyAtAGlanceSection.card1.number}
                </p>
                <h4
                  className={`text_body_medium center fw400  ${
                    darkMode && "white"
                  }`}
                >
                  {translations.companyAtAGlanceSection.card1.title}
                </h4>
              </div>
              <div
                className={`card6_style  ${
                  darkMode && "card3_style_for_dark"
                } `}
              >
                <img
                  src="/images/world.png"
                  alt="world icon"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <img
                  src="/images/world.png"
                  alt="world icon"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "rotate(180deg)",
                  }}
                />
                <div
                  className={`circle_img_holder ${
                    darkMode && "circle_img_holder_for_dark"
                  }`}
                >
                  <img
                    src="/images/Completed_projects.svg"
                    alt="Completed projects"
                  />
                </div>
                <p
                  className={`card_no center deepBlue ${
                    darkMode && "lightBlue"
                  }`}
                >
                  {" "}
                  {translations.companyAtAGlanceSection.card2.number}
                </p>
                <h4
                  className={`text_body_medium center fw400  ${
                    darkMode && "white"
                  }`}
                >
                  {translations.companyAtAGlanceSection.card2.title}
                </h4>
              </div>
              <div
                className={`card6_style  ${
                  darkMode && "card3_style_for_dark"
                } `}
              >
                <img
                  src="/images/world.png"
                  alt="world icon"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <img
                  src="/images/world.png"
                  alt="world icon"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "rotate(180deg)",
                  }}
                />
                <div
                  className={`circle_img_holder ${
                    darkMode && "circle_img_holder_for_dark"
                  }`}
                >
                  <img
                    src="/images/Countries_served.svg"
                    alt="Countries served"
                  />
                </div>
                <p
                  className={`card_no center deepBlue ${
                    darkMode && "lightBlue"
                  }`}
                >
                  {" "}
                  {translations.companyAtAGlanceSection.card3.number}
                </p>
                <h4
                  className={`text_body_medium center fw400  ${
                    darkMode && "white"
                  }`}
                >
                  {translations.companyAtAGlanceSection.card3.title}
                </h4>
              </div>
              <div
                className={`card6_style  ${
                  darkMode && "card3_style_for_dark"
                } `}
              >
                <img
                  src="/images/world.png"
                  alt="world icon"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <img
                  src="/images/world.png"
                  alt="world icon"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "rotate(180deg)",
                  }}
                />
                <div
                  className={`circle_img_holder ${
                    darkMode && "circle_img_holder_for_dark"
                  }`}
                >
                  <img src="/images/Clients.svg" alt="Clients" />
                </div>
                <p
                  className={`card_no center deepBlue ${
                    darkMode && "lightBlue"
                  }`}
                >
                  {" "}
                  {translations.companyAtAGlanceSection.card4.number}
                </p>
                <h4
                  className={`text_body_medium center fw400  ${
                    darkMode && "white"
                  }`}
                >
                  {translations.companyAtAGlanceSection.card4.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div className="upper_slide">
            <h2
              className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}
            >
              {translations.companyTechnologiesWeUse.title}
            </h2>
            <p className="text_body_small_regular fw400 center mb8">
              {translations.companyTechnologiesWeUse.subtitle}
            </p>
            <div className="detail_text_container">
              <p
                className={`text_body_small_regular fw400 center mb50  black2 ${
                  darkMode && "white"
                }`}
              >
                {translations.companyTechnologiesWeUse.details}
              </p>
            </div>

            <Grid
              container
              justifyContent={{ xs: "center", sm: "center" }}
              className="mb45"
            >
              <Grid
                item
                className={
                  darkMode
                    ? `technology_button white ${
                        active === "All" && "technology_button_dark_active"
                      }`
                    : `technology_button ${
                        active === "All" && "technology_button_active"
                      }`
                }
                onClick={() => handleTech("All")}
              >
                {translations.companyTechnologiesWeUse.all}
              </Grid>
              <Grid
                item
                className={
                  darkMode
                    ? `technology_button white ${
                        active === "Backend" && "technology_button_dark_active"
                      }`
                    : `technology_button ${
                        active === "Backend" && "technology_button_active"
                      }`
                }
                onClick={() => handleTech("Backend")}
              >
                {translations.companyTechnologiesWeUse.backend}
              </Grid>
              <Grid
                item
                className={
                  darkMode
                    ? `technology_button white ${
                        active === "Frontend" && "technology_button_dark_active"
                      }`
                    : `technology_button ${
                        active === "Frontend" && "technology_button_active"
                      }`
                }
                onClick={() => handleTech("Frontend")}
              >
                {translations.companyTechnologiesWeUse.frontend}
              </Grid>
              <Grid
                item
                className={
                  darkMode
                    ? `technology_button white ${
                        active === "Database" && "technology_button_dark_active"
                      }`
                    : `technology_button ${
                        active === "Database" && "technology_button_active"
                      }`
                }
                onClick={() => handleTech("Database")}
              >
                {translations.companyTechnologiesWeUse.database}
              </Grid>
              <Grid
                item
                className={
                  darkMode
                    ? `technology_button white ${
                        active === "Cloud" && "technology_button_dark_active"
                      }`
                    : `technology_button ${
                        active === "Cloud" && "technology_button_active"
                      }`
                }
                onClick={() => handleTech("Cloud")}
              >
                {translations.companyTechnologiesWeUse.cloud}
              </Grid>
              <Grid
                item
                className={
                  darkMode
                    ? `technology_button white ${
                        active === "Testing" && "technology_button_dark_active"
                      }`
                    : `technology_button ${
                        active === "Testing" && "technology_button_active"
                      }`
                }
                onClick={() => handleTech("Testing")}
              >
                {translations.companyTechnologiesWeUse.testing}
              </Grid>
              <Grid
                item
                className={
                  darkMode
                    ? `technology_button white ${
                        active === "Devops" && "technology_button_dark_active"
                      }`
                    : `technology_button ${
                        active === "Devops" && "technology_button_active"
                      }`
                }
                onClick={() => handleTech("Devops")}
              >
                {translations.companyTechnologiesWeUse.devops}
              </Grid>
              <Grid
                item
                className={
                  darkMode
                    ? `technology_button white ${
                        active === "Design" && "technology_button_dark_active"
                      }`
                    : `technology_button ${
                        active === "Design" && "technology_button_active"
                      }`
                }
                onClick={() => handleTech("Design")}
              >
                {translations.companyTechnologiesWeUse.design}
              </Grid>
              <Grid
                item
                className={
                  darkMode
                    ? `technology_button white ${
                        active === "Mobile App" &&
                        "technology_button_dark_active"
                      }`
                    : `technology_button ${
                        active === "Mobile App" && "technology_button_active"
                      }`
                }
                onClick={() => handleTech("Mobile App")}
              >
                {translations.companyTechnologiesWeUse.mobileApp}
              </Grid>
            </Grid>
            {/* <div style={{ height: "500px", width: "500px" }}>
              <div class="octagon">
                <div class="inner">125463</div>
              </div>
            </div> */}
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              {techList.map((item, i) => (
                <Grid item xs={6} sm={4} md={2}>
                  <div
                    className={`card5_style  ${
                      darkMode && "card3_style_for_dark"
                    } `}
                    style={{
                      // background: "#fff",
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="mb16"
                        style={{ display: "block", margin: "auto" }}
                      />
                      <h4
                        className={`text_body_medium center fw400  ${
                          darkMode && "white"
                        }`}
                      >
                        {/* {translations.companyAtAGlanceSection.card1.title} */}
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Company;
