import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Cloud from "../../svg-icons/Cloud";
import Triangle from "../../svg-icons/Triangle";
import GlowBG from "../../svg-icons/GlowBG";
import { Link } from "react-router-dom";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Blockchain = ({ translations, lang, darkMode }) => {
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
          className="journey_holder upper_slide"
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
              {translations.homeService.card4.title}
            </h2>
            <p
              className="text_body_small_regular fw400 center mb8"
              style={{ textTransform: "uppercase" }}
            >
              {translations.homeService.card4.subtitle}
            </p>
            <div className="detail_text_container">
              <p
                className={`text_body_small_regular fw400 center ${
                  darkMode ? "white" : "black2"
                }`}
              >
                {translations.homeService.card4.details}
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
                  translations.homeService.card4.servicesDetails.cardSection1
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
                      className={`text_body_medium fw500 mb8 ${
                        darkMode ? "lightBlue" : "deepBlue"
                      }`}
                    >
                      {
                        translations.homeService.card4.servicesDetails
                          .cardSection1.card1.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card4.servicesDetails
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
                        translations.homeService.card4.servicesDetails
                          .cardSection1.card2.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card4.servicesDetails
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
                        translations.homeService.card4.servicesDetails
                          .cardSection1.card3.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card4.servicesDetails
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
                        translations.homeService.card4.servicesDetails
                          .cardSection1.card4.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card4.servicesDetails
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
                        translations.homeService.card4.servicesDetails
                          .cardSection1.card5.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card4.servicesDetails
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
                        translations.homeService.card4.servicesDetails
                          .cardSection1.card6.title
                      }
                    </h4>
                    <p
                      className="text_body_small_regular fw400"
                      style={{ color: darkMode ? "#C7C7C7" : "#525252" }}
                    >
                      {
                        translations.homeService.card4.servicesDetails
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
                translations.homeService.card4.servicesDetails.cardSection2
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
                      width="49"
                      height="51"
                      viewBox="0 0 49 51"
                      fill="none"
                    >
                      <path
                        d="M27.6249 15.565H32.4527C33.4848 15.565 34.3215 14.759 34.3215 13.7648V12.2646M27.6249 15.565H21.7071M27.6249 15.565V19.4653M21.7071 15.565H16.8794C15.8473 15.565 15.0106 14.759 15.0106 13.7648V8.76423M21.7071 15.565V19.4653M15.0106 5.51402V3.56384C15.0106 2.56963 15.8473 1.76367 16.8794 1.76367H32.4527C33.4848 1.76367 34.3215 2.56963 34.3215 3.56384V8.86442M27.6249 19.4653H30.5839M27.6249 19.4653H21.7071M18.7482 19.4653H21.7071M8.02855 45.3359H3.20083C2.16872 45.3359 1.33203 44.5299 1.33203 43.5357V42.0356M8.02855 45.3359H13.9464M8.02855 45.3359V49.2363M13.9464 45.3359H18.7741C19.8062 45.3359 20.6429 44.5299 20.6429 43.5357V38.5352M13.9464 45.3359V49.2363M20.6429 35.285V33.3348C20.6429 32.3406 19.8062 31.5346 18.7741 31.5346H3.20083C2.16872 31.5346 1.33203 32.3406 1.33203 33.3348V38.6354M8.02855 49.2363H5.06962M8.02855 49.2363H13.9464M16.9053 49.2363H13.9464M35.3856 45.3359H30.5579C29.5258 45.3359 28.6891 44.5299 28.6891 43.5357V42.0356M35.3856 45.3359H41.3035M35.3856 45.3359V49.2363M41.3035 45.3359H46.1312C47.1633 45.3359 48 44.5299 48 43.5357V38.5352M41.3035 45.3359V49.2363M48 35.285V33.3348C48 32.3406 47.1633 31.5346 46.1312 31.5346H30.5579C29.5258 31.5346 28.6891 32.3406 28.6891 33.3348V38.6354M35.3856 49.2363H32.4267M35.3856 49.2363H41.3035M44.2624 49.2363H41.3035M10.5852 29.1208V27.1092C10.5852 26.2204 11.3056 25.5 12.1944 25.5H24.8672M39.1492 29.1208V27.1092C39.1492 26.2204 38.4287 25.5 37.5399 25.5H24.8672M24.8672 25.5V21.8792"
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
                      translations.homeService.card4.servicesDetails
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
                      height="49"
                      viewBox="0 0 34 49"
                      fill="none"
                    >
                      <path
                        d="M25.5428 43.8H14.7714C13.8562 43.8 13.1142 43.0581 13.1142 42.1429V33.0286M13.1142 17.2857V22.2572M13.1142 22.2572H25.5428M13.1142 22.2572V33.0286M13.1142 33.0286H25.5428M18.8519 14.8519C17.7171 15.9867 16.2712 16.7595 14.6972 17.0726C13.1232 17.3857 11.4917 17.225 10.009 16.6109C8.52631 15.9967 7.25903 14.9567 6.36742 13.6223C5.47581 12.2879 4.99992 10.7191 4.99992 9.11426M1.62695 10.1309L5.15841 6.79476L8.28232 10.5153M7.37659 3.37662C8.5114 2.24182 9.95722 1.46901 11.5312 1.15592C13.1053 0.842826 14.7368 1.00352 16.2195 1.61767C17.7022 2.23182 18.9694 3.27185 19.861 4.60623C20.7527 5.94062 21.2285 7.50944 21.2285 9.11429M24.4547 8.55911L20.9131 11.5174L18.167 7.80889M27.3714 18.9429H31.9999C32.5522 18.9429 32.9999 19.3906 32.9999 19.9429V24.5715C32.9999 25.1237 32.5522 25.5715 31.9999 25.5715H27.3714C26.8191 25.5715 26.3714 25.1237 26.3714 24.5715V19.9429C26.3714 19.3906 26.8191 18.9429 27.3714 18.9429ZM27.3714 29.7143H31.9999C32.5522 29.7143 32.9999 30.162 32.9999 30.7143V35.3429C32.9999 35.8952 32.5522 36.3429 31.9999 36.3429H27.3714C26.8191 36.3429 26.3714 35.8952 26.3714 35.3429V30.7143C26.3714 30.162 26.8191 29.7143 27.3714 29.7143ZM27.3714 40.4857H31.9999C32.5522 40.4857 32.9999 40.9335 32.9999 41.4857V46.1143C32.9999 46.6666 32.5522 47.1143 31.9999 47.1143H27.3714C26.8191 47.1143 26.3714 46.6666 26.3714 46.1143V41.4857C26.3714 40.9335 26.8191 40.4857 27.3714 40.4857Z"
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
                      translations.homeService.card4.servicesDetails
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
                        d="M37.24 25.4248L37.7553 24.5677L37.7544 24.5672L37.24 25.4248ZM35.7162 25V26V25ZM34.1924 25.4248L33.6781 24.5672L33.6772 24.5677L34.1924 25.4248ZM23.5258 31.8374L23.0105 30.9804L23.0099 30.9808L23.5258 31.8374ZM23.5258 50.1618L24.041 49.3047L24.0406 49.3045L23.5258 50.1618ZM34.1924 56.5744L33.6772 57.4315L33.6781 57.432L34.1924 56.5744ZM37.24 56.5744L37.7544 57.432L37.7553 57.4315L37.24 56.5744ZM47.9067 50.1618L48.422 51.0188L48.4226 51.0184L47.9067 50.1618ZM22.9318 32.0814C22.4595 31.7952 21.8445 31.9459 21.5582 32.4182C21.2719 32.8905 21.4227 33.5055 21.895 33.7918L22.9318 32.0814ZM39.4867 27.9422C39.96 28.2268 40.5744 28.0738 40.859 27.6004C41.1436 27.1271 40.9905 26.5127 40.5172 26.2282L39.4867 27.9422ZM39.0203 40.1669C39.4926 39.8807 39.6434 39.2657 39.3571 38.7934C39.0708 38.3211 38.4559 38.1703 37.9836 38.4566L39.0203 40.1669ZM50.4305 45C50.4305 44.4477 49.9828 44 49.4305 44C48.8782 44 48.4305 44.4477 48.4305 45H50.4305ZM45.6397 32.5886C45.2137 32.2372 44.5834 32.2976 44.232 32.7236C43.8805 33.1496 43.9409 33.7799 44.3669 34.1314L45.6397 32.5886ZM47.4202 35.354L46.7839 36.1253L47.4202 35.354ZM48.8375 35.2073L49.6184 35.832L48.8375 35.2073ZM53.7842 30.6247C54.1292 30.1934 54.0593 29.5641 53.628 29.2191C53.1968 28.8741 52.5675 28.944 52.2225 29.3753L53.7842 30.6247ZM37.7544 24.5672C37.137 24.1969 36.4343 24 35.7162 24V26C36.0671 26 36.4149 26.096 36.7257 26.2824L37.7544 24.5672ZM35.7162 24C34.9982 24 34.2955 24.1969 33.6781 24.5672L34.7068 26.2824C35.0176 26.096 35.3653 26 35.7162 26V24ZM33.6772 24.5677L23.0105 30.9804L24.041 32.6945L34.7077 26.2818L33.6772 24.5677ZM23.0099 30.9808C21.7554 31.7361 21.002 33.1155 21.002 34.5862H23.002C23.002 33.7913 23.4096 33.0747 24.0416 32.6941L23.0099 30.9808ZM21.002 34.5862V47.4146H23.002V34.5862H21.002ZM21.002 47.4146C21.002 48.887 21.7556 50.2652 23.011 51.0191L24.0406 49.3045C23.4095 48.9255 23.002 48.2111 23.002 47.4146H21.002ZM23.0105 51.0188L33.6772 57.4315L34.7077 55.7174L24.041 49.3047L23.0105 51.0188ZM33.6781 57.432C34.2955 57.8023 34.9982 57.9992 35.7162 57.9992V55.9992C35.3653 55.9992 35.0176 55.9032 34.7068 55.7168L33.6781 57.432ZM35.7162 57.9992C36.4343 57.9992 37.137 57.8023 37.7544 57.432L36.7257 55.7168C36.4149 55.9032 36.0671 55.9992 35.7162 55.9992V57.9992ZM37.7553 57.4315L48.422 51.0188L47.3915 49.3047L36.7248 55.7174L37.7553 57.4315ZM48.4226 51.0184C49.677 50.2631 50.4305 48.8837 50.4305 47.413H48.4305C48.4305 48.2079 48.0229 48.9245 47.3909 49.3051L48.4226 51.0184ZM36.7162 56.9992V41.0004H34.7162V56.9992H36.7162ZM21.895 33.7918L35.1979 41.8556L36.2346 40.1452L22.9318 32.0814L21.895 33.7918ZM40.5172 26.2282L37.7553 24.5677L36.7248 26.2818L39.4867 27.9422L40.5172 26.2282ZM36.2346 41.8556L39.0203 40.1669L37.9836 38.4566L35.1979 40.1452L36.2346 41.8556ZM50.4305 47.413V45H48.4305V47.413H50.4305ZM55.9818 33.0444C55.9818 36.874 52.8774 39.9785 49.0478 39.9785V41.9785C53.9819 41.9785 57.9818 37.9786 57.9818 33.0444H55.9818ZM49.0478 39.9785C45.2182 39.9785 42.1137 36.874 42.1137 33.0444H40.1137C40.1137 37.9786 44.1136 41.9785 49.0478 41.9785V39.9785ZM42.1137 33.0444C42.1137 29.2149 45.2182 26.1104 49.0478 26.1104V24.1104C44.1136 24.1104 40.1137 28.1103 40.1137 33.0444H42.1137ZM49.0478 26.1104C52.8774 26.1104 55.9818 29.2149 55.9818 33.0444H57.9818C57.9818 28.1103 53.9819 24.1104 49.0478 24.1104V26.1104ZM44.3669 34.1314L46.7839 36.1253L48.0566 34.5826L45.6397 32.5886L44.3669 34.1314ZM49.6184 35.832L53.7842 30.6247L52.2225 29.3753L48.0566 34.5826L49.6184 35.832ZM46.7839 36.1253C47.645 36.8358 48.921 36.7037 49.6184 35.832L48.0566 34.5826V34.5826L46.7839 36.1253Z"
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
                      translations.homeService.card4.servicesDetails
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
                        d="M50.7778 32.9139H51.7778L51.7778 32.9121L50.7778 32.9139ZM49.179 30.2317L48.6908 31.1044L48.6927 31.1054L49.179 30.2317ZM37.9877 23.9704L38.4759 23.0977L38.4751 23.0972L37.9877 23.9704ZM36.3889 23.5557V24.5557V23.5557ZM34.7901 23.9704L34.3027 23.0972L34.3019 23.0977L34.7901 23.9704ZM23.5988 30.2317L23.1105 29.3589L23.1099 29.3593L23.5988 30.2317ZM23.5988 48.1233L24.087 47.2506L24.0866 47.2504L23.5988 48.1233ZM34.7901 54.3846L34.3019 55.2573L34.3027 55.2577L34.7901 54.3846ZM37.9877 54.3846L38.4751 55.2577C38.4809 55.2545 38.4867 55.2511 38.4925 55.2478L37.9877 54.3846ZM50.8374 32.1758C51.3185 31.9045 51.4884 31.2946 51.2171 30.8135C50.9457 30.3325 50.3358 30.1625 49.8548 30.4339L50.8374 32.1758ZM22.923 30.4339C22.442 30.1625 21.832 30.3325 21.5607 30.8135C21.2893 31.2946 21.4593 31.9045 21.9403 32.1758L22.923 30.4339ZM49.7778 36C49.7778 36.5523 50.2255 37 50.7778 37C51.3301 37 51.7778 36.5523 51.7778 36H49.7778ZM40.0049 54.3632C40.4816 54.0844 40.642 53.4718 40.3632 52.9951C40.0844 52.5184 39.4718 52.358 38.9951 52.6368L40.0049 54.3632ZM50.9562 44.1112C50.9562 43.5589 50.5085 43.1112 49.9562 43.1112C49.4039 43.1112 48.9562 43.5589 48.9562 44.1112H50.9562ZM48.9562 50.689C48.9562 51.2413 49.4039 51.689 49.9562 51.689C50.5085 51.689 50.9562 51.2413 50.9562 50.689H48.9562ZM53.2451 48.4001C53.7974 48.4001 54.2451 47.9524 54.2451 47.4001C54.2451 46.8478 53.7974 46.4001 53.2451 46.4001V48.4001ZM46.6673 46.4001C46.115 46.4001 45.6673 46.8478 45.6673 47.4001C45.6673 47.9524 46.115 48.4001 46.6673 48.4001V46.4001ZM51.7778 32.9121C51.7765 32.1863 51.5788 31.475 51.2067 30.8506L49.4887 31.8746C49.678 32.1923 49.7771 32.5514 49.7778 32.9157L51.7778 32.9121ZM51.2067 30.8506C50.8346 30.2265 50.3021 29.7123 49.6653 29.3579L48.6927 31.1054C49.0254 31.2906 49.2992 31.5568 49.4887 31.8746L51.2067 30.8506ZM49.6673 29.3589L38.4759 23.0977L37.4994 24.8431L48.6908 31.1044L49.6673 29.3589ZM38.4751 23.0972C37.8383 22.7418 37.1193 22.5557 36.3889 22.5557V24.5557C36.78 24.5557 37.1632 24.6555 37.5003 24.8436L38.4751 23.0972ZM36.3889 22.5557C35.6585 22.5557 34.9395 22.7418 34.3027 23.0972L35.2775 24.8436C35.6146 24.6555 35.9977 24.5557 36.3889 24.5557V22.5557ZM34.3019 23.0977L23.1105 29.3589L24.087 31.1044L35.2784 24.8431L34.3019 23.0977ZM23.1099 29.3593C21.8143 30.0853 21 31.4366 21 32.9155H23C23 32.1823 23.4039 31.4871 24.0876 31.104L23.1099 29.3593ZM21 32.9155V45.4411H23V32.9155H21ZM21 45.4411C21 46.9216 21.8145 48.2718 23.111 48.9963L24.0866 47.2504C23.4038 46.8688 23 46.1757 23 45.4411H21ZM23.1105 48.996L34.3019 55.2573L35.2784 53.5119L24.087 47.2506L23.1105 48.996ZM34.3027 55.2577C34.9395 55.6132 35.6585 55.7993 36.3889 55.7993V53.7993C35.9977 53.7993 35.6146 53.6995 35.2775 53.5114L34.3027 55.2577ZM36.3889 55.7993C37.1193 55.7993 37.8383 55.6132 38.4751 55.2577L37.5003 53.5114C37.1632 53.6995 36.78 53.7993 36.3889 53.7993V55.7993ZM37.3889 54.7993V39.1783H35.3889V54.7993H37.3889ZM36.8802 40.0493L50.8374 32.1758L49.8548 30.4339L35.8976 38.3073L36.8802 40.0493ZM21.9403 32.1758L35.8976 40.0493L36.8802 38.3073L22.923 30.4339L21.9403 32.1758ZM51.7778 36V32.9139H49.7778V36H51.7778ZM38.4925 55.2478L40.0049 54.3632L38.9951 52.6368L37.4828 53.5214L38.4925 55.2478ZM56.612 47.4C56.612 51.0764 53.6317 54.0568 49.9553 54.0568V56.0568C54.7362 56.0568 58.612 52.181 58.612 47.4H56.612ZM49.9553 54.0568C46.2788 54.0568 43.2985 51.0764 43.2985 47.4H41.2985C41.2985 52.181 45.1743 56.0568 49.9553 56.0568V54.0568ZM43.2985 47.4C43.2985 43.7236 46.2788 40.7433 49.9553 40.7433V38.7433C45.1743 38.7433 41.2985 42.619 41.2985 47.4H43.2985ZM49.9553 40.7433C53.6317 40.7433 56.612 43.7236 56.612 47.4H58.612C58.612 42.619 54.7362 38.7433 49.9553 38.7433V40.7433ZM48.9562 44.1112V50.689H50.9562V44.1112H48.9562ZM53.2451 46.4001H46.6673V48.4001H53.2451V46.4001Z"
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
                      translations.homeService.card4.servicesDetails
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
                        d="M40.334 28.2611C40.1442 28.2611 39.9577 28.2091 39.7929 28.1102L36.0056 25.8334C35.6707 25.6323 35.4646 25.2607 35.4646 24.858V20.3031C35.4646 19.9009 35.6707 19.5288 36.0056 19.3271L39.7929 17.0502C39.9577 16.9514 40.1442 16.8994 40.334 16.8994C40.5238 16.8994 40.7102 16.9514 40.875 17.0502L44.6623 19.3271C44.8264 19.4252 44.9628 19.5671 45.0578 19.7384C45.1528 19.9097 45.203 20.1043 45.2034 20.3025V24.8574C45.2034 25.2596 44.9972 25.6317 44.6623 25.8334L40.875 28.1102C40.7102 28.2091 40.5238 28.2611 40.334 28.2611ZM40.334 28.2611V22.5805M40.334 28.2611V32.3192M40.334 22.5805L45.0573 19.7174M40.334 22.5805L35.6107 19.7174M40.334 32.3192C40.5238 32.3192 40.7102 32.3712 40.875 32.47L44.6623 34.7469C44.8264 34.845 44.9628 34.9869 45.0578 35.1581C45.1528 35.3294 45.203 35.524 45.2034 35.7223V40.2771C45.2034 40.6793 44.9972 41.0514 44.6623 41.2531L40.875 43.53C40.7102 43.6288 40.5238 43.6808 40.334 43.6808M40.334 32.3192C40.1442 32.3192 39.9577 32.3712 39.7929 32.47L36.0056 34.7469C35.6707 34.9485 35.4646 35.3206 35.4646 35.7228V40.2777C35.4646 40.6805 35.6707 41.052 36.0056 41.2531L39.7929 43.53C39.9577 43.6288 40.1442 43.6808 40.334 43.6808M40.334 43.6808V38.0003M40.334 43.6808V47.7389M40.334 38.0003L45.0573 35.1371M40.334 38.0003L35.6107 35.1371M40.334 47.7389C40.5238 47.7389 40.7102 47.7909 40.875 47.8897L44.6623 50.1666C44.8264 50.2647 44.9628 50.4066 45.0578 50.5779C45.1528 50.7492 45.203 50.9438 45.2034 51.142V55.6969C45.2034 56.0991 44.9972 56.4712 44.6623 56.6729L40.875 58.9497C40.7102 59.0486 40.5238 59.1006 40.334 59.1006M40.334 47.7389C40.1442 47.7389 39.9577 47.7909 39.7929 47.8897L36.0056 50.1666C35.6707 50.3683 35.4646 50.7404 35.4646 51.1426V55.6975C35.4646 56.1002 35.6707 56.4718 36.0056 56.6729L39.7929 58.9497C39.9577 59.0486 40.1442 59.1006 40.334 59.1006M40.334 59.1006V53.42M40.334 53.42L45.0573 50.5569M40.334 53.42L35.6107 50.5569M26.5374 59.1006C26.3476 59.1006 26.1611 59.0486 25.9963 58.9497L22.209 56.6729C21.8741 56.4718 21.668 56.1002 21.668 55.6975V51.1426C21.668 50.7404 21.8741 50.3683 22.209 50.1666L25.9963 47.8897C26.1611 47.7909 26.3476 47.7389 26.5374 47.7389C26.7271 47.7389 26.9136 47.7909 27.0784 47.8897L30.8657 50.1666C31.0298 50.2647 31.1662 50.4066 31.2612 50.5779C31.3562 50.7492 31.4064 50.9438 31.4068 51.142V55.6969C31.4068 56.0991 31.2006 56.4712 30.8657 56.6729L27.0784 58.9497C26.9136 59.0486 26.7271 59.1006 26.5374 59.1006ZM26.5374 59.1006V53.42M26.5374 53.42L31.2607 50.5569M26.5374 53.42L21.8141 50.5569M54.1306 43.6808C53.9408 43.6808 53.7543 43.6288 53.5896 43.53L49.8023 41.2531C49.4673 41.052 49.2612 40.6805 49.2612 40.2777V35.7228C49.2612 35.3206 49.4673 34.9485 49.8023 34.7469L53.5896 32.47C53.7543 32.3712 53.9408 32.3192 54.1306 32.3192C54.3204 32.3192 54.5069 32.3712 54.6716 32.47L58.459 34.7469C58.623 34.845 58.7594 34.9869 58.8544 35.1581C58.9495 35.3294 58.9997 35.524 59 35.7223V40.2771C59 40.6793 58.7939 41.0514 58.459 41.2531L54.6716 43.53C54.5069 43.6288 54.3204 43.6808 54.1306 43.6808ZM54.1306 43.6808V38.0003M54.1306 38.0003L58.8539 35.1371M54.1306 38.0003L49.4073 35.1371M54.1306 59.1006C53.9408 59.1006 53.7543 59.0486 53.5896 58.9497L49.8023 56.6729C49.4673 56.4718 49.2612 56.1002 49.2612 55.6975V51.1426C49.2612 50.7404 49.4673 50.3683 49.8023 50.1666L53.5896 47.8897C53.7543 47.7909 53.9408 47.7389 54.1306 47.7389C54.3204 47.7389 54.5069 47.7909 54.6716 47.8897L58.459 50.1666C58.623 50.2647 58.7594 50.4066 58.8544 50.5779C58.9495 50.7492 58.9997 50.9438 59 51.142V55.6969C59 56.0991 58.7939 56.4712 58.459 56.6729L54.6716 58.9497C54.5069 59.0486 54.3204 59.1006 54.1306 59.1006ZM54.1306 59.1006V53.42M54.1306 53.42L58.8539 50.5569M54.1306 53.42L49.4073 50.5569M45.2034 38.0001H49.2612M45.2034 53.4199H49.2612M35.4646 53.4199H31.4068"
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
                      translations.homeService.card4.servicesDetails
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
                        d="M32.002 40.72L37.6189 45.354C38.0494 45.7092 38.6874 45.6431 39.0361 45.2073L48.002 34M57.002 40C57.002 49.3888 49.3908 57 40.002 57C30.6131 57 23.002 49.3888 23.002 40C23.002 30.6112 30.6131 23 40.002 23C49.3908 23 57.002 30.6112 57.002 40Z"
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
                      translations.homeService.card4.servicesDetails
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

export default Blockchain;
