import styles from "./FullpageContent.module.css";

import { useEffect } from "react";

import HomeSection from "@/components/HomeSection/HomeSection";
import ServicesAndRates from "@/components/ServicesAndRates/ServicesAndRates";
import AppointmentSection from "@/components/AppointmentSection/AppointmentSection";
import MedicalCenterSection from "@/components/MedicalCenterSection/MedicalCenterSection";
import Spacer from "@/components/Spacer/Spacer";

// This component displays the fullpage sections and sets fullpageApiState

const FullpageContent = ({
  setFullpageApiState,
  fullpageApi,
  setActiveSection,
  headerHeight,
}) => {
  // setFullPageApiState: Function. Is used to update fullpageApiState with the content of fullPageApi
  // fullPageApi: Object. Given by the ReactFullpageWrapper
  // setActiveSection: Function. Is used to update activeSection so it always stores the section currently displayed
  // headerHeight: Number. The height of the Header component. It's given to the spacer component so the header doesn't overlap with the page's content

  useEffect(() => {
    // This useEffect sets fullpageApiState for its parent so it can be used by components outside the wrapper
    // Only when the fullpageApi prop is available
    fullpageApi && setFullpageApiState(fullpageApi);
  }, [fullpageApi, setFullpageApiState]);

  return (
    <main className={styles.main}>
      <section className="section">
        <Spacer height={headerHeight} />
        <HomeSection
          setActiveSection={setActiveSection}
          sectionName="home"
          fullpageApi={fullpageApi}
        />
        <Spacer height={headerHeight / 2} />
      </section>
      <section className="section">
        <Spacer height={headerHeight} />
        <ServicesAndRates
          setActiveSection={setActiveSection}
          sectionName="services"
        />
        <Spacer height={headerHeight / 2} />
      </section>
      <section className="section">
        <Spacer height={headerHeight} />
        <MedicalCenterSection
          setActiveSection={setActiveSection}
          sectionName="practice"
          fullpageApi={fullpageApi}
        />
        <Spacer height={headerHeight / 2} />
      </section>
      <section className="section">
        <Spacer height={headerHeight} />
        <AppointmentSection
          setActiveSection={setActiveSection}
          sectionName="appointment"
        />
        <Spacer height={headerHeight / 2} />
      </section>
      <section className="section">
        <Spacer height={headerHeight} />
        <AppointmentSection
          setActiveSection={setActiveSection}
          sectionName="contact"
          disable={true}
        />
        <Spacer height={headerHeight / 2} />
      </section>
    </main>
  );
};

export default FullpageContent;
