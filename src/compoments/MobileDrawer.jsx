import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { IconButton, Menu, MenuItem } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import "./Header.css";
const MobileDrawer = ({
  translations,
  lang,
  setLang,
  darkMode,
  languageButtonValue,
  setLanguageButtonValue,
  setDarkMode,
}) => {
  const location = useLocation();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = useState("");
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLanguage = Boolean(anchorEl);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLanguageClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleChange = (id, route) => {
    console.log("id", id);
    console.log("openCollapse", openCollapse);
    if (id === openCollapse) {
      setOpenCollapse("");
    } else {
      setOpenCollapse(id);
    }
    // setOpenCollapse(id);
    navigate(route);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 270 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        className={`mobile_drawer_menu ${
          darkMode && "mobile_drawer_menu_dark"
        } ${lang === "kr" && "mobile_drawer_menu_rtl"}`}
      >
        <div style={{ position: "relative", padding: "10px 15px 15px" }}>
          <img src="/images/logo.png" alt="" style={{ width: "120px" }} />
          <IconButton
            id="closeButton"
            onClick={toggleDrawer(anchor, false)}
            style={{ position: "absolute", right: 7, top: 3 }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("Home", "/");
              document.getElementById("closeButton").click();
            }}
            style={{ background: location.pathname === "/" ? "#FF7539" : "" }}
          >
            {/* <ListItemIcon>
              <img src="/images/home.svg" alt="" />
            </ListItemIcon> */}
            <ListItemText primary={translations.header.home} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              document.getElementById("closeButton").click();
              handleChange("services", "/services");
            }}
            style={{
              background: location.pathname === "/services" ? "#FF7539" : "",
            }}
          >
            <ListItemText primary={translations.header.services} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              document.getElementById("closeButton").click();
              handleChange("products", "/products");
            }}
            style={{
              background: location.pathname === "/products" ? "#FF7539" : "",
            }}
          >
            {/* <ListItemIcon>
              <img src="/images/apk_install.svg" alt="" />
            </ListItemIcon> */}
            <ListItemText primary={translations.header.products} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              document.getElementById("closeButton").click();
              handleChange("company", "/company");
            }}
            style={{
              background: location.pathname === "/company" ? "#FF7539" : "",
            }}
          >
            {/* <ListItemIcon>
              <img src="/images/apk_install.svg" alt="" />
            </ListItemIcon> */}
            <ListItemText primary={translations.header.company} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              document.getElementById("closeButton").click();
              handleChange("company", "/company");
            }}
            style={{
              background: location.pathname === "/company" ? "#FF7539" : "",
            }}
          >
            {/* <ListItemIcon>
              <img src="/images/apk_install.svg" alt="" />
            </ListItemIcon> */}
            <ListItemText primary={translations.header.company} />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleChange("Services")}
            style={{
              background:
                openCollapse === "Services" || checkServiceMenuActive()
                  ? "#b8cbe5"
                  : "",
            }}
          >
           
            <ListItemText primary="Services" />
            {openCollapse === "Services" ? (
              <ExpandLess className="list_item_icon_style" />
            ) : (
              <ExpandMore className="list_item_icon_style" />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse
          in={openCollapse === "Services"}
          timeout="auto"
          unmountOnExit
          style={{ background: "#e2e8f0" }}
        >
          <div
            className="topbar_submenu_menu"
            // onClick={MenuHandleClose}
            onClick={() => {
              handleChange("Services", "/fintech-software-development");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/fintech-software-development"
                  ? "#f3f3f3"
                  : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Fintech software development</div>
          </div>

          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Services", "/ewallet-app-development");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/ewallet-app-development"
                  ? "#f3f3f3"
                  : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>eWallet app development</div>
          </div>

          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Services", "/p2p-development");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/p2p-development" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>P2P development</div>
          </div>
        </Collapse> */}
      </List>
    </Box>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <IconButton
            variant="outlined"
            disableElevation
            // color="#25316d"
            aria-label="open drawer"
            edge="start"
            // color="primary"
            sx={{
              // display: { md: "none" },
              border: darkMode ? "1px solid #fff" : "1px solid #525252",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon
              style={{
                color: darkMode ? "#fff" : "#525252",
              }}
            />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={`${darkMode ? "drawer_style_dark" : "drawer_style"}`}
          >
            {list(anchor)}

            <Button
              className={`nav_button ${darkMode && "nav_button_dark_color"}  }`}
              sx={{
                marginBottom: "15px",
              }}
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                >
                  <rect
                    x="1.26758"
                    y="3.69531"
                    width="21.2322"
                    height="14.9096"
                    rx="1.5"
                    fill="white"
                    stroke="#113CFC"
                  />
                  <path
                    d="M1.26758 9.47917V9.97917H1.76758H9.13566V11.4146C9.13566 12.2431 9.80723 12.9146 10.6357 12.9146H13.1317C13.9601 12.9146 14.6317 12.2431 14.6317 11.4146V9.97917H21.9998H22.4998V9.47917V5.19531C22.4998 4.36689 21.8282 3.69531 20.9998 3.69531H2.76758C1.93915 3.69531 1.26758 4.36688 1.26758 5.19531V9.47917Z"
                    fill="#FFC93C"
                    stroke="#113CFC"
                  />
                  <path
                    d="M6.95801 2.93193V3.43193H7.45801H15.6773H16.1773V2.93193V2.03516C16.1773 1.20673 15.5058 0.535156 14.6773 0.535156H8.45801C7.62958 0.535156 6.95801 1.20673 6.95801 2.03516V2.93193Z"
                    stroke="#113CFC"
                  />
                </svg>
              }
              onClick={handleClickOpen}
            >
              {translations.header.anyBusinessIdea}
            </Button>

            <Button
              className={`nav_button ${darkMode && "nav_button_dark_color"} ${
                lang === "kr" && "nav_button_endIcon"
              }`}
              endIcon={<KeyboardArrowDownIcon />}
              id="basic-button"
              aria-controls={openLanguage ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openLanguage ? "true" : undefined}
              onClick={handleLanguageClick}
            >
              {languageButtonValue}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openLanguage}
              onClose={handleLanguageClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              className="mobile_menu_style"
            >
              <MenuItem
                onClick={() => {
                  handleLanguageClose();
                  setLang("en");
                  setLanguageButtonValue(translations.header.english);
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                {translations.header.english} &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLanguageClose();
                  setLang("kr");
                  setLanguageButtonValue(translations.header.kurdish);
                }}
              >
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                {translations.header.kurdish}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </MenuItem>
            </Menu>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default MobileDrawer;
