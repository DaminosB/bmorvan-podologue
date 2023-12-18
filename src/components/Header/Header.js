import styles from "./Header.module.css";

import { useEffect, useRef } from "react";

import {
  faHouse,
  faPlus,
  faHouseMedical,
  faCalendarPlus,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  activeSection,
  setActiveSection,
  fullpageApiState,
  setHeaderHeight,
}) => {
  // activeSection: String. The name of the section that is currently being displayed on the user's screen
  // setActiveSection: Function.
  // fullpageApiState: Object. The prop given to the ReactFullpageWrapper's children, transmitted through a state from the parent
  // setHeaderHeight: Function. Is used to give other components the height of the header so the contents don't overlap

  // This array stores all the navigation options available in the nav. They will be displayed through a .map function
  const navigationOptions = [
    {
      ref: useRef(null),
      name: "home",
      icon: faHouse,
      text: "Accueil",
    },
    {
      ref: useRef(null),
      name: "services",
      icon: faPlus,
      text: "Soins\u00A0& tarifs",
    },
    {
      ref: useRef(null),
      name: "practice",
      icon: faHouseMedical,
      text: "Le cabinet",
    },
    {
      ref: useRef(null),
      name: "appointment",
      icon: faCalendarPlus,
      text: "Prendre RDV",
    },
    {
      ref: useRef(null),
      name: "contact",
      icon: faEnvelope,
      text: "Contact",
    },
  ];

  // To get the total height of the header, we need to pair it wuth a ref
  const headerRef = useRef(null);

  // The slider div will show which section the user is viewing by sliding under its correspounding button
  const sliderRef = useRef(null);

  // This ref will be paired with the nav tag
  const navRef = useRef(null);

  // These refs will be paired with navigation buttons
  const leftShadowRef = useRef(null);
  const rightShadowRef = useRef(null);

  // This func moves the window from a section to another using the sectionName arg
  const moveToSection = (sectionName) => {
    fullpageApiState.moveTo(sectionName);
    setTimeout(() => setActiveSection(sectionName), 250);
  };

  // This func scrolls the headerNav vertically
  const handleScroll = (distance) => {
    navRef.current.scrollBy({
      left: distance,
      behavior: "smooth",
    });
  };

  // This func sets shadows around the headerNav with divs in absolute positions in the parent
  const navShadowsSettings = () => {
    // We start by defining the number of pixels scrolled and the max number of pixels that can be scrolled
    const scrollPosition = navRef.current.scrollLeft;
    const maxScroll = navRef.current.scrollWidth - navRef.current.clientWidth;

    // If we are on the extreme left, no need for shadows
    if (scrollPosition === 0) {
      leftShadowRef.current.style.opacity = 0;
      leftShadowRef.current.style.width = "0px";
    } else if (scrollPosition > 0) {
      leftShadowRef.current.style.opacity = 1;
      leftShadowRef.current.style.width = "15px";
    }

    // If we are on the extreme right, no need for shadows (the 1 takes account of a margin of error)
    if (scrollPosition + 1 >= maxScroll) {
      rightShadowRef.current.style.opacity = 0;
      rightShadowRef.current.style.width = "0px";
    } else if (scrollPosition < maxScroll) {
      rightShadowRef.current.style.width = "15px";
      rightShadowRef.current.style.opacity = 1;
    }
  };

  useEffect(() => {
    // At birth, we set the headerHoght so the other components can have a spacer so the header doosent overlap with the content
    setHeaderHeight(headerRef.current.scrollHeight);

    // We start by identifying the active index
    const activeRefIndex = navigationOptions.findIndex(
      (elem) => elem.name === activeSection
    );

    // We want the corresponding button to be visible in teh header
    navigationOptions[activeRefIndex].ref.current.scrollIntoView({
      behavior: "smooth",
    });

    // We store the active button's dimensions
    const buttonWidth =
      navigationOptions[activeRefIndex].ref.current.scrollWidth;

    // We now calculate the slider's position. It must be located under the button corresponding to the active section
    const sliderLeftPosition =
      navigationOptions[activeRefIndex].ref.current.offsetLeft;

    // We now apply the calculated position to the slider
    sliderRef.current.style.left = `${sliderLeftPosition}px`;
    sliderRef.current.style.width = `${buttonWidth}px`;

    // We want a shadow on left and right of the navContainer
    navShadowsSettings();

    // This listener will call the navShadowsSettings func on scroll to set the shadows on the navContainer
    navRef.current.addEventListener("scroll", navShadowsSettings);
  }, [activeSection]);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className="container">
        <div>
          <span>Benjamin Morvan podologue à Quimper</span>
        </div>
        <div className={styles.navContainer}>
          <button
            onClick={() => handleScroll(-150)}
            ref={leftShadowRef}
            className={styles.shadow}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={() => handleScroll(150)}
            ref={rightShadowRef}
            className={styles.shadow}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <nav className={styles.headerNav} ref={navRef}>
            <div className={styles.slider} ref={sliderRef}></div>
            {navigationOptions.map((navOption, i) => {
              return (
                <button
                  key={navOption.name}
                  onClick={() => moveToSection(navOption.name)}
                  ref={navOption.ref}
                >
                  <FontAwesomeIcon icon={navOption.icon} />
                  <span>{navOption.text}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
