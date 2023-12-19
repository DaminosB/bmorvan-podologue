import styles from "./SectionLayout.module.css";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Spacer from "@/components/Spacer/Spacer";

const SectionLayout = ({
  headerHeight,
  setActiveSection,
  sectionName,
  fullpageApi,
  children,
}) => {
  // headerHeight: Number. The height of the header. We put a spacer of the same height to avoid any overlaps
  // setActiveSection: Function. Is called when the component is in view to update the activeSection state
  // sectionName: String. The name of the section
  // fullpageApi: Object. The prop given by the ReactFullpageWrapper

  // The inView hook has a inView key which is a boolean that changes value from false to true when the ref appears on the user's screen
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    // Everytime the component is inView, the activeSection is updated
    if (inView && fullpageApi.getActiveSection().anchor === sectionName) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection]);

  return (
    <section className="section" ref={ref}>
      <Spacer height={headerHeight} />
      {children}
      <Spacer height={headerHeight / 2} />
    </section>
  );
};

export default SectionLayout;
