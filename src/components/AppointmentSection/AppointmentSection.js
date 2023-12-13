import styles from "./AppointmentSection.module.css";

import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

const AppointmentSection = ({ setActiveSection, sectionName }) => {
  // The inView hook has a inView key which is a boolean that changes value from false to true when the ref appears on the user's screen
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    // Everytime the component is inView, the activeSection is updated
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection]);
  return (
    <div className="container" ref={ref}>
      AppointmentSection
    </div>
  );
};

export default AppointmentSection;
