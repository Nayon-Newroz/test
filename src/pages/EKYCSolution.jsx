import React, { useEffect, useState } from "react";
// import "../App.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MagicWand from "../svg-icons/MagicWand";
import Pattern from "../svg-icons/Pattern";
import CurveLine from "../svg-icons/CurveLine";
import Plane from "../svg-icons/Plane";
import Star from "../svg-icons/Star";
import Cloud from "../svg-icons/Cloud";
import Triangle from "../svg-icons/Triangle";
import GlowBG from "../svg-icons/GlowBG";
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
import Circle2 from "../svg-icons/Circle2";
import Square2 from "../svg-icons/Square2";
import ThreeCircle from "../svg-icons/ThreeCircle";

const EKYCSolution = ({ translations, lang, darkMode }) => {
  const firstImage = "/images/KYC_ScanID.png";

  const [expanded, setExpanded] = useState("");
  const [activeImage, setActiveImage] = useState(firstImage);

  const handleChange = (panel, img) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setActiveImage(img);
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
          className="journey_holder upper_slide   "
        >
          <Grid item sm={12} md={4} className="hideForTabAndMobileViewOnly">
            <h3 className={`subtitle mb20 ${darkMode && "white"}`}>
              {translations.pageTitles.productDetailspageTitle}
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
                to={"/products"}
              >
                {translations.pageTitles.productspageTitle}
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
          <Cloud
            lang={lang}
            color={darkMode && "#10214B"}
            myClass="top_section_cloud1 hide_for_tab_and_smaller_view"
            // rtlClass="top_cloud1_for_rtl"
          />
          <Cloud
            lang={lang}
            color={darkMode && "#10214B"}
            myClass="top_section_cloud2 hide_for_tab_and_smaller_view"
            // rtlClass="top_cloud1_for_rtl"
          />
          <Cloud
            lang={lang}
            color={darkMode && "#10214B"}
            myClass="top_section_cloud3 hide_for_tab_and_smaller_view"
            // rtlClass="top_cloud1_for_rtl"
          />
          <Triangle
            lang={lang}
            color={darkMode ? "#10214B" : "white"}
            myClass="top_section_triangle1 hide_for_tab_and_smaller_view"
            // rtlClass="top_triangle2_for_rtl"
          />
          <GlowBG
            lang={lang}
            color={darkMode ? "#005DB2" : "#113CFC"}
            myClass="section_top_GlowBG1"
            // rtlClass="top_GlowBG1_for_rtl"
          />
          <GlowBG
            lang={lang}
            color={darkMode && "#005DB2"}
            myClass="section_top_GlowBG2"
            // rtlClass="top_GlowBG2_for_rtl"
          />
          <div className="upper_slide">
            <Grid container alignItems="center">
              <Grid
                item
                sm={12}
                md={6}
                lg={6}
                className="mobile_view_center right_order_maintain"
              >
                <h2 className={`title_large2 ${darkMode && "lightBlue"}`}>
                  {translations.homeProduct.card4.info.title}
                </h2>
                <p className="text_body_small_regular fw400 mb24">
                  {translations.homeProduct.card4.info.subtitle}
                </p>

                <p className={`text_body_medium  mb6 ${darkMode && "white"}`}>
                  {translations.homeProduct.card4.info.details}
                </p>
              </Grid>
              <Grid item sm={12} md={6} lg={6} className="left_order_maintain">
                <img
                  src="/images/kyc.png"
                  alt="our company"
                  className={`right_image_style ${
                    lang === "kr" && "left_image_style"
                  }`}
                />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="section_style">
          <GlowBG
            lang={lang}
            color={darkMode ? "#005DB2" : "#113CFC"}
            myClass="section_top_GlowBG2"
            // rtlClass="top_GlowBG1_for_rtl"
          />
          <GlowBG
            lang={lang}
            color={darkMode && "#005DB2"}
            myClass="section_top_GlowBG1"
            // rtlClass="top_GlowBG2_for_rtl"
          />
          <Triangle
            lang={lang}
            color={darkMode ? "#FF7539" : "#FFC93C"}
            myClass="triangle3 hide_for_tab_and_smaller_view"
            rtlClass="top_triangle1_for_rtl"
          />
          <Circle2
            lang={lang}
            color={darkMode ? "#10214B" : "#E3EEFF"}
            myClass="newcircle3 hide_for_tab_and_smaller_view"
            // rtlClass="top_triangle1_for_rtl"
          />
          <div className="upper_slide">
            <h4
              className={`title_semibold_medium center mb30 ${
                darkMode ? "white" : "black"
              }`}
            >
              {translations.homeProduct.card4.info.featuresTitle}
            </h4>
            <div className="card_holder">
              {translations.homeProduct.card4.info?.features?.map((item, i) => (
                <div
                  key={i}
                  className={`card9_style  ${
                    darkMode && "card1_style_for_dark"
                  }`}
                >
                  <Grid
                    container
                    alignItems="center"
                    // justifyContent="center"
                    columnSpacing={1}
                  >
                    <Grid item xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="65"
                        viewBox="0 0 64 65"
                        fill="none"
                      >
                        <path
                          d="M25.1816 31.9163L29.6176 36.7728L38.818 27.2273"
                          stroke="#FF7539"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="32"
                          cy="32.0001"
                          r="14"
                          stroke="#FF7539"
                          stroke-width="2"
                        />
                      </svg>
                    </Grid>
                    <Grid item xs="auto">
                      <h4
                        className={`text_body_small_regular fw400 mb8 ${
                          darkMode && "white"
                        }`}
                        style={{ color: darkMode ? "#fff" : "#2b2b2b" }}
                      >
                        {item}
                      </h4>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section_style">
          <GlowBG
            lang={lang}
            color={darkMode ? "#005DB2" : "#113CFC"}
            myClass="section_top_GlowBG1"
            // rtlClass="top_GlowBG1_for_rtl"
          />
          <GlowBG
            lang={lang}
            color={darkMode && "#005DB2"}
            myClass="section_top_GlowBG2"
            // rtlClass="top_GlowBG2_for_rtl"
          />
          <div className="upper_slide">
            <Square2
              lang={lang}
              color={darkMode ? "#10214B" : "#ABCCFE"}
              myClass="square3 hide_for_tab_and_smaller_view"
              // rtlClass="top_triangle1_for_rtl"
            />
            <ThreeCircle
              lang={lang}
              color={darkMode ? "#FFC93C" : "#FFC93C"}
              myClass="three_square3 hide_for_tab_and_smaller_view"
              // rtlClass="top_triangle1_for_rtl"
            />
            <div
              className={`card9_style card_padding2 mb30 ${
                darkMode && "card1_style_for_dark"
              }`}
            >
              <h4
                className={`title_semibold_medium ${
                  darkMode ? "white" : "black"
                }`}
              >
                {translations.homeProduct.card4.info.problemStatementsTitle}
              </h4>
              <ol className={`ol_Style fw400 ${darkMode && "ol_Style_dark"}`}>
                {translations.homeProduct.card4.info?.problemStatements?.map(
                  (item, i) => (
                    <li key={i}>
                      <b>{item.textBold}&nbsp;</b>
                      {item.text}
                    </li>
                  )
                )}
              </ol>
            </div>
            <div
              className={`card9_style card_padding2 ${
                darkMode && "card1_style_for_dark"
              }`}
            >
              <p
                className={`title_semibold_medium ${
                  darkMode ? "white" : "black"
                }`}
              >
                {translations.homeProduct.card4.info.solutionsTitle}
              </p>
              <ol className={`ol_Style fw400 ${darkMode && "ol_Style_dark"}`}>
                {translations.homeProduct.card4.info?.solutions?.map(
                  (item, i) => (
                    <li key={i}>
                      <b>{item.textBold}&nbsp;</b>
                      {item.text}
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
        </div>

        <div className="section_style">
          <GlowBG
            lang={lang}
            color={darkMode ? "#005DB2" : "#113CFC"}
            myClass="section_top_GlowBG2"
            // rtlClass="top_GlowBG1_for_rtl"
          />
          <GlowBG
            lang={lang}
            color={darkMode && "#005DB2"}
            myClass="section_top_GlowBG1"
            // rtlClass="top_GlowBG2_for_rtl"
          />
          <div className="upper_slide">
            <Square2
              lang={lang}
              color={darkMode ? "#10214B" : "#ABCCFE"}
              myClass="square4 hide_for_tab_and_smaller_view"
              // rtlClass="top_triangle1_for_rtl"
            />
            <Circle2
              lang={lang}
              color={darkMode ? "#10214B" : "#E3EEFF"}
              myClass="newcircle4 hide_for_tab_and_smaller_view"
              // rtlClass="top_triangle1_for_rtl"
            />
            <h4
              className={`title_semibold_medium mb24 ${
                darkMode ? "white" : "black"
              }`}
            >
              {translations.homeProduct.card4.info.productScreensTitle}
            </h4>
            <Grid container alignItems="center" spacing={3}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className="mobile_view_center right_order_maintain"
              >
                {translations.homeProduct.card4.info?.productScreens?.map(
                  (item, i) => (
                    <Accordion
                      key={i}
                      expanded={expanded === item.title}
                      onChange={handleChange(item.title, item.img)}
                      className={`accrodian_style mb16 ${
                        darkMode && "accrodian_style_dark"
                      }`}
                    >
                      <AccordionSummary
                        expandIcon={
                          expanded === item.title ? <RemoveIcon /> : <AddIcon />
                        }
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <h4
                          // sx={{ flexShrink: 0 }}

                          className={`title_semibold_small fw400 ${
                            darkMode && "white"
                          } ${expanded === item.title && "orange"}`}
                        >
                          {item.title}
                        </h4>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p
                          className={`text_body_small_regular fw400 mb8 ${
                            darkMode && "white"
                          }`}
                          style={{ color: darkMode ? "#fff" : "#525252" }}
                        >
                          {item.details}
                        </p>
                      </AccordionDetails>
                    </Accordion>
                  )
                )}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className="left_order_maintain"
              >
                <img
                  src={activeImage}
                  alt="product"
                  className="product_Screens_image_style"

                  // className={`right_image_style ${
                  //   lang === "kr" && "left_image_style"
                  // }`}
                />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="section_style">
          <div className="upper_slide">
            <Triangle
              lang={lang}
              color={darkMode ? "#FF7539" : "#FFC93C"}
              myClass="triangle4 hide_for_tab_and_smaller_view"
              rtlClass="top_triangle1_for_rtl"
            />
            <Grid container alignItems="center" spacing={3}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={8}
                className="mobile_view_center"
              >
                <h4
                  className={`title_semibold_medium mb16 ${
                    darkMode ? "white" : "deepBlue"
                  }`}
                >
                  {translations.homeProduct.card4.info.technologiesUsedTitle}
                </h4>

                <Grid
                  container
                  justifyContent={{
                    xs: "center",
                    sm: lang === "kr" ? "right" : "left",
                  }}
                  style={{ gap: "14px" }}
                >
                  {translations.homeProduct.card4.info?.technologies?.map(
                    (item, i) => (
                      <div
                        key={i}
                        className={`chip_style ${
                          darkMode && "chip_style_dark"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className="mobile_view_center"
              >
                <h4
                  className={`title_semibold_medium mb16 ${
                    darkMode ? "white" : "deepBlue"
                  }`}
                >
                  {translations.homeProduct.card4.info.availableOnTitle}
                </h4>
                <img src="/images/play_store.png" alt="play store" />{" "}
                &nbsp;&nbsp;
                <img src="/images/app_store.png" alt="app store" />
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EKYCSolution;
