import styles from "./Header.module.css";

import { useEffect, useRef } from "react";

import {
  faHouse,
  faPlus,
  faHouseMedical,
  faCalendarPlus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ activeSection, fullpageApiState, setActiveSection }) => {
  // activeSection: String. The name of the section that is currently being displayed on the user's screen
  // fullpageApiState: Object. The prop given to the ReactFullpageWrapper's children, transmitted through a state from the parent

  // This array stores all the navigation options available in the nav. They will be displayed through a .map function
  const navigationOptions = [
    {
      name: "home",
      icon: faHouse,
      text: "Accueil",
    },
    {
      name: "practice",
      icon: faHouseMedical,
      text: "Le cabinet",
    },
    {
      name: "services",
      icon: faPlus,
      text: "Soins & tarifs",
    },
    {
      name: "appointment",
      icon: faCalendarPlus,
      text: "Prendre RDV",
    },
    {
      name: "contact",
      icon: faLocationDot,
      text: "Contact",
    },
  ];

  // For every entry in the navigationOptions array, we want an object with a ref that will be paired with a button in the nav and the name of the button
  const buttonRefsArray = navigationOptions.map((navOption) => {
    return { ref: useRef(null), name: navOption.name };
  });

  // The slider div will show which section the user is viewing by sliding under its correspounding button
  const sliderRef = useRef(null);

  // This ref will be paired with the nav tag
  const navRef = useRef(null);

  // This func moves the window from a section to another using the sectionName arg
  const moveToSection = (sectionName) => {
    fullpageApiState.moveTo(sectionName);
    setTimeout(() => setActiveSection(sectionName), 250);
  };

  // const activeSectionBackUp = useRef("home");

  // This useEffect calculate the slider's position
  useEffect(() => {
    // activeSectionBackUp.current = activeSection;

    setTimeout(() => {
      // We start by identifying the active index
      const activeRefIndex = buttonRefsArray.findIndex(
        (elem) => elem.name === activeSection
      );

      // We store the active button's dimensions
      const buttonWidth =
        buttonRefsArray[activeRefIndex].ref.current.scrollWidth;
      const buttonHeight =
        buttonRefsArray[activeRefIndex].ref.current.scrollHeight;

      // We store the width and height of the button's parent (the nav tag)
      const navWidth = navRef.current.scrollWidth;
      const navHeight = navRef.current.scrollHeight;

      // We now calculate the slider's position. It must be located under the button corresponding to the active section
      const sliderTopPosition =
        buttonRefsArray[activeRefIndex].ref.current.offsetTop;

      // bottomPosition is equal to the height of the parent - the button's topPosition + the button's height
      const sliderBottomPosition =
        navHeight - (sliderTopPosition + buttonHeight);

      const sliderLeftPosition =
        buttonRefsArray[activeRefIndex].ref.current.offsetLeft;

      // rightPosition is equal to the width of the parent - the button's leftPosition + the button's width
      const sliderRightPosition = navWidth - (sliderLeftPosition + buttonWidth);

      // We now apply the calculated position to the slider
      sliderRef.current.style.left = `${sliderLeftPosition}px`;
      sliderRef.current.style.right = `${sliderRightPosition}px`;
    }, 550);
  }, [activeSection]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div>
          <span>Benjamin Morvan podologue à Quimper</span>
        </div>
        <nav className={styles.headerNav} ref={navRef}>
          <div className={styles.slider} ref={sliderRef}></div>
          {navigationOptions.map((navOption, i) => {
            return (
              <button
                key={navOption.name}
                onClick={() => moveToSection(navOption.name)}
                ref={buttonRefsArray[i].ref}
              >
                <FontAwesomeIcon icon={navOption.icon} />
                <span>{navOption.text}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
