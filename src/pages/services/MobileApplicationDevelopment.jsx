import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Cloud from "../../svg-icons/Cloud";
import Triangle from "../../svg-icons/Triangle";
import GlowBG from "../../svg-icons/GlowBG";
import { Link } from "react-router-dom";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MobileApplicationDevelopment = ({ translations, lang, darkMode }) => {
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
              {translations.pageTitles.serviceDetails}
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
                to={"/services"}
              >
                {translations.pageTitles.servicespageTitle}
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
          {/* <Cloud
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
          /> */}
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
            <h2
              className={`title_large2 mb8 center ${darkMode && "lightBlue"}`}
            >
              {translations.homeService.card1.title}
            </h2>
            <p
              className="text_body_small_regular fw400 center mb8"
              style={{ textTransform: "uppercase" }}
            >
              {translations.homeService.card1.subtitle}
            </p>
            <div className="detail_text_container">
              <p
                className={`text_body_small_regular fw400 center ${
                  darkMode ? "white" : "black2"
                }`}
              >
                {translations.homeService.card1.details}
              </p>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div className="upper_slide">
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
              <h3
                className={`title_semibold_medium mb30 center ${
                  darkMode ? "white" : "black"
                }`}
              >
                {
                  translations.homeService.card1.servicesDetails.cardSection1
                    .title
                }
              </h3>
              <div className="card_holder mb45">
                <div
                  className={`card1_style  ${
                    darkMode && "card1_style_for_dark"
                  }`}
                  style={{ padding: "20px 30px" }}
                >
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 deepBlue ${
                        darkMode ? "lightBlue" : "deepBlue"
                      }`}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card1.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card1.details
                      }
                    </p>
                  </div>
                </div>
                <div
                  className={`card1_style  ${
                    darkMode && "card1_style_for_dark"
                  }`}
                  style={{ padding: "20px 30px" }}
                >
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 deepBlue ${
                        darkMode ? "lightBlue" : "deepBlue"
                      }`}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card2.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card2.details
                      }
                    </p>
                  </div>
                </div>
                <div
                  className={`card1_style  ${
                    darkMode && "card1_style_for_dark"
                  }`}
                  style={{ padding: "20px 30px" }}
                >
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 deepBlue ${
                        darkMode ? "lightBlue" : "deepBlue"
                      }`}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card3.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card3.details
                      }
                    </p>
                  </div>
                </div>
                <div
                  className={`card1_style  ${
                    darkMode && "card1_style_for_dark"
                  }`}
                  style={{ padding: "20px 30px" }}
                >
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 deepBlue ${
                        darkMode ? "lightBlue" : "deepBlue"
                      }`}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card4.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card4.details
                      }
                    </p>
                  </div>
                </div>
                <div
                  className={`card1_style  ${
                    darkMode && "card1_style_for_dark"
                  }`}
                  style={{ padding: "20px 30px" }}
                >
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 deepBlue ${
                        darkMode ? "lightBlue" : "deepBlue"
                      }`}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card5.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card5.details
                      }
                    </p>
                  </div>
                </div>
                <div
                  className={`card1_style  ${
                    darkMode && "card1_style_for_dark"
                  }`}
                  style={{ padding: "20px 30px" }}
                >
                  <div>
                    <h4
                      className={`text_body_medium fw500 mb8 deepBlue ${
                        darkMode ? "lightBlue" : "deepBlue"
                      }`}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card6.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card1.servicesDetails
                          .cardSection1.card6.details
                      }
                    </p>
                  </div>
                </div>
              </div>
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
          <div
            className={`card_triangle_holder ${
              lang === "kr" && "card_triangle_holder_for_rtl"
            }`}
          >
            <Triangle
              lang={lang}
              color={darkMode ? "#4790E4" : "#ABCCFE"}
              myClass="card_triangle hide_for_tab_and_smaller_view"
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
            />
          </div> */}
          <div className="upper_slide">
            <h3
              className={`title_semibold_medium mb30 center ${
                darkMode ? "white" : "black"
              }`}
            >
              {
                translations.homeService.card1.servicesDetails.cardSection2
                  .title
              }
            </h3>
            <Grid
              container
              alignItems="center"
              spacing={{ xs: 2, sm: 2, md: 0 }}
            >
              <Grid item xs={12} sm={6} md={3}>
                <div
                  className={`card6_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                  style={{ padding: "24px 30px" }}
                >
                  <div
                    className={`circle_img_holder ${
                      darkMode && "circle_img_holder_for_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="none"
                    >
                      <path
                        d="M1.76026 36.2335H16.2075M24.2338 36.2335H33.1049C36.0528 36.2335 38.4424 33.8438 38.4424 30.896V30.896M32 21.4918H33.1049C36.0528 21.4918 38.4424 23.8815 38.4424 26.8293V26.8293M23.864 21.4918H12M7.91846 14.3751H4.91528C2.95006 14.3751 1.35693 15.9682 1.35693 17.9335V17.9335C1.35693 19.8987 2.95006 21.4918 4.91527 21.4918H6.9837M16.2075 14.3751H28.4677V9.8001M28.4677 9.8001V1.66675H41.0001L36.9079 5.73343L41.0001 9.8001H36M28.4677 9.8001H31.6008"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <rect
                        x="1.3335"
                        y="31.1333"
                        width="15.3918"
                        height="10.2"
                        rx="1"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                      <path
                        d="M6.44873 28.1204C6.44873 27.5681 6.89644 27.1204 7.44873 27.1204H10.6101C11.1624 27.1204 11.6101 27.5681 11.6101 28.1204V31.2204H6.44873V28.1204Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                      <path
                        d="M24.0689 36.3134C24.0689 37.159 23.3774 37.8551 22.5112 37.8551C21.6451 37.8551 20.9536 37.159 20.9536 36.3134C20.9536 35.4678 21.6451 34.7717 22.5112 34.7717C23.3774 34.7717 24.0689 35.4678 24.0689 36.3134Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                      <path
                        d="M27.4673 21.4919C27.4673 22.3374 26.7758 23.0335 25.9097 23.0335C25.0435 23.0335 24.3521 22.3374 24.3521 21.4919C24.3521 20.6463 25.0435 19.9502 25.9097 19.9502C26.7758 19.9502 27.4673 20.6463 27.4673 21.4919Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                      <path
                        d="M40 28.8627C40 29.7083 39.3085 30.4044 38.4424 30.4044C37.5762 30.4044 36.8848 29.7083 36.8848 28.8627C36.8848 28.0172 37.5762 27.321 38.4424 27.321C39.3085 27.321 40 28.0172 40 28.8627Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                      <path
                        d="M11.5498 14.3749C11.5498 15.2205 10.8583 15.9166 9.99219 15.9166C9.12603 15.9166 8.43457 15.2205 8.43457 14.3749C8.43457 13.5294 9.12603 12.8333 9.99219 12.8333C10.8583 12.8333 11.5498 13.5294 11.5498 14.3749Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                      />
                    </svg>
                  </div>

                  <h4
                    className={`text_body_medium fw500 center   ${
                      darkMode && "white"
                    }`}
                  >
                    {
                      translations.homeService.card1.servicesDetails
                        .cardSection2.card1.title
                    }
                  </h4>
                </div>
              </Grid>
              <Grid item md={1.5} className="hideForTabViewOnly">
                <img src="/images/Arrow.png" alt="arrow icon" width="100%" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div
                  className={`card6_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                  style={{ padding: "24px 30px" }}
                >
                  <div
                    className={`circle_img_holder ${
                      darkMode && "circle_img_holder_for_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="30"
                      viewBox="0 0 36 30"
                      fill="none"
                    >
                      <path
                        d="M1.0952 27.7755L11.4448 17.3205L17.0379 22.6755L23.8736 16.7L27.6816 20.4128M35.0002 3.94991C35.0002 3.27361 34.7315 2.625 34.2533 2.14678C33.7751 1.66856 33.1265 1.3999 32.4501 1.3999H3.55001C2.87371 1.3999 2.2251 1.66856 1.74688 2.14678C1.26866 2.625 1 3.27361 1 3.94991V11.5999H35.0002V3.94991Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M35.0002 9.90002V26.0501C35.0002 26.7264 34.7315 27.375 34.2533 27.8532C33.7751 28.3314 33.1265 28.6001 32.4501 28.6001H7.80003M13.8453 6.5H29.1453M7.04353 6.5H8.74354M1 9.90002V17.5501"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <h4
                    className={`text_body_medium fw500 center   ${
                      darkMode && "white"
                    }`}
                  >
                    {
                      translations.homeService.card1.servicesDetails
                        .cardSection2.card2.title
                    }
                  </h4>
                </div>
              </Grid>
              <Grid item md={1.5} className="hideForTabViewOnly">
                <img src="/images/Arrow.png" alt="arrow icon" width="100%" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div
                  className={`card6_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                  style={{ padding: "24px 30px" }}
                >
                  <div
                    className={`circle_img_holder ${
                      darkMode && "circle_img_holder_for_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M11.8414 5.2381L9.15898 2.51417C7.65609 0.988012 5.23614 0.934614 3.66939 2.39304C2.00332 3.94392 1.94665 6.59237 3.54481 8.21528L19.6524 24.5723M19.6524 24.5723L24.7784 19.3669M19.6524 24.5723C19.4083 26.0595 20.3359 29.4802 25.9989 31.2649M24.7784 19.3669L20.0981 14.1616M24.7784 19.3669C25.9175 19.3669 28.4886 19.8131 29.6603 21.5978C30.8319 23.3825 32.2639 29.9429 32.8335 33L30.1485 32.2564M20.0981 14.1616L14.5264 7.96471M20.0981 14.1616L16.66 17.5249M25.2666 14.6573L30.3919 9.14644C32.1593 7.24615 32.1173 4.26294 30.2972 2.41468C28.4559 0.544884 25.4763 0.526207 23.6125 2.37278L16.9674 8.95621M7.44767 18.6233L4.27444 22.0935L1.8335 31.2649L10.6209 29.2819L15.0146 25.068"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <h4
                    className={`text_body_medium fw500 center   ${
                      darkMode && "white"
                    }`}
                  >
                    {
                      translations.homeService.card1.servicesDetails
                        .cardSection2.card3.title
                    }
                  </h4>
                </div>
              </Grid>
              <Grid item md={12} className="hideForTabViewOnly">
                <img
                  src="/images/Curve_Arrow.png"
                  alt="arrow icon"
                  width="77%"
                  style={{ display: "block", margin: "auto" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div
                  className={`card6_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                  style={{ padding: "24px 30px" }}
                >
                  <div
                    className={`circle_img_holder ${
                      darkMode && "circle_img_holder_for_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                    >
                      <path
                        d="M25.3335 55V55C25.3335 59.4183 28.9152 63 33.3335 63H46.3335C50.7518 63 54.3335 59.4183 54.3335 55V29M25.3335 49L25.3335 24C25.3335 19.5817 28.9152 16 33.3335 16H46.8335C50.9756 16 54.3335 19.3579 54.3335 23.5V23.5"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M34.8335 36.6939L31.3335 40.1224L34.8335 43.551M44.8335 43.551L48.3335 40.1224L44.8335 36.6939M41.3335 34L38.3335 46"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M37.3335 21L42.3335 21"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>

                  <h4
                    className={`text_body_medium fw500 center   ${
                      darkMode && "white"
                    }`}
                  >
                    {
                      translations.homeService.card1.servicesDetails
                        .cardSection2.card4.title
                    }
                  </h4>
                </div>
              </Grid>
              <Grid item md={1.5} className="hideForTabViewOnly">
                <img src="/images/Arrow.png" alt="arrow icon" width="100%" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div
                  className={`card6_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                  style={{ padding: "24px 30px" }}
                >
                  <div
                    className={`circle_img_holder ${
                      darkMode && "circle_img_holder_for_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="28"
                      viewBox="0 0 37 28"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.3335 0C2.57207 0 0.333496 2.23858 0.333496 5V7V23C0.333496 25.7614 2.57207 28 5.3335 28H21.8335C22.3858 28 22.8335 27.5523 22.8335 27C22.8335 26.4477 22.3858 26 21.8335 26H5.3335C3.67664 26 2.3335 24.6569 2.3335 23V8H34.3335V23C34.3335 24.6569 32.9904 26 31.3335 26H25.8335C25.2812 26 24.8335 26.4477 24.8335 27C24.8335 27.5523 25.2812 28 25.8335 28H31.3335C34.0949 28 36.3335 25.7614 36.3335 23V7V5C36.3335 2.23858 34.0949 0 31.3335 0H13.8335C13.2812 0 12.8335 0.447715 12.8335 1C12.8335 1.55228 13.2812 2 13.8335 2H31.3335C32.9903 2 34.3335 3.34315 34.3335 5V6H2.3335V5C2.3335 3.34315 3.67664 2 5.3335 2H9.3335C9.88578 2 10.3335 1.55228 10.3335 1C10.3335 0.447715 9.88578 0 9.3335 0H5.3335ZM7.3335 12C6.78121 12 6.3335 12.4477 6.3335 13C6.3335 13.5523 6.78121 14 7.3335 14H18.3335C18.8858 14 19.3335 13.5523 19.3335 13C19.3335 12.4477 18.8858 12 18.3335 12H7.3335ZM7.3335 19C6.78121 19 6.3335 19.4477 6.3335 20C6.3335 20.5523 6.78121 21 7.3335 21H18.3335C18.8858 21 19.3335 20.5523 19.3335 20C19.3335 19.4477 18.8858 19 18.3335 19H7.3335ZM30.0768 11.331C30.4462 11.7415 30.413 12.3738 30.0025 12.7433L26.6691 15.7433C26.4671 15.9251 26.1997 16.0169 25.9286 15.9974C25.6575 15.978 25.406 15.849 25.2319 15.6402L23.5653 13.6402C23.2117 13.2159 23.269 12.5853 23.6933 12.2318C24.1176 11.8782 24.7482 11.9355 25.1017 12.3598L26.1033 13.5618L28.6645 11.2567C29.075 10.8872 29.7073 10.9205 30.0768 11.331ZM30.0025 19.7433C30.413 19.3738 30.4462 18.7415 30.0768 18.331C29.7073 17.9205 29.075 17.8872 28.6645 18.2567L26.1033 20.5618L25.1017 19.3598C24.7482 18.9355 24.1176 18.8782 23.6933 19.2318C23.269 19.5853 23.2117 20.2159 23.5653 20.6402L25.2319 22.6402C25.406 22.849 25.6575 22.978 25.9286 22.9974C26.1997 23.0169 26.4671 22.9251 26.6691 22.7433L30.0025 19.7433Z"
                        fill={darkMode ? "#1597e5" : "#113CFC"}
                      />
                    </svg>
                  </div>

                  <h4
                    className={`text_body_medium fw500 center   ${
                      darkMode && "white"
                    }`}
                  >
                    {
                      translations.homeService.card1.servicesDetails
                        .cardSection2.card5.title
                    }
                  </h4>
                </div>
              </Grid>
              <Grid item md={1.5} className="hideForTabViewOnly">
                <img src="/images/Arrow.png" alt="arrow icon" width="100%" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div
                  className={`card6_style  ${
                    darkMode && "card3_style_for_dark"
                  } `}
                  style={{ padding: "24px 30px" }}
                >
                  <div
                    className={`circle_img_holder ${
                      darkMode && "circle_img_holder_for_dark"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                    >
                      <path
                        d="M24.2723 40.7337L26.4521 42.8931L28.8627 45.3037M36.0946 52.5356L38.0231 54.4642L40.4338 56.8748M25.5291 50.125L23.6167 47.8497C21.9477 45.8638 22.0746 42.9314 23.9088 41.0971L25.4436 39.5624C26.2538 38.7521 27.5778 38.7869 28.3444 39.6387L30.004 41.4827C30.7156 42.2733 30.6838 43.4826 29.9316 44.2348L29.3127 44.8538C28.5316 45.6348 28.5316 46.9011 29.3127 47.6822L33.8073 52.1768C34.5518 52.9214 35.7461 52.9611 36.5385 52.2678L37.5793 51.3571C38.3717 50.6638 39.5659 50.7035 40.3105 51.4481L41.8077 52.9453C42.6285 53.7661 42.5805 55.1108 41.7034 55.8709L39.541 57.745C37.5885 59.4371 34.6683 59.363 32.8042 57.574L30.8983 55.7449"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M48.9696 45.6893C48.9696 45.9515 48.8677 46.2029 48.6863 46.3883C48.5049 46.5736 48.2589 46.6778 48.0023 46.6778H44.1332C43.8766 46.6778 43.6306 46.5736 43.4492 46.3883C43.2678 46.2029 43.1659 45.9515 43.1659 45.6893C43.1659 45.4272 43.2678 45.1758 43.4492 44.9904C43.6306 44.805 43.8766 44.7009 44.1332 44.7009H48.0023C48.2589 44.7009 48.5049 44.805 48.6863 44.9904C48.8677 45.1758 48.9696 45.4272 48.9696 45.6893ZM46.0677 31.8512C46.3547 31.8512 46.6352 31.7643 46.8738 31.6013C47.1124 31.4384 47.2984 31.2069 47.4082 30.936C47.5181 30.665 47.5468 30.3669 47.4908 30.0793C47.4348 29.7917 47.2966 29.5275 47.0937 29.3202C46.8908 29.1128 46.6323 28.9716 46.3508 28.9144C46.0694 28.8572 45.7776 28.8866 45.5125 28.9988C45.2474 29.111 45.0208 29.301 44.8613 29.5448C44.7019 29.7887 44.6168 30.0753 44.6168 30.3686C44.6168 30.7618 44.7697 31.1389 45.0418 31.417C45.3139 31.695 45.6829 31.8512 46.0677 31.8512ZM57.6293 37.2666L56.1348 44.14C56.0639 44.4664 55.9132 44.769 55.6966 45.0197C55.4801 45.2704 55.2049 45.4609 54.8968 45.5733C54.5887 45.6857 54.2577 45.7165 53.9348 45.6627C53.6118 45.6088 53.3076 45.4722 53.0504 45.2655L49.7567 42.724H42.3812L39.0851 45.2655C38.8279 45.4722 38.5236 45.6088 38.2007 45.6627C37.8778 45.7165 37.5468 45.6857 37.2387 45.5733C36.9305 45.4609 36.6554 45.2704 36.4388 45.0197C36.2223 44.769 36.0716 44.4664 36.0007 44.14L34.5062 37.2666C34.4428 36.9717 34.446 36.6658 34.5156 36.3723C34.5851 36.0788 34.7192 35.8053 34.9076 35.5727L38.3609 31.3397C38.4768 29.7841 38.8263 28.2559 39.3971 26.809C40.9568 22.8132 43.7499 20.3063 44.8828 19.4142C45.2219 19.1457 45.6388 19 46.0677 19C46.4967 19 46.9136 19.1457 47.2527 19.4142C48.382 20.3063 51.1787 22.8132 52.7384 26.809C53.3092 28.2559 53.6587 29.7841 53.7746 31.3397L57.2278 35.5727C57.4163 35.8053 57.5503 36.0788 57.6199 36.3723C57.6895 36.6658 57.6927 36.9717 57.6293 37.2666ZM42.6133 40.7472H49.5222C52.0758 36.1089 52.5534 31.6684 50.9417 27.5416C49.5198 23.8992 46.8525 21.5962 46.0677 20.9784C45.2806 21.5962 42.6133 23.8992 41.1914 27.5416C39.5821 31.6684 40.0597 36.1089 42.6133 40.7472ZM40.7996 41.4699C39.4978 39.0524 38.7079 36.6764 38.4298 34.3421L36.3949 36.8379L37.8893 43.7125L37.9111 43.6964L40.7996 41.4699ZM55.7406 36.8379L53.7057 34.3421C53.43 36.6715 52.6417 39.0475 51.3407 41.4699L54.2244 43.6939L54.2462 43.71L55.7406 36.8379Z"
                        fill={darkMode ? "#1597e5" : "#113CFC"}
                      />
                      <circle
                        cx="28.0645"
                        cy="52.8674"
                        r="1"
                        fill={darkMode ? "#1597e5" : "#113CFC"}
                      />
                    </svg>
                  </div>

                  <h4
                    className={`text_body_medium fw500 center   ${
                      darkMode && "white"
                    }`}
                  >
                    {
                      translations.homeService.card1.servicesDetails
                        .cardSection2.card6.title
                    }
                  </h4>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileApplicationDevelopment;
