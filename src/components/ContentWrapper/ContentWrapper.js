"use client";

import styles from "./ContentWrapper.module.css";

import { useState } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

import Header from "@/components/Header/Header";
import FullpageContent from "../FullpageContent/FullpageContent";

// This component wraps all the page's content so it can pass the fullpageApi to components outside the ReactFullpageWrapper

const ContentWrapper = () => {
  // This state stores the section currently viewed by the user
  const [activeSection, setActiveSection] = useState("home");

  // This state stores the fullpageApi prop given by the ReactFullpageWrapper
  const [fullpageApiState, setFullpageApiState] = useState(null);

  return (
    <>
      <Header
        activeSection={activeSection}
        fullpageApiState={fullpageApiState}
      />
      <ReactFullpage
        licenseKey={"gplv3-license"}
        scrollingSpeed={1000}
        credits={false}
        anchors={["home", "practice", "services"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <FullpageContent
                fullpageApi={fullpageApi}
                setFullpageApiState={setFullpageApiState}
                setActiveSection={setActiveSection}
              />
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <footer>Made in France</footer>
    </>
  );
};

export default ContentWrapper;
