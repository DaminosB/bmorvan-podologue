import styles from "./FullpageContent.module.css";

import { useEffect } from "react";

import HomeSection from "@/components/HomeSection/HomeSection";
import ServicesAndRates from "@/components/ServicesAndRates/ServicesAndRates";
import AppointmentSection from "@/components/AppointmentSection/AppointmentSection";
import MedicalCenterSection from "@/components/MedicalCenterSection/MedicalCenterSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import SectionLayout from "@/components/SectionLayout/SectionLayout";

import homeBanner from "@/img/generals/home-banner.jpeg";
import servicesBanner from "@/img/generals/services-banner.jpg";
import medicalCenterBanner from "@/img/generals/medical-center-banner.jpg";
import appointmentBanner from "@/img/generals/appointment-banner.jpg";
import contactBanner from "@/img/generals/contact-banner.jpg";

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
      <SectionLayout
        headerHeight={headerHeight}
        setActiveSection={setActiveSection}
        sectionName={"home"}
        fullpageApi={fullpageApi}
        backgroundImage={homeBanner}
      >
        <HomeSection fullpageApi={fullpageApi} />
      </SectionLayout>
      <SectionLayout
        headerHeight={headerHeight}
        setActiveSection={setActiveSection}
        sectionName="services"
        fullpageApi={fullpageApi}
        backgroundImage={servicesBanner}
      >
        <ServicesAndRates />
      </SectionLayout>
      <SectionLayout
        headerHeight={headerHeight}
        setActiveSection={setActiveSection}
        sectionName="practice"
        fullpageApi={fullpageApi}
        backgroundImage={medicalCenterBanner}
      >
        <MedicalCenterSection fullpageApi={fullpageApi} />
      </SectionLayout>
      <SectionLayout
        headerHeight={headerHeight}
        setActiveSection={setActiveSection}
        sectionName="appointment"
        fullpageApi={fullpageApi}
        backgroundImage={appointmentBanner}
      >
        <AppointmentSection />
      </SectionLayout>
      <SectionLayout
        headerHeight={headerHeight}
        setActiveSection={setActiveSection}
        sectionName="contact"
        fullpageApi={fullpageApi}
        backgroundImage={contactBanner}
      >
        <ContactSection />
      </SectionLayout>
    </main>
  );
};

export default FullpageContent;
