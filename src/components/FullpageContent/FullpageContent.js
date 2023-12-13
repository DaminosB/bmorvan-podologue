import styles from "./FullpageContent.module.css";

import { useEffect } from "react";

import HomeSection from "@/components/HomeSection/HomeSection";
import ServicesAndRates from "@/components/ServicesAndRates/ServicesAndRates";
import AppointmentSection from "../AppointmentSection/AppointmentSection";

// This component displays the fullpage sections and sets fullpageApiState

const FullpageContent = ({
  setFullpageApiState,
  fullpageApi,
  setActiveSection,
}) => {
  // setFullPageApiState: Function. Is used to update fullpageApiState with the content of fullPageApi
  // fullPageApi: Object. Given by the ReactFullpageWrapper
  // setActiveSection: Function. Is used to update activeSection so it always stores the section currently displayed

  useEffect(() => {
    // This useEffect sets fullpageApiState for its parent so it can be used by components outside the wrapper
    // Only when the fullpageApi prop is available
    fullpageApi && setFullpageApiState(fullpageApi);
  }, [fullpageApi, setFullpageApiState]);

  return (
    <main className={styles.main}>
      <section className="section">
        <HomeSection setActiveSection={setActiveSection} sectionName="home" />
      </section>
      <section className="section">
        <ServicesAndRates
          setActiveSection={setActiveSection}
          sectionName="practice"
        />
      </section>
      <section className="section">
        <ServicesAndRates
          setActiveSection={setActiveSection}
          sectionName="services"
        />
      </section>
      <section className="section">
        <AppointmentSection
          setActiveSection={setActiveSection}
          sectionName="appointment"
        />
      </section>
    </main>
  );
};

export default FullpageContent;
