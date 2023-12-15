"use client";

import styles from "./ContentWrapper.module.css";

import { useState, useRef } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

import Header from "@/components/Header/Header";
import FullpageContent from "../FullpageContent/FullpageContent";

// This component wraps all the page's content so it can pass the fullpageApi to components outside the ReactFullpageWrapper

const ContentWrapper = () => {
  // This state stores the section currently viewed by the user
  const [activeSection, setActiveSection] = useState("home");

  // This state stores the fullpageApi prop given by the ReactFullpageWrapper
  const [fullpageApiState, setFullpageApiState] = useState(null);

  // const headerHeight = useRef(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <>
      <Header
        // headerHeight={headerHeight.current}
        setHeaderHeight={setHeaderHeight}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        fullpageApiState={fullpageApiState}
      />
      <ReactFullpage
        licenseKey={"gplv3-license"}
        scrollingSpeed={1000}
        credits={false}
        anchors={["home", "services", "practice", "appointment", "contact"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <FullpageContent
                headerHeight={headerHeight}
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
