import scrollMovement from "@/app/animations/scrollMovement";
import styles from "./Header.module.css";

import {
  faHouse,
  faPlus,
  faHouseMedical,
  faCalendarPlus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ sectionsRefArray, setActiveSection, fullpageApi }) => {
  const scrollToSection = (sectionName) => {
    const indexToFocus = sectionsRefArray.findIndex(
      (elem) => elem.name === sectionName
    );

    const refToScrollTo = sectionsRefArray[indexToFocus].sectionRef;

    scrollMovement(refToScrollTo);
    setActiveSection(sectionName);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div>
          <span>Benjamin Morvan podologue à Quimper</span>
        </div>
        <button onClick={() => console.log(fullpageApi.getActiveSection())}>
          test
        </button>
        <nav className={styles.headerNav}>
          <button onClick={() => scrollToSection("home")}>
            <FontAwesomeIcon icon={faHouse} />
            <span>Accueil</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faHouseMedical} />
            <span>Le cabinet</span>
          </button>
          <button onClick={() => scrollToSection("services")}>
            <FontAwesomeIcon icon={faPlus} />
            <span>Soins&nbsp;& tarifs</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faCalendarPlus} />
            <span>Prendre RDV</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Contact</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
