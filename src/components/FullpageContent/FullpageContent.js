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

  const data = {
    name: "Benjamin Morvan",
    titleText: "Pédicure-podologue diplômé\u00a0d'État à Quimper",
    phoneNumber: "02.57.23.06.34",
    clinicName: "Maison Médicale Bretagne Occidentale - Kerlic",
    address: "9\u00a0chemin de\u00a0Penhoat 29000\u00a0Quimper",
  };

  return (
    <main className={styles.main}>
      <SectionLayout
        headerHeight={headerHeight}
        setActiveSection={setActiveSection}
        sectionName={"home"}
        fullpageApi={fullpageApi}
        backgroundImage={homeBanner}
      >
        <HomeSection fullpageApi={fullpageApi} data={data} />
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
        <MedicalCenterSection fullpageApi={fullpageApi} data={data} />
      </SectionLayout>
      <SectionLayout
        headerHeight={headerHeight}
        setActiveSection={setActiveSection}
        sectionName="appointment"
        fullpageApi={fullpageApi}
        backgroundImage={appointmentBanner}
      >
        <AppointmentSection data={data} />
      </SectionLayout>
      <SectionLayout
        headerHeight={headerHeight}
        setActiveSection={setActiveSection}
        sectionName="contact"
        fullpageApi={fullpageApi}
        backgroundImage={contactBanner}
      >
        <ContactSection data={data} />
      </SectionLayout>
    </main>
  );
};

export default FullpageContent;
