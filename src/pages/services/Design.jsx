import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Cloud from "../../svg-icons/Cloud";
import Triangle from "../../svg-icons/Triangle";
import GlowBG from "../../svg-icons/GlowBG";
import { Link } from "react-router-dom";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Design = ({ translations, lang, darkMode }) => {
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
              {translations.homeService.card7.title}
            </h2>
            <p
              className="text_body_small_regular fw400 center mb8"
              style={{ textTransform: "uppercase" }}
            >
              {translations.homeService.card7.subtitle}
            </p>
            <div className="detail_text_container">
              <p
                className={`text_body_small_regular fw400 center ${
                  darkMode ? "white" : "black2"
                }`}
              >
                {translations.homeService.card7.details}
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
                  translations.homeService.card7.servicesDetails.cardSection1
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
                        translations.homeService.card7.servicesDetails
                          .cardSection1.card1.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card7.servicesDetails
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
                        translations.homeService.card7.servicesDetails
                          .cardSection1.card2.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card7.servicesDetails
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
                        translations.homeService.card7.servicesDetails
                          .cardSection1.card3.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card7.servicesDetails
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
                        translations.homeService.card7.servicesDetails
                          .cardSection1.card4.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card7.servicesDetails
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
                        translations.homeService.card7.servicesDetails
                          .cardSection1.card5.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card7.servicesDetails
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
                translations.homeService.card7.servicesDetails.cardSection2
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
                        d="M55.0388 32.7162L55.6734 33.4891V33.4891L55.0388 32.7162ZM54.465 33.1874L53.8304 32.4145V32.4145L54.465 33.1874ZM47.6402 33.1874L48.2594 32.4022L47.6402 33.1874ZM47.0297 32.706L46.4105 33.4912L47.0297 32.706ZM22.0911 40.9497C22.1461 41.4992 22.6362 41.9001 23.1858 41.8451C23.7353 41.79 24.1362 41.3 24.0812 40.7504L22.0911 40.9497ZM24.0023 33.2683L23.0599 32.9339L24.0023 33.2683ZM28.0441 26.8703L28.749 27.5796V27.5796L28.0441 26.8703ZM35.2497 21.6445C34.7149 21.7822 34.3929 22.3274 34.5306 22.8622C34.6683 23.3971 35.2135 23.719 35.7484 23.5813L35.2497 21.6445ZM41.6082 23.2546C42.155 23.3321 42.6611 22.9517 42.7386 22.4049C42.8162 21.8581 42.4358 21.3519 41.8889 21.2744L41.6082 23.2546ZM33.0835 24.5408C33.5835 24.3061 33.7985 23.7106 33.5638 23.2107C33.3292 22.7107 32.7336 22.4957 32.2337 22.7303L33.0835 24.5408ZM40.0023 18.4346C39.6394 18.0184 39.0077 17.9751 38.5914 18.338C38.1751 18.701 38.1319 19.3327 38.4948 19.749L40.0023 18.4346ZM42.0061 22.2546L42.618 23.0455C42.8358 22.877 42.9745 22.6261 43.0013 22.352C43.0281 22.078 42.9408 21.805 42.7598 21.5974L42.0061 22.2546ZM38.0755 24.0315C37.6387 24.3695 37.5586 24.9975 37.8965 25.4343C38.2345 25.8711 38.8626 25.9512 39.2994 25.6133L38.0755 24.0315ZM58.907 39.2619C58.852 38.7123 58.3619 38.3115 57.8123 38.3665C57.2628 38.4215 56.8619 38.9116 56.9169 39.4611L58.907 39.2619ZM56.9958 46.9432L57.9382 47.2777L56.9958 46.9432ZM52.954 53.3413L52.2491 52.632V52.632L52.954 53.3413ZM48.0643 55.5995C47.567 55.8395 47.3584 56.4374 47.5985 56.9347C47.8386 57.4321 48.4364 57.6407 48.9338 57.4006L48.0643 55.5995ZM45.2173 58.6948C45.7563 58.5742 46.0955 58.0396 45.9749 57.5006C45.8544 56.9617 45.3198 56.6225 44.7808 56.743L45.2173 58.6948ZM39.3899 56.9569C38.8431 56.8794 38.337 57.2598 38.2595 57.8066C38.1819 58.3535 38.5623 58.8596 39.1092 58.9371L39.3899 56.9569ZM41.3342 61.7205C41.7176 62.118 42.3506 62.1296 42.7482 61.7462C43.1458 61.3628 43.1573 60.7298 42.7739 60.3322L41.3342 61.7205ZM39.1414 58.0058L38.4906 57.2466C38.2815 57.4258 38.1556 57.6833 38.1426 57.9584C38.1295 58.2334 38.2305 58.5017 38.4216 58.6999L39.1414 58.0058ZM42.978 56.034C43.3973 55.6746 43.4458 55.0433 43.0864 54.624C42.7269 54.2047 42.0956 54.1562 41.6763 54.5156L42.978 56.034ZM25.7237 48.8193C25.7237 49.3716 26.1714 49.8193 26.7237 49.8193C27.2759 49.8193 27.7237 49.3716 27.7237 48.8193H25.7237ZM28.2678 53.0593C28.2678 53.6116 28.7155 54.0593 29.2678 54.0593C29.82 54.0593 30.2678 53.6116 30.2678 53.0593H28.2678ZM28.5335 54.9437C28.1619 55.3523 28.192 55.9848 28.6006 56.3563C29.0092 56.7278 29.6417 56.6978 30.0132 56.2892L28.5335 54.9437ZM30.0195 56.2823C30.391 55.8737 30.3609 55.2412 29.9523 54.8697C29.5437 54.4982 28.9112 54.5282 28.5397 54.9369L30.0195 56.2823ZM56.0003 28.1058V28.5678H58.0003V28.1058H56.0003ZM54.4043 31.9434L53.8304 32.4145L55.0995 33.9603L55.6734 33.4891L54.4043 31.9434ZM48.2594 32.4022L47.6489 31.9207L46.4105 33.4912L47.021 33.9726L48.2594 32.4022ZM46.0003 28.5214V28.1058H44.0003V28.5214H46.0003ZM52.8684 34.4491V36.2486H54.8684V34.4491H52.8684ZM52.8684 36.2486V37.3023H54.8684V36.2486H52.8684ZM49.2614 37.3023V36.2486H47.2614V37.3023H49.2614ZM49.2614 36.2486V34.4682H47.2614V36.2486H49.2614ZM53.8684 35.2486H48.2614V37.2486H53.8684V35.2486ZM47.6489 31.9207C46.6078 31.0998 46.0003 29.8472 46.0003 28.5214H44.0003C44.0003 30.4597 44.8885 32.2911 46.4105 33.4912L47.6489 31.9207ZM47.021 33.9726C47.1728 34.0923 47.2614 34.2749 47.2614 34.4682H49.2614C49.2614 33.6624 48.8921 32.9011 48.2594 32.4022L47.021 33.9726ZM51.0649 39.1058C50.0688 39.1058 49.2614 38.2983 49.2614 37.3023H47.2614C47.2614 39.4029 48.9643 41.1058 51.0649 41.1058V39.1058ZM51.0649 41.1058C53.1655 41.1058 54.8684 39.4029 54.8684 37.3023H52.8684C52.8684 38.2983 52.0609 39.1058 51.0649 39.1058V41.1058ZM53.8304 32.4145C53.2214 32.9145 52.8684 33.6611 52.8684 34.4491H54.8684C54.8684 34.2598 54.9532 34.0804 55.0995 33.9603L53.8304 32.4145ZM56.0003 28.5678C56.0003 29.8752 55.4147 31.1138 54.4043 31.9434L55.6734 33.4891C57.1465 32.2796 58.0003 30.4738 58.0003 28.5678H56.0003ZM51.0003 23.1058C53.7618 23.1058 56.0003 25.3443 56.0003 28.1058H58.0003C58.0003 24.2398 54.8663 21.1058 51.0003 21.1058V23.1058ZM51.0003 21.1058C47.1344 21.1058 44.0003 24.2398 44.0003 28.1058H46.0003C46.0003 25.3443 48.2389 23.1058 51.0003 23.1058V21.1058ZM24.0812 40.7504C23.8389 38.3302 24.1346 35.8858 24.9448 33.6028L23.0599 32.9339C22.1508 35.4958 21.8195 38.2367 22.0911 40.9497L24.0812 40.7504ZM24.9448 33.6028C25.7549 31.3199 27.0571 29.261 28.749 27.5796L27.3392 26.161C25.4323 28.056 23.9691 30.372 23.0599 32.9339L24.9448 33.6028ZM35.7484 23.5813C37.6608 23.0889 39.6497 22.9769 41.6082 23.2546L41.8889 21.2744C39.6696 20.9597 37.4159 21.0868 35.2497 21.6445L35.7484 23.5813ZM28.749 27.5796C30.0208 26.3156 31.4878 25.2898 33.0835 24.5408L32.2337 22.7303C30.4288 23.5775 28.7727 24.7363 27.3392 26.161L28.749 27.5796ZM38.4948 19.749L41.2523 22.9117L42.7598 21.5974L40.0023 18.4346L38.4948 19.749ZM41.3941 21.4637L38.0755 24.0315L39.2994 25.6133L42.618 23.0455L41.3941 21.4637ZM56.9169 39.4611C57.1593 41.8813 56.8635 44.3258 56.0533 46.6088L57.9382 47.2777C58.8473 44.7157 59.1786 41.9748 58.907 39.2619L56.9169 39.4611ZM56.0533 46.6088C55.2432 48.8917 53.941 50.9505 52.2491 52.632L53.6589 54.0506C55.5658 52.1555 57.029 49.8396 57.9382 47.2777L56.0533 46.6088ZM52.2491 52.632C51.0172 53.8563 49.6021 54.8571 48.0643 55.5995L48.9338 57.4006C50.6729 56.5611 52.2703 55.4306 53.6589 54.0506L52.2491 52.632ZM44.7808 56.743C43.0134 57.1383 41.1889 57.212 39.3899 56.9569L39.1092 58.9371C41.1477 59.2262 43.2152 59.1425 45.2173 58.6948L44.7808 56.743ZM42.7739 60.3322L39.8613 57.3117L38.4216 58.6999L41.3342 61.7205L42.7739 60.3322ZM39.7923 58.765L42.978 56.034L41.6763 54.5156L38.4906 57.2466L39.7923 58.765ZM37.1006 51.105C37.1006 55.5479 33.499 59.1495 29.0562 59.1495V61.1495C34.6036 61.1495 39.1006 56.6524 39.1006 51.105H37.1006ZM29.0562 59.1495C24.6133 59.1495 21.0117 55.5479 21.0117 51.105H19.0117C19.0117 56.6524 23.5088 61.1495 29.0562 61.1495V59.1495ZM21.0117 51.105C21.0117 46.6622 24.6133 43.0606 29.0562 43.0606V41.0606C23.5088 41.0606 19.0117 45.5576 19.0117 51.105H21.0117ZM29.0562 43.0606C33.499 43.0606 37.1006 46.6622 37.1006 51.105H39.1006C39.1006 45.5576 34.6036 41.0606 29.0562 41.0606V43.0606ZM27.7237 48.8193C27.7237 48.3653 27.8904 48.0896 28.0994 47.9122C28.3302 47.7164 28.6736 47.5932 29.0557 47.5932C29.4378 47.5932 29.7812 47.7164 30.012 47.9122C30.221 48.0896 30.3877 48.3653 30.3877 48.8193H32.3877C32.3877 47.7893 31.9714 46.9519 31.306 46.3872C30.6622 45.841 29.8396 45.5932 29.0557 45.5932C28.2718 45.5932 27.4491 45.841 26.8054 46.3872C26.14 46.9519 25.7237 47.7893 25.7237 48.8193H27.7237ZM30.3877 48.8193C30.3877 49.1615 30.3085 49.3377 30.2244 49.4637C30.1114 49.6333 29.9602 49.7657 29.6588 50.0369C29.3867 50.2818 29.0137 50.6256 28.7287 51.129C28.434 51.6498 28.2678 52.2743 28.2678 53.0593H30.2678C30.2678 52.5721 30.3665 52.2957 30.4693 52.1142C30.5818 51.9154 30.7388 51.7556 30.9967 51.5236C31.2253 51.3178 31.6041 50.9998 31.8885 50.5731C32.202 50.1029 32.3877 49.5372 32.3877 48.8193H30.3877ZM30.0132 56.2892L30.0195 56.2823L28.5397 54.9369L28.5335 54.9437L30.0132 56.2892Z"
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
                      translations.homeService.card7.servicesDetails
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
                        d="M36.5043 54.9147C36.5043 54.3624 36.0565 53.9147 35.5043 53.9147C34.952 53.9147 34.5043 54.3624 34.5043 54.9147H36.5043ZM40.2812 50.9197V51.9197C40.4811 51.9197 40.6765 51.8598 40.842 51.7477L40.2812 50.9197ZM47.1423 46.2734L47.703 47.1014C47.9777 46.9154 48.1423 46.6052 48.1423 46.2734H47.1423ZM48.1423 42.0615C48.1423 41.5092 47.6945 41.0615 47.1423 41.0615C46.59 41.0615 46.1423 41.5092 46.1423 42.0615H48.1423ZM35.7227 28.7307C35.7227 29.283 36.1704 29.7307 36.7227 29.7307C37.2749 29.7307 37.7227 29.283 37.7227 28.7307H35.7227ZM37.7227 33.5508C37.7227 32.9985 37.2749 32.5508 36.7227 32.5508C36.1704 32.5508 35.7227 32.9985 35.7227 33.5508H37.7227ZM56.7826 32.9863C56.7826 33.5386 57.2304 33.9863 57.7826 33.9863C58.3349 33.9863 58.7826 33.5386 58.7826 32.9863H56.7826ZM58.7826 36.5905C58.7826 36.0382 58.3349 35.5905 57.7826 35.5905C57.2304 35.5905 56.7826 36.0382 56.7826 36.5905H58.7826ZM48.1002 26.7332C48.1002 26.1809 47.6525 25.7332 47.1002 25.7332C46.5479 25.7332 46.1002 26.1809 46.1002 26.7332H48.1002ZM46.1002 32.3349C46.1002 32.8872 46.5479 33.3349 47.1002 33.3349C47.6525 33.3349 48.1002 32.8872 48.1002 32.3349H46.1002ZM34.5043 54.9147V56.6673H36.5043V54.9147H34.5043ZM34.4108 56.7607H23.0935V58.7607H34.4108V56.7607ZM23 56.6673V54.2002H21V56.6673H23ZM25.2804 51.9197H40.2812V49.9197H25.2804V51.9197ZM40.842 51.7477L47.703 47.1014L46.5815 45.4454L39.7205 50.0917L40.842 51.7477ZM48.1423 46.2734V42.0615H46.1423V46.2734H48.1423ZM23 54.2002C23 52.9407 24.021 51.9197 25.2804 51.9197V49.9197C22.9164 49.9197 21 51.8361 21 54.2002H23ZM23.0935 56.7607C23.0418 56.7607 23 56.7189 23 56.6673H21C21 57.8235 21.9373 58.7607 23.0935 58.7607V56.7607ZM34.5043 56.6673C34.5043 56.7189 34.4624 56.7607 34.4108 56.7607V58.7607C35.567 58.7607 36.5043 57.8235 36.5043 56.6673H34.5043ZM32.3 42.6939C32.3 44.8727 30.5338 46.6389 28.3551 46.6389V48.6389C31.6384 48.6389 34.3 45.9772 34.3 42.6939H32.3ZM28.3551 46.6389C26.1764 46.6389 24.4102 44.8727 24.4102 42.6939H22.4102C22.4102 45.9772 25.0718 48.6389 28.3551 48.6389V46.6389ZM24.4102 42.6939C24.4102 40.5152 26.1764 38.749 28.3551 38.749V36.749C25.0718 36.749 22.4102 39.4107 22.4102 42.6939H24.4102ZM28.3551 38.749C30.5338 38.749 32.3 40.5152 32.3 42.6939H34.3C34.3 39.4107 31.6384 36.749 28.3551 36.749V38.749ZM54.5022 21H40.0031V23H54.5022V21ZM40.0031 42.9751H54.5022V40.9751H40.0031V42.9751ZM35.7227 25.2804V28.7307H37.7227V25.2804H35.7227ZM35.7227 33.5508V38.6947H37.7227V33.5508H35.7227ZM58.7826 32.9863V25.2804H56.7826V32.9863H58.7826ZM58.7826 38.6947V36.5905H56.7826V38.6947H58.7826ZM46.1002 26.7332V32.3349H48.1002V26.7332H46.1002ZM54.5022 42.9751C56.8662 42.9751 58.7826 41.0587 58.7826 38.6947H56.7826C56.7826 39.9541 55.7617 40.9751 54.5022 40.9751V42.9751ZM40.0031 40.9751C38.7436 40.9751 37.7227 39.9541 37.7227 38.6947H35.7227C35.7227 41.0587 37.6391 42.9751 40.0031 42.9751V40.9751ZM40.0031 21C37.6391 21 35.7227 22.9164 35.7227 25.2804H37.7227C37.7227 24.021 38.7436 23 40.0031 23V21ZM54.5022 23C55.7617 23 56.7826 24.021 56.7826 25.2804H58.7826C58.7826 22.9164 56.8662 21 54.5022 21V23ZM47.125 36.2607V38.2607C48.2296 38.2607 49.125 37.3653 49.125 36.2607H47.125ZM47.125 36.2607H45.125C45.125 37.3653 46.0204 38.2607 47.125 38.2607V36.2607ZM47.125 36.2607V34.2607C46.0204 34.2607 45.125 35.1562 45.125 36.2607H47.125ZM47.125 36.2607H49.125C49.125 35.1562 48.2296 34.2607 47.125 34.2607V36.2607Z"
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
                      translations.homeService.card7.servicesDetails
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
                      width="81"
                      height="80"
                      viewBox="0 0 81 80"
                      fill="none"
                    >
                      <path
                        d="M49.9013 44.2283C47.004 49.5468 47.7654 55.9328 48.5084 58.461M38.9435 52.8428C38.1244 53.0094 37.1242 53.1537 36.0646 53.2248M36.0646 53.2248C32.3589 53.4733 27.9278 52.8255 27.9856 49.0973C27.9986 48.2546 29.2841 46.0129 26.7783 44.5092C25.5301 43.7601 24.1372 42.9173 26.1283 40.951C26.9331 39.8273 27.7069 38.5164 27.4283 33.8346C27.4283 30.1204 29.7871 22.7481 39.222 22.9728C42.4841 23.0505 42.8755 23.4005 42.8755 23.4005M36.0646 53.2248C36.4361 53.6905 37.0676 55.3897 36.6218 58.461M46.8085 27.1592L47.5248 26.8088C47.7588 26.6944 47.9212 26.4719 47.9588 26.2142L48.1836 24.6749C48.2402 24.2873 48.5725 24 48.9642 24H50.2844C50.6761 24 51.0084 24.2873 51.065 24.6749L51.2837 26.1724C51.3247 26.4528 51.5129 26.6897 51.7768 26.793L52.7926 27.1905C53.0816 27.3035 53.4099 27.2367 53.6317 27.0198L54.2496 26.4153C54.5562 26.1154 55.0463 26.1154 55.3529 26.4153L55.9557 27.0051C56.1851 27.2295 56.2557 27.5705 56.1343 27.8675L55.6589 29.0301C55.5998 29.1747 55.5849 29.3336 55.6162 29.4867L55.8427 30.5946C55.9083 30.9155 56.1654 31.1625 56.4886 31.2152L57.5906 31.3949C57.9722 31.4571 58.2525 31.7868 58.2525 32.1734V33.083C58.2525 33.4696 57.9722 33.7993 57.5906 33.8615L56.3877 34.0577C56.1168 34.1018 55.8883 34.2836 55.7845 34.5377L55.3624 35.5699C55.2529 35.8377 55.2988 36.1439 55.4819 36.3679L56.2618 37.3215C56.5204 37.6378 56.4948 38.0991 56.2028 38.3848L55.3529 39.2162C55.0463 39.5161 54.5562 39.5161 54.2496 39.2162L53.6317 38.6118C53.4099 38.3948 53.0816 38.328 52.7926 38.4411L51.7653 38.8431C51.5076 38.9439 51.3215 39.1724 51.2751 39.4452L51.0783 40.6C51.0137 40.9791 50.6852 41.2564 50.3006 41.2564H49.3315C48.9469 41.2564 48.6184 40.9791 48.5538 40.6L48.357 39.4452C48.3106 39.1724 48.1245 38.9439 47.8668 38.8431L46.7839 38.4193C46.5241 38.3177 46.23 38.3608 46.0103 38.5327L44.9914 39.3301C44.68 39.5738 44.2362 39.5493 43.9536 39.2728L43.0044 38.3442C42.7302 38.076 42.6886 37.6494 42.906 37.3333L43.5933 36.3336C43.7356 36.1267 43.7709 35.8644 43.6882 35.6272L43.4514 34.9474C43.3562 34.6741 43.119 34.4749 42.8334 34.4283L41.658 34.2367C41.2764 34.1745 40.9961 33.8448 40.9961 33.4581V32.1734C40.9961 31.7868 41.2764 31.4571 41.658 31.3949L42.7874 31.2107C43.0969 31.1603 43.3471 30.9313 43.4248 30.6274L43.5978 29.9504C43.6506 29.7437 43.6175 29.5245 43.506 29.3426L42.859 28.2877C42.6665 27.974 42.7166 27.5688 42.9798 27.3114L43.9536 26.3588C44.2362 26.0822 44.68 26.0577 44.9914 26.3014L45.9757 27.0718C46.2137 27.258 46.5371 27.2919 46.8085 27.1592ZM52.2813 32.6284C52.2813 34.0962 51.0913 35.2861 49.6235 35.2861C48.1557 35.2861 46.9658 34.0962 46.9658 32.6284C46.9658 31.1606 48.1557 29.9706 49.6235 29.9706C51.0913 29.9706 52.2813 31.1606 52.2813 32.6284Z"
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
                      translations.homeService.card7.servicesDetails
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
                        d="M24.918 33.5982V24.5205L40.6698 40.0002M24.918 33.5982H28.424M24.918 33.5982V41.4215M24.918 41.4215H28.424M24.918 41.4215V49.3397M24.918 49.3397V55.48H56.4216L53.4797 52.5889M24.918 49.3397H28.424M44.918 47.1772V30.7656L47.918 25.5371L50.8223 30.7656V47.1772M44.918 47.1772V51.8247H50.8223V47.1772M44.918 47.1772H50.8223M32.9648 40.4963V47.9998H39.8813"
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
                      translations.homeService.card7.servicesDetails
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
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M11.5079 5.2381L8.82549 2.51417C7.3226 0.988012 4.90265 0.934614 3.33589 2.39304C1.66982 3.94392 1.61315 6.59237 3.21131 8.21528L19.3189 24.5723M19.3189 24.5723L24.4449 19.3669M19.3189 24.5723C19.0748 26.0595 20.0024 29.4802 25.6654 31.2649M24.4449 19.3669L19.7646 14.1616M24.4449 19.3669C25.584 19.3669 28.1551 19.8131 29.3268 21.5978C30.4984 23.3825 31.9304 29.9429 32.5 33L29.815 32.2564M19.7646 14.1616L14.1929 7.96471M19.7646 14.1616L16.3265 17.5249M24.9331 14.6573L30.0584 9.14644C31.8258 7.24615 31.7838 4.26294 29.9637 2.41468C28.1224 0.544884 25.1429 0.526207 23.279 2.37278L16.6339 8.95621M7.11417 18.6233L3.94094 22.0935L1.5 31.2649L10.2874 29.2819L14.6811 25.068"
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
                      translations.homeService.card7.servicesDetails
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
                        d="M15.9961 47.1703V29.617C15.9961 26.5148 18.5109 24 21.6131 24H31.0919C34.0002 24 36.3579 26.3577 36.3579 29.266M36.3579 33.1277V51.3831C36.3579 54.4853 33.843 57.0001 30.7408 57.0001H21.6131C18.5109 57.0001 15.9961 54.4853 15.9961 51.3831M44.6758 47.1703V29.617C44.6758 26.5148 47.1906 24 50.2928 24H59.7716C62.6799 24 65.0376 26.3577 65.0376 29.266M65.0376 33.1277V51.3831C65.0376 54.4853 62.5227 57.0001 59.4205 57.0001H50.2928C47.1906 57.0001 44.6758 54.4853 44.6758 51.3831M24.4219 27.5107H27.9325M53.1016 27.5107H56.6122M48.8867 48.5742L60.8229 48.5742M48.8867 51.3828H53.0995M33.1445 50.33H39.1126C39.8882 50.33 40.5169 49.7013 40.5169 48.9258V43.6598M43.6765 30.6704H41.9212C41.1456 30.6704 40.5169 31.2991 40.5169 32.0747V37.6917M30.739 47.8726H21.6113C20.8357 47.8726 20.207 48.5013 20.207 49.2768V51.3832C20.207 52.1588 20.8357 52.7875 21.6113 52.7875H30.739C31.5145 52.7875 32.1432 52.1588 32.1432 51.3832V49.2768C32.1432 48.5013 31.5145 47.8726 30.739 47.8726ZM59.4187 31.7231H50.291C49.5154 31.7231 48.8867 32.3519 48.8867 33.1274V41.553C48.8867 42.3285 49.5154 42.9572 50.291 42.9572H59.4187C60.1942 42.9572 60.8229 42.3285 60.8229 41.553V33.1274C60.8229 32.3519 60.1942 31.7231 59.4187 31.7231ZM41.0255 40.8511C41.0255 41.1313 40.7983 41.3585 40.518 41.3585C40.2378 41.3585 40.0106 41.1313 40.0106 40.8511C40.0106 40.5708 40.2378 40.3436 40.518 40.3436C40.7983 40.3436 41.0255 40.5708 41.0255 40.8511Z"
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
                      translations.homeService.card7.servicesDetails
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

export default Design;
