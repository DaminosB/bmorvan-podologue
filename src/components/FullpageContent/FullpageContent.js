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
    presentationText:
      "Passionné des sports d’ultra-endurance ainsi que des activités outdoor (trailrunning, randonnée, cyclisme sur route, vtt, wakeboard, wing foil, ski…), cette pratique m’a amené à effectuer des formations spécialisées pour adapter le métier de podologue aux exigences et spécificités de la pratique sportive de tous niveaux. Par ailleurs, adhérent de l’association Podoxygène, je travaille régulièrement pour des trails nationaux ou internationaux (équipes médicales UTMB, HMDS, TREK’In’Gazelles…). Je serais ravi de pour pouvoir vous soigner (soins de pédicurie, bilan podologique) mais aussi de vous apporter mon expertise dans le cadre de la pratique de vos activités physiques et sportives. Je peux également adapter votre matériel sportif en fonction de vos spécificités physiques (bikefiting, bootfiting).",
    phoneNumber: "02.57.23.06.34",
    clinicName: "Maison Médicale Bretagne Occidentale - Kerlic",
    address: "15\u00a0chemin de\u00a0Penhoat 29000\u00a0Quimper",
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
        <ContactSection />
      </SectionLayout>
    </main>
  );
};

export default FullpageContent;
