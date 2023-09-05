import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Cloud from "../../svg-icons/Cloud";
import Triangle from "../../svg-icons/Triangle";
import GlowBG from "../../svg-icons/GlowBG";
import { Link } from "react-router-dom";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const EKYCVerificationServices = ({ translations, lang, darkMode }) => {
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
              {translations.homeService.card8.title}
            </h2>
            <p
              className="text_body_small_regular fw400 center mb8"
              style={{ textTransform: "uppercase" }}
            >
              {translations.homeService.card8.subtitle}
            </p>
            <div className="detail_text_container">
              <p
                className={`text_body_small_regular fw400 center ${
                  darkMode ? "white" : "black2"
                }`}
              >
                {translations.homeService.card8.details}
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
                  translations.homeService.card8.servicesDetails.cardSection1
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
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card1.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card8.servicesDetails
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
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card2.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card8.servicesDetails
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
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card3.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card8.servicesDetails
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
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card4.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card8.servicesDetails
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
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card5.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card8.servicesDetails
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
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card6.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card6.details
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
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card7.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card7.details
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
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card8.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card8.details
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
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card9.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card8.servicesDetails
                          .cardSection1.card9.details
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
                translations.homeService.card8.servicesDetails.cardSection2
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
                      width="81"
                      height="80"
                      viewBox="0 0 81 80"
                      fill="none"
                    >
                      <path
                        d="M41.8593 51.1544C41.8593 49.6874 41.2765 48.2806 40.2392 47.2433C39.2019 46.206 37.7951 45.6232 36.3281 45.6232M36.3281 45.6232C34.8611 45.6232 33.4542 46.206 32.4169 47.2433C31.3796 48.2806 30.7969 49.6874 30.7969 51.1544M36.3281 45.6232C38.6192 45.6232 40.4765 43.7658 40.4765 41.4747C40.4765 39.1836 38.6192 37.3263 36.3281 37.3263C34.037 37.3263 32.1797 39.1836 32.1797 41.4747C32.1797 43.7658 34.037 45.6232 36.3281 45.6232ZM35.4391 31.7951H26.6484C25.121 31.7951 23.8828 33.0333 23.8828 34.5607V53.9199C23.8828 55.4473 25.121 56.6855 26.6484 56.6855H46.0076C47.535 56.6855 48.7732 55.4473 48.7732 53.9199V47.6774M30.7969 29.0295V31.7951M44.2031 33.4918L47.2201 36.6413L52.9421 29.9875M42.1196 37.2401C43.4695 39.6393 45.3499 41.4672 47.6772 42.8261C48.2303 43.1491 48.9139 43.1491 49.467 42.8263C51.8001 41.4646 53.684 39.6312 55.0347 37.2236C56.3859 34.815 57.2136 31.8133 57.4074 28.1019C57.4509 27.2672 56.9319 26.5135 56.1513 26.2148L49.2873 23.5882C48.8271 23.412 48.318 23.412 47.8577 23.5882L40.9938 26.2148C40.2132 26.5135 39.6941 27.2672 39.7377 28.1019C39.9318 31.822 40.763 34.8288 42.1196 37.2401Z"
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
                      translations.homeService.card8.servicesDetails
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
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                    >
                      <path
                        d="M28.3594 32.374V35.3821M41.2188 32.374V35.3821M35.0525 32.3369V37.6017C35.0525 38.9174 34.4888 39.4823 33.1719 39.4823M38.9629 43.6641C36.7063 45.5447 32.1941 45.5447 29.9375 43.6641M20.9141 29.4764V27.8975C20.9141 24.7005 22.2298 23.3848 25.4268 23.3848H27.004M27.004 50.4601H25.4268C22.2298 50.4601 20.9141 49.1443 20.9141 45.9474V44.3701M41.8906 23.3862H43.4695C46.6665 23.3862 47.9823 24.702 47.9823 27.8989V29.4762M45.5156 48.4909L48.3126 51.4107L53.6172 45.2422M59.0847 47.4173C59.0847 52.4976 54.9663 56.6159 49.8861 56.6159C44.8058 56.6159 40.6875 52.4976 40.6875 47.4173C40.6875 42.3371 44.8058 38.2188 49.8861 38.2188C54.9663 38.2188 59.0847 42.3371 59.0847 47.4173Z"
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
                      translations.homeService.card8.servicesDetails
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
                      translations.homeService.card8.servicesDetails
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
                        d="M21.8734 40.7632H19.2933C18.0268 40.7632 17 41.79 17 43.0566V43.6299M21.8734 40.7632V37.0366M21.8734 40.7632H33.9134M33.9134 40.7632H36.4934C37.76 40.7632 38.7868 41.79 38.7868 43.0566V49.3633M33.9134 40.7632V37.0366M17 48.2166V54.2366C17 55.5032 18.0268 56.53 19.2933 56.53H36.4934C37.76 56.53 38.7868 55.5032 38.7868 54.2366V53.6633M24.6867 51.8079C27.5466 51.8079 28.7216 54.77 28.7216 55.9566L28.8353 55.9565C28.8353 53.6653 26.9779 51.8079 24.6867 51.8079ZM24.6867 51.8079C21.618 51.8079 20.5381 54.7699 20.5381 55.9565C20.5381 53.6653 22.3955 51.8079 24.6867 51.8079ZM30.1856 44.7764H34.7723M30.1856 47.6431H34.7723M34.9093 32.0239H31.8549C29.4755 32.0239 27.5466 33.9528 27.5466 36.3322M42.6506 44.963H45.705C48.0844 44.963 50.0133 43.0341 50.0133 40.6547M33.2084 34.3368L35.6606 32.024L33.2084 29.7112M44.3515 42.6501L41.8993 44.9629L44.3515 47.2757M27.9038 46.2105C27.9038 47.9893 26.4618 49.4312 24.6831 49.4312C22.9044 49.4312 21.4624 47.9893 21.4624 46.2105C21.4624 44.4318 22.9044 42.9899 24.6831 42.9899C26.4618 42.9899 27.9038 44.4318 27.9038 46.2105ZM54.8847 37.6099C53.7456 38.2304 52.4394 38.583 51.0509 38.583C49.6623 38.583 48.3561 38.2304 47.2169 37.6098C46.2609 38.226 45.1225 38.5836 43.9005 38.5836C40.5154 38.5836 37.7713 35.8394 37.7713 32.4544C37.7713 29.0693 40.5154 26.3251 43.9005 26.3251C44.0091 26.3251 44.117 26.328 44.2241 26.3335C45.6393 24.0507 48.1676 22.5303 51.0509 22.5303C53.9343 22.5303 56.4626 24.0507 57.8778 26.3335C57.9847 26.3279 58.0924 26.3251 58.2008 26.3251C61.5859 26.3251 64.33 29.0693 64.33 32.4544C64.33 35.8394 61.5859 38.5836 58.2008 38.5836C56.979 38.5836 55.8407 38.2261 54.8847 37.6099Z"
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
                      translations.homeService.card8.servicesDetails
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
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                    >
                      <path
                        d="M32.4214 29.627H29.6562M43.9873 29.627H39.8618M37.1682 29.627H35.2616M38.986 33.606H36.4387M33.7965 33.606H29.6562M32.2492 38.0923H29.6562M49.9566 29.315V27.8291C49.9566 25.62 48.1657 23.8291 45.9566 23.8291H28.6211C26.412 23.8291 24.6211 25.62 24.6211 27.8291V50.0828C24.6211 52.2919 26.412 54.0828 28.6211 54.0828H32.5771M50.6659 37.331C50.6659 39.9322 48.5572 42.0409 45.956 42.0409C43.3548 42.0409 41.2461 39.9322 41.2461 37.331C41.2461 34.7298 43.3548 32.6211 45.956 32.6211C48.5572 32.6211 50.6659 34.7298 50.6659 37.331ZM55.3787 50.8724C55.3787 53.7984 55.3787 56.171 45.9589 56.171C36.5391 56.171 36.5391 53.7984 36.5391 50.8724C36.5391 47.9463 40.7568 45.5737 45.9589 45.5737C51.161 45.5737 55.3787 47.9463 55.3787 50.8724Z"
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
                      translations.homeService.card8.servicesDetails
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
                      width="81"
                      height="80"
                      viewBox="0 0 81 80"
                      fill="none"
                    >
                      <path
                        d="M21.3742 62.5446L19.8326 50.3887C19.7377 49.6409 19.8561 48.8816 20.1741 48.1981L24.7844 38.2889C25.2774 37.2293 26.2091 36.4382 27.3347 36.1237L30.1522 35.3365M24.8185 49.2442L33.8452 40.6659C34.1426 40.3833 34.5872 40.3042 34.9338 40.5238C36.3932 41.4482 37.9104 43.3839 35.3507 45.8012L30.5572 50.9323C31.8625 52.1476 33.6899 55.5232 30.5572 59.304M39.9417 48.2993V55.7258C39.9417 56.5593 39.6567 57.3262 39.1789 57.9344C38.0733 59.3418 36.3634 60.7549 36.3634 62.5446V62.5446M30.6234 43.1007V27.2772C30.6234 26.1726 31.5189 25.2772 32.6234 25.2772H50.7702C51.8747 25.2772 52.7702 26.1726 52.7702 27.2772V45.9617C52.7702 47.0663 51.8747 47.9617 50.7702 47.9617H34.203M43.9329 19.2104L46.2249 21.4385M50.5855 17.4561L50.6307 20.6522M58.1738 20.3247L55.9457 22.6167M60.9765 28.1034L57.7803 28.1486M59.3799 34.5345L57.0879 32.3064M39.2675 29.5305H44.1261L41.8321 37.767L39.2675 29.5305ZM42.2226 41.548C42.2226 41.8383 41.9873 42.0736 41.697 42.0736C41.4068 42.0736 41.1715 41.8383 41.1715 41.548C41.1715 41.2578 41.4068 41.0225 41.697 41.0225C41.9873 41.0225 42.2226 41.2578 42.2226 41.548Z"
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
                      translations.homeService.card8.servicesDetails
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

export default EKYCVerificationServices;
