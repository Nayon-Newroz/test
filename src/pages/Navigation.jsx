import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Test from "../Test";
import Company from "./Company";
import Services from "./Services";
import MobileApplicationDevelopment from "./services/MobileApplicationDevelopment";
import CustomSoftwareDevelopment from "./services/CustomSoftwareDevelopment";
import Contact from "./Contact";
import Career from "./Career";
import CareerDetails from "./CareerDetails";
import ApplyForm from "./ApplyForm";
import CaseStudies from "./CaseStudies";
import Products from "./Products";
import FastPayEwallet from "./FastPayEwallet";
import DalkurdFootballAssociation from "./DalkurdFootballAssociation";
import EKYCSolution from "./EKYCSolution";
import FastConnectPOS from "./FastConnectPOS";
import FaceRecognition from "./FaceRecognition";
import DevopsServices from "./services/DevopsServices";
import Blockchain from "./services/Blockchain";
import SoftwareTesting from "./services/SoftwareTesting";
import WebApplicationDevelopment from "./services/WebApplicationDevelopment";
import Design from "./services/Design";
import EKYCVerificationServices from "./services/EKYCVerificationServices";
import CloudConsultancy from "./services/CloudConsultancy";

const Navigation = ({ translations, lang, darkMode }) => {
  return (
    <div>
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <Home translations={translations} lang={lang} darkMode={darkMode} />
          }
        />
        <Route
          path="/company"
          element={
            <Company
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services/mobile-application-development"
          element={
            <MobileApplicationDevelopment
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services/custom-software-development"
          element={
            <CustomSoftwareDevelopment
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services/devops-services"
          element={
            <DevopsServices
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services/blockchain"
          element={
            <Blockchain
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services/software-testing"
          element={
            <SoftwareTesting
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services/web-application-development"
          element={
            <WebApplicationDevelopment
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services/design"
          element={
            <Design
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services/ekyc-verification-services"
          element={
            <EKYCVerificationServices
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services/cloud-consultancy"
          element={
            <CloudConsultancy
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />

        <Route
          path="/contact"
          element={
            <Contact
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/career"
          element={
            <Career
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/career/details"
          element={
            <CareerDetails
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/case-studies"
          element={
            <CaseStudies
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/product/fastpay-ewallet"
          element={
            <FastPayEwallet
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/product/dalkurd-football-association"
          element={
            <DalkurdFootballAssociation
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/product/e-kyc-solution"
          element={
            <EKYCSolution
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/product/fast-connect-pos"
          element={
            <FastConnectPOS
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/product/face-recognition"
          element={
            <FaceRecognition
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />

        {/* <Route
          path="/apply"
          element={
            <ApplyForm
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        /> */}
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default Navigation;
