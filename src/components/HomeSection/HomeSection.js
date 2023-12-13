import styles from "./HomeSection.module.css";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import {
  faSquarePhone,
  faCalendarPlus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pushRefInSectionsRefArray from "@/utils/pushRefInSectionsRefArray";
import scrollMovement from "@/app/animations/scrollMovement";

const Home = ({ sectionsRefArray, setActiveSection }) => {
  const sectionName = "home";
  const sectionRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  // useEffect(
  //   () => {
  //     pushRefInSectionsRefArray(sectionsRefArray, sectionName, sectionRef);
  //     // setTimeout(() => {
  //     //   if (inView) {
  //     //     // setActiveSection(sectionName);
  //     //     scrollMovement(sectionRef.current);
  //     //   }
  //     // }, 500);
  //     // console.log(sectionName, sectionRef.current.offsetTop);
  //   },
  //   [
  //     // inView
  //   ]
  // );

  return (
    // <section className={styles.homeSection} ref={sectionRef}>
    <div className={`container ${styles.homeSection}`} ref={ref}>
      <div className={styles.titleDiv}>
        <h1>
          Benjamin Morvan P&eacute;dicure-podologue dipl&ocirc;m&eacute;
          d'&Eacute;tat &agrave; Quimper
        </h1>
        <p>
          Ma passion pour les sports outdoors m’a amen&eacute; &agrave;
          effectuer diverses formations dans l’objectif d’accroitre mes
          connaissances et comp&eacute;tences en lien avec la prise en soin des
          pratiquants.
        </p>
        <p>
          L’ensemble de ces formations m’ont &eacute;galement permis de
          d&eacute;velopper un int&eacute;rêt important pour l’analyse et la
          compr&eacute;hension du mouvement humain. Pratiquant des sports
          d’ultra-endurance ainsi que des activit&eacute;s outdoor tel que le
          trailrunning, le cyclisme sur route, le vtt, le ski en hiver … Je
          serais ravi de pouvoir &eacute;changer avec vous sur votre pratique et
          vos usages. Ces pratiques sportives m’amènent &eacute;galement
          &agrave; travailler r&eacute;gulièrement au sein d’&eacute;quipes
          m&eacute;dicales sur des trails nationaux ou internationaux (UTMB,
          HMDS, TREK’In’Gazelles…)
        </p>
      </div>
      <div className={styles.optionsDiv}>
        <span>
          <FontAwesomeIcon icon={faSquarePhone} />
          02.57.23.06.34
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarPlus} />
          Prendre rendez-&#xFEFF;vous
        </span>
        <span>
          <FontAwesomeIcon icon={faLocationDot} />
          Maison&nbsp;m&eacute;dicale de&nbsp;Kerlic
          <br />
          9&nbsp;chemin&nbsp;de&nbsp;Penhoat 29000&nbsp;Quimper
        </span>
      </div>
    </div>
    // </section>
  );
};

export default Home;
