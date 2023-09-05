import React from "react";
import "./Footer.css";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MySlider from "./MySlider";
import MessageForm from "./MessageForm";
import Triangle from "../svg-icons/Triangle";
import Cloud from "../svg-icons/Cloud";

// console.log("year", new Date().getFullYear());
const Footer = ({ translations, lang, darkMode }) => {
  return (
    <footer style={{ overflow: "hidden" }}>
      <Container
        maxWidth="xl"
        style={{
          paddingTop: "76px",
          paddingBottom: "33px",
          position: "relative",
        }}
      >
        <Triangle
          lang={lang}
          color={darkMode && "#ABCCFE"}
          myClass="footer_triangle1 hide_for_tab_and_smaller_view"
          //  rtlClass="top_triangle1_for_rtl"
        />
        <Triangle
          lang={lang}
          color={darkMode ? "#FF7539" : "#FFC93C"}
          myClass="footer_triangle2 hide_for_tab_and_smaller_view"
          //  rtlClass="top_triangle1_for_rtl"
        />
        <Cloud
          lang={lang}
          color={darkMode && "#10214B"}
          myClass="footer_cloud1 hide_for_tab_and_smaller_view"
          // rtlClass="top_cloud1_for_rtl"
        />
        <Cloud
          lang={lang}
          color={darkMode && "#10214B"}
          myClass="footer_cloud2 hide_for_tab_and_smaller_view"
          // rtlClass="top_cloud1_for_rtl"
        />
        <Cloud
          lang={lang}
          color={darkMode && "#10214B"}
          myClass="footer_cloud3 hide_for_tab_and_smaller_view"
          // rtlClass="top_cloud1_for_rtl"
        />
        <Cloud
          lang={lang}
          color={darkMode && "#10214B"}
          myClass="footer_cloud4 hide_for_tab_and_smaller_view"
          // rtlClass="top_cloud1_for_rtl"
        />
        <Grid
          container
          spacing={4}
          style={{ position: "inherit", zIndex: 100 }}
        >
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <p className={`footer_title ${darkMode && "white"}`}>
              {translations.footer.titleAboutNewroz}
            </p>
            <p
              className={`footer_item ${darkMode && "white"}`}
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                fontSize: "14px",
                lineHeight: "22px",
                maxWidth: "90%",
              }}
            >
              {translations.footer.aboutNewrozDetails}
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginRight: "27px" }}
              >
                <path
                  d="M19.9991 8.49275C19.3991 8.75813 18.7658 8.92399 18.0992 9.02351C18.7658 8.62544 19.2991 7.99517 19.5325 7.23221C18.8992 7.5971 18.1992 7.86248 17.4326 8.02834C16.8326 7.39807 15.966 7 15.0327 7C13.2328 7 11.7662 8.45958 11.7662 10.2509C11.7662 10.5163 11.7996 10.7485 11.8662 10.9807C9.16638 10.848 6.73318 9.55427 5.09994 7.56393C4.83329 8.06151 4.66663 8.59227 4.66663 9.18937C4.66663 10.3172 5.23326 11.3124 6.13321 11.9095C5.59991 11.8763 5.09994 11.7436 4.6333 11.5114V11.5446C4.6333 13.1369 5.76657 14.4638 7.26648 14.7623C6.99983 14.8287 6.69985 14.8618 6.39987 14.8618C6.19988 14.8618 5.96656 14.8287 5.76657 14.7955C6.19988 16.0892 7.39981 17.0512 8.83306 17.0512C7.69979 17.9137 6.29987 18.4444 4.76662 18.4444C4.49997 18.4444 4.23332 18.4444 4 18.4113C5.46658 19.3401 7.16649 19.8708 9.03305 19.8708C15.066 19.8708 18.3659 14.895 18.3659 10.5826C18.3659 10.4499 18.3659 10.2841 18.3659 10.1514C18.9992 9.72013 19.5658 9.1562 19.9991 8.49275Z"
                  fill="#525252"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginRight: "27px" }}
              >
                <path
                  d="M9.67591 20.3491V12.4353H7V9.35121H9.67591V7.07675C9.67591 4.43726 11.2958 3 13.6617 3C14.795 3 15.769 3.08397 16.0528 3.12151V5.87993L14.4119 5.88067C13.1252 5.88067 12.8761 6.48918 12.8761 7.38213V9.35121H15.9448L15.5452 12.4353H12.8761V20.3491H9.67591Z"
                  fill="#525252"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginRight: "27px" }}
              >
                <path
                  d="M8.14795 6.55625C8.14775 6.96878 7.98172 7.36434 7.68639 7.6559C7.39107 7.94746 6.99063 8.11115 6.57319 8.11094C6.15575 8.11073 5.75548 7.94666 5.46045 7.6548C5.16542 7.36295 4.99979 6.96723 5 6.55469C5.00021 6.14216 5.16624 5.7466 5.46156 5.45504C5.75689 5.16348 6.15732 4.99979 6.57476 5C6.99221 5.00021 7.39247 5.16428 7.6875 5.45614C7.98253 5.74799 8.14816 6.14371 8.14795 6.55625ZM8.19517 9.26276H5.04722V19H8.19517V9.26276ZM13.1689 9.26276H10.0367V19H13.1375V13.8903C13.1375 11.0438 16.8914 10.7793 16.8914 13.8903V19H20V12.8326C20 8.03394 14.4439 8.21282 13.1375 10.5694L13.1689 9.26276Z"
                  fill="#525252"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginRight: "27px" }}
              >
                <path
                  d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                  fill="#525252"
                />
              </svg>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={2}>
            <p className={`footer_title ${darkMode && "white"}`}>
              {" "}
              {translations.footer.titleAbout}
            </p>
            <ul className={`footer_list ${darkMode && "footer_list_dark"}`}>
              <li>
                <Link
                  to="/company"
                  className={`link_style ${darkMode && "link_style_dark"}`}
                >
                  {translations.footer.aboutUs}
                </Link>
              </li>

              {/* <li>{translations.footer.blog}</li> */}
              <li>
                <Link
                  to="/career"
                  className={`link_style ${darkMode && "link_style_dark"}`}
                >
                  {translations.footer.careers}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`link_style ${darkMode && "link_style_dark"}`}
                >
                  {translations.footer.services}{" "}
                </Link>
              </li>
              <li>{translations.footer.Portfolio}</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <p className={`footer_title ${darkMode && "white"}`}>
              {translations.footer.titleSoftwareEngineering}
            </p>
            <ul className={`footer_list ${darkMode && "footer_list_dark"}`}>
              <li>{translations.footer.webAppDevelopment}</li>
              <li>{translations.footer.mobileAppDevelopment}</li>
              <li>{translations.footer.cloudConsultancy}</li>
              <li>{translations.footer.customSoftwareDevelopment}</li>
              <li>{translations.footer.inPress}</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <p className={`footer_title ${darkMode && "white"}`}>
              {translations.footer.titleCentersofExcellence}
            </p>
            <ul className={`footer_list ${darkMode && "footer_list_dark"}`}>
              <li>{translations.footer.technicalDebtReduction}</li>
              <li>{translations.footer.roboticProcessAutomation}</li>
              <li>{translations.footer.aIAndMachineLearning}</li>
              <li>{translations.footer.chatbots}</li>
            </ul>
          </Grid>
        </Grid>
      </Container>

      <div style={{ borderTop: "1px solid #D0D5DD" }}>
        <Container maxWidth="xl" style={{ padding: "24px 0px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8} md={8}>
              <Grid container>
                {/* <p
                  className={`footer_item ${darkMode && "white"}`}
                  style={{ margin: "0 40px 0 0" }}
                >
                  {translations.footer.aboutUs}
                </p>

                <p
                  className={`footer_item ${darkMode && "white"}`}
                  style={{ margin: "0 40px 0 0" }}
                >
                  {translations.footer.contact}
                </p> */}
                <p
                  className={`footer_item ${darkMode && "white"}`}
                  style={{ margin: "0 40px 0 0" }}
                >
                  {translations.footer.privacyPolicy}
                </p>
                <p
                  className={`footer_item ${darkMode && "white"}`}
                  style={{ margin: "0 40px 0 0" }}
                >
                  {translations.footer.sitemap}
                </p>
                <p
                  className={`footer_item ${darkMode && "white"}`}
                  style={{ margin: "0 40px 0 0" }}
                >
                  {translations.footer.termsOfUse}
                </p>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={4} className="hideForMobileViewOnly">
              <p
                className={`footer_item ${darkMode && "white"}`}
                style={{ textAlign: "right" }}
              >
                &copy; 2019-{new Date().getFullYear()},{" "}
                {translations.footer.allRightsReserved}
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
