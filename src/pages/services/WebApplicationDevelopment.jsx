import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Cloud from "../../svg-icons/Cloud";
import Triangle from "../../svg-icons/Triangle";
import GlowBG from "../../svg-icons/GlowBG";
import { Link } from "react-router-dom";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const WebApplicationDevelopment = ({ translations, lang, darkMode }) => {
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
              {translations.homeService.card6.title}
            </h2>
            <p
              className="text_body_small_regular fw400 center mb8"
              style={{ textTransform: "uppercase" }}
            >
              {translations.homeService.card6.subtitle}
            </p>
            <div className="detail_text_container">
              <p
                className={`text_body_small_regular fw400 center ${
                  darkMode ? "white" : "black2"
                }`}
              >
                {translations.homeService.card6.details}
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
                  translations.homeService.card6.servicesDetails.cardSection1
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
                        translations.homeService.card6.servicesDetails
                          .cardSection1.card1.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card6.servicesDetails
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
                        translations.homeService.card6.servicesDetails
                          .cardSection1.card2.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card6.servicesDetails
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
                        translations.homeService.card6.servicesDetails
                          .cardSection1.card3.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card6.servicesDetails
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
                        translations.homeService.card6.servicesDetails
                          .cardSection1.card4.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card6.servicesDetails
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
                        translations.homeService.card6.servicesDetails
                          .cardSection1.card5.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card6.servicesDetails
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
                        translations.homeService.card6.servicesDetails
                          .cardSection1.card6.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card6.servicesDetails
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
                translations.homeService.card6.servicesDetails.cardSection2
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
                      width="37"
                      height="30"
                      viewBox="0 0 37 30"
                      fill="none"
                    >
                      <path
                        d="M1.76317 27.775L12.1128 17.32L17.7058 22.675L24.5416 16.6995L28.3496 20.4123M35.6681 9.89953V26.0496C35.6681 26.7259 35.3995 27.3745 34.9212 27.8527C34.443 28.331 33.7944 28.5996 33.1181 28.5996H8.468M14.5132 6.49952H29.8133M7.7115 6.49952H9.41151M1.66797 9.89953V17.5496M35.6681 3.94943C35.6681 3.27312 35.3995 2.62451 34.9212 2.14629C34.443 1.66807 33.7944 1.39941 33.1181 1.39941H4.21798C3.54168 1.39941 2.89307 1.66807 2.41485 2.14629C1.93663 2.62451 1.66797 3.27312 1.66797 3.94943V11.5995H35.6681V3.94943Z"
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
                      translations.homeService.card6.servicesDetails
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
                        d="M24.25 33.5982V24.5205L40.0018 40.0002M24.25 33.5982H27.756M24.25 33.5982V41.4215M24.25 41.4215H27.756M24.25 41.4215V49.3397M24.25 49.3397V55.48H55.7537L52.8118 52.5889M24.25 49.3397H27.756M44.25 47.1772V30.7656L47.25 25.5371L50.1544 30.7656V47.1772M44.25 47.1772V51.8247H50.1544V47.1772M44.25 47.1772H50.1544M32.2969 40.4963V47.9998H39.2134"
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
                      translations.homeService.card6.servicesDetails
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
                      translations.homeService.card6.servicesDetails
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
                        d="M30.7941 33.3878L24 40.2449L30.7941 47.102M50.2059 47.102L57 40.2449L50.2059 33.3878M43.4118 28L37.5882 52"
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
                      translations.homeService.card6.servicesDetails
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
                        d="M34.17 54H39.67M34.17 54C30.448 48.8996 29.1925 43.9694 29.4046 39.5M34.17 54L27.8934 58.6023C27.3141 59.027 26.4892 58.7206 26.3277 58.0207L23.7795 46.9787C23.7099 46.6768 23.7841 46.3597 23.9804 46.12L29.4046 39.5M39.67 21C35.5193 24.1677 29.808 31.0005 29.4046 39.5M45.1682 54H39.6682M45.1682 54C48.8901 48.8996 50.1457 43.9694 49.9335 39.5M45.1682 54L51.4447 58.6023C52.024 59.027 52.8489 58.7206 53.0104 58.0207L55.5586 46.9787C55.6283 46.6768 55.5541 46.3597 55.3577 46.12L49.9335 39.5M39.6682 21C43.8189 24.1677 49.5302 31.0005 49.9335 39.5M36.337 60H43.337M41.6691 37C41.6691 38.1046 40.7736 39 39.6691 39C38.5645 39 37.6691 38.1046 37.6691 37C37.6691 35.8954 38.5645 35 39.6691 35C40.7736 35 41.6691 35.8954 41.6691 37Z"
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
                      translations.homeService.card6.servicesDetails
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
                        d="M44.9086 39.9449L45.6072 39.1582C46.0424 38.668 46.765 38.5572 47.3271 38.8945C49.5636 40.2364 52.4374 39.8057 54.1823 37.867L54.3907 37.6354C55.1372 36.8059 55.7607 35.8736 56.2422 34.8669L59.3428 28.3837C59.646 27.7498 58.8456 27.1672 58.3356 27.6504L52.9391 32.7629C52.2272 33.4373 51.1076 33.4222 50.4142 32.7288L47.1123 29.4269C46.4226 28.7372 46.4034 27.6249 47.069 26.9118L50.9667 22.7356C51.3564 22.3181 50.9045 21.6634 50.3759 21.8796L45.4439 23.8972C43.2552 24.7926 41.5236 26.5378 40.6454 28.7334C40.2863 29.6312 40.2355 30.6229 40.5012 31.5527L40.7764 32.5158C40.9499 33.1231 40.7968 33.7768 40.3718 34.2439L39.1794 35.5543M32.3258 43.2646L29.0891 45.9552C29.0335 46.0014 28.9689 46.0356 28.8994 46.0554L26.4703 46.7494C23.976 47.4621 22.2564 49.7419 22.2564 52.3359V52.6383C22.2564 55.4515 24.3882 57.8071 27.1875 58.087C29.892 58.3575 32.3856 56.6032 33.0448 53.9664L33.7917 50.9787C33.8136 50.8915 33.8579 50.8115 33.9203 50.7468L36.1274 48.4584M38.1658 39.277L27.3442 28.4554C27.1745 28.2857 27.0792 28.0555 27.0792 27.8154V26.3175C27.0792 25.9863 26.8982 25.6815 26.6075 25.5229L22.3714 23.2123C22.0189 23.0201 21.5819 23.083 21.298 23.3669L20.3276 24.3373C20.0437 24.6212 19.9808 25.0582 20.173 25.4107L22.4836 29.6468C22.6422 29.9375 22.947 30.1184 23.2782 30.1184H24.7762C25.0162 30.1184 25.2464 30.2138 25.4161 30.3835L36.2377 41.2051M38.1658 39.277L39.3708 38.0719C40.0364 37.4064 41.1154 37.4064 41.781 38.0719L42.263 38.5539C42.6623 38.9532 42.6623 39.6007 42.263 40C41.8637 40.3993 41.8637 41.0468 42.263 41.4461L42.9487 42.1318C43.2812 42.4643 43.7323 42.6511 44.2026 42.6511C44.6593 42.6511 45.0983 42.8273 45.4283 43.143L54.5909 51.9072C55.4818 52.7593 55.9357 53.971 55.8241 55.1987C55.6472 57.1447 54.1054 58.6865 52.1594 58.8634C50.9317 58.975 49.72 58.5211 48.8679 57.6302L40.1037 48.4676C39.788 48.1376 39.6119 47.6986 39.6119 47.2419C39.6119 46.7716 39.425 46.3205 39.0925 45.988L38.4068 45.3023C38.0075 44.903 37.36 44.903 36.9607 45.3023C36.5614 45.7016 35.914 45.7016 35.5146 45.3023L35.0326 44.8203C34.3671 44.1547 34.3671 43.0757 35.0326 42.4101L36.2377 41.2051M38.1658 39.277L36.2377 41.2051M42.986 46.0253L52.1446 55.1838M25.8497 53.4743L26.9246 54.4951C27.1591 54.7177 27.4946 54.7984 27.8046 54.7066L29.2261 54.2861C29.5362 54.1944 29.7738 53.9442 29.8493 53.6298L30.1959 52.1885C30.2715 51.8741 30.1736 51.5433 29.9391 51.3206L28.8642 50.2999C28.6297 50.0772 28.2943 49.9965 27.9842 50.0883L26.5628 50.5088C26.2527 50.6005 26.0151 50.8507 25.9395 51.1651L25.593 52.6064C25.5174 52.9208 25.6152 53.2516 25.8497 53.4743Z"
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
                      translations.homeService.card6.servicesDetails
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

export default WebApplicationDevelopment;
