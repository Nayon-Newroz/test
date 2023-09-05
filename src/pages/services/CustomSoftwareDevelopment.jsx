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
              {translations.homeService.card2.title}
            </h2>
            <p
              className="text_body_small_regular fw400 center mb8"
              style={{ textTransform: "uppercase" }}
            >
              {translations.homeService.card2.subtitle}
            </p>
            <div className="detail_text_container">
              <p
                className={`text_body_small_regular fw400 center ${
                  darkMode ? "white" : "black2"
                }`}
              >
                {translations.homeService.card2.details}
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
                  translations.homeService.card2.servicesDetails.cardSection1
                    .title
                }
              </h3>
              <div
                className="card_holder mb45"
                style={{ justifyContent: "start" }}
              >
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
                        translations.homeService.card2.servicesDetails
                          .cardSection1.card1.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card2.servicesDetails
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
                        translations.homeService.card2.servicesDetails
                          .cardSection1.card2.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card2.servicesDetails
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
                        translations.homeService.card2.servicesDetails
                          .cardSection1.card3.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card2.servicesDetails
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
                        translations.homeService.card2.servicesDetails
                          .cardSection1.card4.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card2.servicesDetails
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
                        translations.homeService.card2.servicesDetails
                          .cardSection1.card5.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card2.servicesDetails
                          .cardSection1.card5.details
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

          <div className="upper_slide">
            <h3
              className={`title_semibold_medium mb30 center ${
                darkMode ? "white" : "black"
              }`}
            >
              {
                translations.homeService.card2.servicesDetails.cardSection2
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
                      translations.homeService.card2.servicesDetails
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
                      translations.homeService.card2.servicesDetails
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
                      width="36"
                      height="26"
                      viewBox="0 0 36 26"
                      fill="none"
                    >
                      <path
                        d="M8.46013 6.38776L1.66602 13.2449L8.46013 20.102M27.8719 20.102L34.666 13.2449L27.8719 6.38776M21.0778 1L15.2543 25"
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
                      translations.homeService.card2.servicesDetails
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
                      width="81"
                      height="80"
                      viewBox="0 0 81 80"
                      fill="none"
                    >
                      <path
                        d="M20.2695 39.2164V33.3806C20.2695 32.276 21.165 31.3806 22.2695 31.3806H28.3313C29.4492 31.3806 30.1733 30.2006 29.667 29.204C29.1608 28.2073 29.8849 27.0273 31.0027 27.0273H33.1146C34.2329 27.0273 34.9631 28.2006 34.4694 29.204C33.9757 30.2073 34.706 31.3806 35.8242 31.3806H42.1778C43.2824 31.3806 44.1778 32.276 44.1778 33.3806V39.3156C44.1778 40.5906 42.9427 41.5009 41.7248 41.1235C40.5069 40.7462 39.2718 41.6565 39.2718 42.9315V44.1528C39.2718 45.4187 40.5472 46.2867 41.7248 45.8223C42.9024 45.3579 44.1778 46.2259 44.1778 47.4918V53.3579C44.1778 54.4625 43.2824 55.3579 42.1778 55.3579H36.075C34.8121 55.3579 33.9641 56.6536 34.4694 57.811C34.9747 58.9683 34.1267 60.264 32.8638 60.264H31.2521C29.99 60.264 29.1484 58.9616 29.667 57.811C30.1856 56.6603 29.344 55.3579 28.082 55.3579H22.2695C21.165 55.3579 20.2695 54.4625 20.2695 53.3579V47.5885C20.2695 46.2676 21.5908 45.3548 22.8262 45.8223C24.0616 46.2897 25.3829 45.3769 25.3829 44.0561V43.0307C25.3829 41.7 24.1018 40.7443 22.8262 41.1235C21.5506 41.5028 20.2695 40.5471 20.2695 39.2164Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M32.1797 22.6345L32.1797 21.7362C32.1797 20.6317 33.0751 19.7362 34.1797 19.7362L40.1147 19.7362C41.3897 19.7362 42.3001 20.9713 41.9227 22.1893V22.1893C41.5453 23.4072 42.4556 24.6423 43.7307 24.6423L44.9519 24.6423C46.2178 24.6423 47.0858 23.3669 46.6214 22.1893V22.1893C46.157 21.0116 47.025 19.7362 48.2909 19.7362L54.1571 19.7362C55.2616 19.7362 56.1571 20.6317 56.1571 21.7362L56.1571 27.839C56.1571 29.1019 57.4527 29.95 58.6101 29.4446V29.4446C59.7675 28.9393 61.0631 29.7874 61.0631 31.0502L61.0631 32.662C61.0631 33.924 59.7607 34.7656 58.6101 34.247V34.247C57.4595 33.7284 56.1571 34.57 56.1571 35.8321L56.1571 41.6445C56.1571 42.7491 55.2616 43.6445 54.1571 43.6445L48.1684 43.6445"
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
                      translations.homeService.card2.servicesDetails
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
                      translations.homeService.card2.servicesDetails
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
                        d="M25.2311 53.185L25.8802 50.4856L28.5424 49.6981L30.5556 51.6098L29.9065 54.3092L27.2443 55.0968L25.2311 53.185ZM29.8937 54.3625C29.8937 54.3624 29.8937 54.3624 29.8937 54.3623L29.8937 54.3625Z"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M44.9081 39.945L45.6066 39.1582C46.0419 38.6681 46.7644 38.5573 47.3265 38.8945V38.8945C49.5631 40.2365 52.4369 39.8057 54.1817 37.867L54.3901 37.6355C55.1367 36.806 55.7602 35.8736 56.2417 34.8669L59.3423 28.3838C59.6455 27.7499 58.8451 27.1673 58.335 27.6505L52.9385 32.763C52.2266 33.4374 51.1071 33.4223 50.4137 32.7288L47.1118 29.427C46.422 28.7372 46.4029 27.625 47.0684 26.9119L50.9662 22.7357C51.3559 22.3182 50.904 21.6634 50.3754 21.8797L45.4434 23.8973C43.2547 24.7927 41.5231 26.5379 40.6449 28.7335V28.7335C40.2857 29.6313 40.235 30.623 40.5007 31.5528L40.7758 32.5159C40.9493 33.1231 40.7963 33.7769 40.3712 34.244L39.1789 35.5543M32.3253 43.2647L29.0885 45.9553C29.0329 46.0015 28.9683 46.0356 28.8988 46.0555L26.4698 46.7495C23.9755 47.4621 22.2559 49.7419 22.2559 52.336V52.6383C22.2559 55.4516 24.3876 57.8072 27.1869 58.0871V58.0871C29.8915 58.3576 32.3851 56.6033 33.0443 53.9664L33.7912 50.9788C33.813 50.8915 33.8574 50.8116 33.9198 50.7468L36.1269 48.4584"
                        stroke={darkMode ? "#1597e5" : "#113CFC"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M38.1647 39.2766L27.3431 28.4551C27.1734 28.2853 27.0781 28.0551 27.0781 27.8151V26.3171C27.0781 25.9859 26.8971 25.6812 26.6064 25.5226L22.3703 23.212C22.0178 23.0197 21.5808 23.0827 21.2969 23.3666L20.3265 24.3369C20.0426 24.6208 19.9797 25.0578 20.1719 25.4103L22.4825 29.6464C22.6411 29.9372 22.9459 30.1181 23.2771 30.1181H24.7751C25.0151 30.1181 25.2453 30.2135 25.415 30.3832L36.2366 41.2047M42.9849 46.025L52.1435 55.1835M42.2619 39.9996V39.9996C41.8626 40.399 41.8626 41.0464 42.2619 41.4457L42.9476 42.1314C43.2801 42.464 43.7312 42.6508 44.2015 42.6508V42.6508C44.6582 42.6508 45.0972 42.827 45.4273 43.1426L54.5898 51.9068C55.4807 52.759 55.9346 53.9706 55.823 55.1984V55.1984C55.6461 57.1444 54.1043 58.6862 52.1583 58.8631V58.8631C50.9306 58.9747 49.7189 58.5207 48.8668 57.6298L40.1026 48.4673C39.7869 48.1373 39.6108 47.6982 39.6108 47.2415V47.2415C39.6108 46.7712 39.4239 46.3202 39.0914 45.9876L38.4057 45.3019C38.0064 44.9026 37.3589 44.9026 36.9596 45.3019V45.3019C36.5603 45.7013 35.9129 45.7013 35.5135 45.3019L35.0315 44.8199C34.366 44.1544 34.366 43.0753 35.0315 42.4098L39.3697 38.0715C40.0353 37.406 41.1143 37.406 41.7799 38.0715L42.2619 38.5536C42.6612 38.9529 42.6612 39.6003 42.2619 39.9996Z"
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
                      translations.homeService.card2.servicesDetails
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
