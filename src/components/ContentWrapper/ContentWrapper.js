"use client";

import styles from "./ContentWrapper.module.css";

import { useState, useRef, useEffect } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

import Header from "@/components/Header/Header";
import HomeSection from "@/components/HomeSection/HomeSection";
import ServicesAndRates from "@/components/ServicesAndRates/ServicesAndRates";
import scrollMovement from "@/app/animations/scrollMovement";

const ContentWrapper = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sectionsRefArray = useRef([]);

  //   useEffect(() => {
  //     const gapPositions = [];
  //     for (let i = 0; i < sectionsRefArray.current.length; i++) {
  //       gapPositions.push({
  //         start: sectionsRefArray.current[i].sectionRef.scrollHeight,
  //         end: sectionsRefArray.current[i].sectionRef.scrollHeight + 50,
  //       });
  //     }
  //     console.log(gapPositions);
  //     window.addEventListener("scroll", () => {
  //       const bottomOfThePagePosition = window.scrollY + window.innerHeight;
  //       for (let i = 0; i < gapPositions.length; i++) {
  //         if (
  //           bottomOfThePagePosition > gapPositions[i].start &&
  //           bottomOfThePagePosition < gapPositions[i].end
  //         ) {
  //           scrollMovement(sectionsRefArray.current[i + 1].sectionRef);
  //         }
  //       }
  //     });
  //     const refIndex = sectionsRefArray.current.findIndex(
  //       (elem) => elem.name === activeSection
  //     );
  //     // if (sectionsRefArray.current[refIndex]) {
  //     //   scrollMovement(sectionsRefArray.current[refIndex].sectionRef);
  //     // }
  //   }, [activeSection]);

  return (
    <>
      <Header
        sectionsRefArray={sectionsRefArray.current}
        setActiveSection={setActiveSection}
        // fullpageApi={fullpageApi}
      />
      <ReactFullpage
        licenseKey={"gplv3-license"}
        scrollingSpeed={1000}
        credits={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <main className={styles.main}>
                <div className="section" id="HomeSection">
                  <HomeSection
                    setActiveSection={setActiveSection}
                    sectionsRefArray={sectionsRefArray.current}
                  />
                </div>
                <div className="section">
                  <ServicesAndRates
                    setActiveSection={setActiveSection}
                    sectionsRefArray={sectionsRefArray.current}
                    id={1}
                  />
                </div>
                <div className="section">
                  <ServicesAndRates
                    setActiveSection={setActiveSection}
                    sectionsRefArray={sectionsRefArray.current}
                    id={2}
                  />
                </div>
              </main>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <footer>Made in France</footer>
    </>
  );
};

export default ContentWrapper;
