import styles from "./ContactSection.module.css";

import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

const ContactSection = ({ setActiveSection, sectionName, fullpageApi }) => {
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
    <form className={`container ${styles.contactSection}`} ref={ref}>
      <h2>Contact</h2>
      <label htmlFor="name">
        <input type="text" name="nom" id="name" placeholder="Votre nom" />
      </label>
      <label htmlFor="email">
        <input type="email" name="email" id="email" placeholder="Votre email" />
      </label>
      <label htmlFor="telephone">
        <input
          type="tel"
          name="téléphone"
          id="telephone"
          pattern="[0-9]{10}"
          placeholder="Votre numéro de téléphone"
        />
      </label>
      <button type="submit">Valider</button>
    </form>
  );
};

export default ContactSection;
